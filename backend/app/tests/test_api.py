import pytest
from fastapi.testclient import TestClient
from backend.app.main import app
from backend.app.seeds.seed_data import seed_database
from backend.app.config import settings

client = TestClient(app)

@pytest.fixture(scope="session", autouse=True)
def setup_test_db():
    seed_database()

# -----------------------------------------------------------------------------
# 1. AUTHENTICATION TESTS
# -----------------------------------------------------------------------------
def test_valid_admin_login():
    response = client.post("/api/auth/login", json={
        "username": settings.DEFAULT_ADMIN_USERNAME,
        "password": settings.DEFAULT_ADMIN_PASSWORD
    })
    assert response.status_code == 200
    data = response.json()
    assert data["success"] is True
    assert "access_token" in data["data"]
    assert data["data"]["token_type"] == "bearer"

def test_invalid_admin_login():
    response = client.post("/api/auth/login", json={
        "username": "wronguser",
        "password": "wrongpassword"
    })
    assert response.status_code == 401
    data = response.json()
    assert data["success"] is False

def test_protected_admin_endpoint_without_token():
    response = client.get("/api/admin/dashboard")
    assert response.status_code == 401
    data = response.json()
    assert data["success"] is False

def test_protected_admin_endpoint_with_valid_token():
    login_res = client.post("/api/auth/login", json={
        "username": settings.DEFAULT_ADMIN_USERNAME,
        "password": settings.DEFAULT_ADMIN_PASSWORD
    })
    token = login_res.json()["data"]["access_token"]

    response = client.get("/api/admin/dashboard", headers={"Authorization": f"Bearer {token}"})
    assert response.status_code == 200
    data = response.json()
    assert data["success"] is True
    assert "registration_status" in data["data"]
    assert data["data"]["announcements_count"] >= 0

# -----------------------------------------------------------------------------
# 2. REGISTRATION TESTS (Dynamic Google Form URL & Status)
# -----------------------------------------------------------------------------
def test_public_registration_default_state():
    response = client.get("/api/registration")
    assert response.status_code == 200
    data = response.json()
    assert data["success"] is True
    # Initially status is OPEN and URL is None (waiting for senior's real form URL)
    assert data["data"]["status"] in ["OPEN", "CLOSED", "COMING_SOON"]

def test_admin_update_registration_status_and_url():
    # 1. Log in
    login_res = client.post("/api/auth/login", json={
        "username": settings.DEFAULT_ADMIN_USERNAME,
        "password": settings.DEFAULT_ADMIN_PASSWORD
    })
    token = login_res.json()["data"]["access_token"]
    headers = {"Authorization": f"Bearer {token}"}

    # 2. Update to COMING_SOON with no URL
    put_res1 = client.put("/api/admin/registration", headers=headers, json={
        "status": "COMING_SOON",
        "registration_url": ""
    })
    assert put_res1.status_code == 200
    assert put_res1.json()["data"]["status"] == "COMING_SOON"
    assert put_res1.json()["data"]["registration_url"] is None

    # Verify public endpoint reflects COMING_SOON
    pub_res1 = client.get("/api/registration")
    assert pub_res1.json()["data"]["status"] == "COMING_SOON"
    assert pub_res1.json()["data"]["registration_url"] is None

    # 3. Update to OPEN with a test Google Form URL
    test_google_form = "https://forms.google.com/test-arenacore-hackathon"
    put_res2 = client.put("/api/admin/registration", headers=headers, json={
        "status": "OPEN",
        "registration_url": test_google_form
    })
    assert put_res2.status_code == 200
    assert put_res2.json()["data"]["status"] == "OPEN"
    assert put_res2.json()["data"]["registration_url"] == test_google_form

    # Verify public endpoint reflects configured Google Form URL
    pub_res2 = client.get("/api/registration")
    assert pub_res2.json()["data"]["status"] == "OPEN"
    assert pub_res2.json()["data"]["registration_url"] == test_google_form

    # 4. Update to CLOSED
    put_res3 = client.put("/api/admin/registration", headers=headers, json={
        "status": "CLOSED"
    })
    assert put_res3.status_code == 200
    assert put_res3.json()["data"]["status"] == "CLOSED"

    # Reset back to OPEN with null URL as required by organizers
    client.put("/api/admin/registration", headers=headers, json={
        "status": "OPEN",
        "registration_url": None
    })

# -----------------------------------------------------------------------------
# 3. EVENT CONFIGURATION TESTS
# -----------------------------------------------------------------------------
def test_get_event_details():
    response = client.get("/api/event")
    assert response.status_code == 200
    data = response.json()
    assert data["success"] is True
    assert "ARENACORE" in data["data"]["event_name"]

def test_admin_update_event_details():
    login_res = client.post("/api/auth/login", json={
        "username": settings.DEFAULT_ADMIN_USERNAME,
        "password": settings.DEFAULT_ADMIN_PASSWORD
    })
    token = login_res.json()["data"]["access_token"]
    headers = {"Authorization": f"Bearer {token}"}

    update_res = client.put("/api/admin/event", headers=headers, json={
        "tagline": "DEEP TECH • HIGH IMPACT • 24-HOUR CODEATHON"
    })
    assert update_res.status_code == 200
    assert update_res.json()["data"]["tagline"] == "DEEP TECH • HIGH IMPACT • 24-HOUR CODEATHON"

# -----------------------------------------------------------------------------
# 4. ANNOUNCEMENTS CRUD TESTS
# -----------------------------------------------------------------------------
def test_announcements_crud():
    login_res = client.post("/api/auth/login", json={
        "username": settings.DEFAULT_ADMIN_USERNAME,
        "password": settings.DEFAULT_ADMIN_PASSWORD
    })
    token = login_res.json()["data"]["access_token"]
    headers = {"Authorization": f"Bearer {token}"}

    # Create
    create_res = client.post("/api/admin/announcements", headers=headers, json={
        "title": "Special Cloud Workshop",
        "content": "Google Cloud architectures hands-on session at 4 PM.",
        "category": "Workshop",
        "is_published": True,
        "publish_date": "2026-10-05"
    })
    assert create_res.status_code == 201
    new_id = create_res.json()["data"]["id"]

    # Public List
    pub_res = client.get("/api/announcements")
    assert pub_res.status_code == 200
    titles = [a["title"] for a in pub_res.json()["data"]]
    assert "Special Cloud Workshop" in titles

    # Update
    update_res = client.put(f"/api/admin/announcements/{new_id}", headers=headers, json={
        "title": "Special Cloud Workshop - Room 204"
    })
    assert update_res.status_code == 200
    assert update_res.json()["data"]["title"] == "Special Cloud Workshop - Room 204"

    # Delete
    del_res = client.delete(f"/api/admin/announcements/{new_id}", headers=headers)
    assert del_res.status_code == 200
    assert del_res.json()["data"]["deleted_id"] == new_id

# -----------------------------------------------------------------------------
# 5. SCHEDULE CRUD TESTS
# -----------------------------------------------------------------------------
def test_schedule_crud():
    login_res = client.post("/api/auth/login", json={
        "username": settings.DEFAULT_ADMIN_USERNAME,
        "password": settings.DEFAULT_ADMIN_PASSWORD
    })
    token = login_res.json()["data"]["access_token"]
    headers = {"Authorization": f"Bearer {token}"}

    # Public list
    pub_res = client.get("/api/schedule")
    assert pub_res.status_code == 200
    assert len(pub_res.json()["data"]) >= 1

    # Create
    create_res = client.post("/api/admin/schedule", headers=headers, json={
        "title": "Midnight Coffee Sprint",
        "description": "High energy coffee and snacks distribution.",
        "date": "2026-10-29",
        "start_time": "02:00 AM",
        "end_time": "02:30 AM",
        "location": "Auditorium Lobby",
        "display_order": 99,
        "is_visible": True
    })
    assert create_res.status_code == 201
    new_id = create_res.json()["data"]["id"]

    # Update
    update_res = client.put(f"/api/admin/schedule/{new_id}", headers=headers, json={
        "location": "Cluster B Cafeteria"
    })
    assert update_res.status_code == 200
    assert update_res.json()["data"]["location"] == "Cluster B Cafeteria"

    # Delete
    del_res = client.delete(f"/api/admin/schedule/{new_id}", headers=headers)
    assert del_res.status_code == 200

# -----------------------------------------------------------------------------
# 6. SPONSORS CRUD TESTS
# -----------------------------------------------------------------------------
def test_sponsors_crud():
    login_res = client.post("/api/auth/login", json={
        "username": settings.DEFAULT_ADMIN_USERNAME,
        "password": settings.DEFAULT_ADMIN_PASSWORD
    })
    token = login_res.json()["data"]["access_token"]
    headers = {"Authorization": f"Bearer {token}"}

    # Create
    create_res = client.post("/api/admin/sponsors", headers=headers, json={
        "name": "Google Cloud",
        "logo_url": "https://upload.wikimedia.org/wikipedia/commons/5/51/Google_Cloud_logo.svg",
        "website_url": "https://cloud.google.com",
        "sponsor_level": "Title Sponsor",
        "display_order": 1,
        "is_visible": True
    })
    assert create_res.status_code == 201
    new_id = create_res.json()["data"]["id"]

    # Public list
    pub_res = client.get("/api/sponsors")
    assert pub_res.status_code == 200
    names = [s["name"] for s in pub_res.json()["data"]]
    assert "Google Cloud" in names

    # Delete
    del_res = client.delete(f"/api/admin/sponsors/{new_id}", headers=headers)
    assert del_res.status_code == 200

# -----------------------------------------------------------------------------
# 7. FAQ TESTS (Verifying Team's Contract Preserved 100%)
# -----------------------------------------------------------------------------
def test_faq_team_contract():
    # Public endpoint GET /api/faqs
    pub_res = client.get("/api/faqs")
    assert pub_res.status_code == 200
    data = pub_res.json()
    assert data["success"] is True
    # At least the 5 seeded FAQs from the frontend must exist
    assert len(data["data"]) >= 5

    # Check fields match team's model: id, question, answer, display_order, is_visible
    faq_item = data["data"][0]
    assert "id" in faq_item
    assert "question" in faq_item
    assert "answer" in faq_item
    assert "display_order" in faq_item
    assert "is_visible" in faq_item

    # Admin endpoints: POST, PUT, DELETE under /api/admin/faqs
    login_res = client.post("/api/auth/login", json={
        "username": settings.DEFAULT_ADMIN_USERNAME,
        "password": settings.DEFAULT_ADMIN_PASSWORD
    })
    token = login_res.json()["data"]["access_token"]
    headers = {"Authorization": f"Bearer {token}"}

    create_res = client.post("/api/admin/faqs", headers=headers, json={
        "question": "Can alumni participate?",
        "answer": "Only currently enrolled undergraduate and postgraduate students are eligible.",
        "display_order": 10,
        "is_visible": True
    })
    assert create_res.status_code == 201
    new_faq_id = create_res.json()["data"]["id"]

    update_res = client.put(f"/api/admin/faqs/{new_faq_id}", headers=headers, json={
        "question": "Can college alumni participate?"
    })
    assert update_res.status_code == 200
    assert update_res.json()["data"]["question"] == "Can college alumni participate?"

    del_res = client.delete(f"/api/admin/faqs/{new_faq_id}", headers=headers)
    assert del_res.status_code == 200

# -----------------------------------------------------------------------------
# 8. CONTACT TESTS
# -----------------------------------------------------------------------------
def test_contact_endpoints():
    response = client.get("/api/contact")
    assert response.status_code == 200
    data = response.json()
    assert data["success"] is True
    assert "gdscpsna@psnacet.edu.in" in data["data"]["email"]
