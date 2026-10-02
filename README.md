# ARENACORE '26 — National-Level 24-Hour College Hackathon Platform
### Hosted by Google Developer Groups (GDG) On Campus PSNACET & ACM PSNACET

---

## 1. Project Overview

**ARENACORE '26** is the official web and backend platform for the 24-Hour National-Level Deep Tech Hackathon held at PSNA College of Engineering and Technology, Dindigul, Tamil Nadu.

The platform provides:
- **Participant Portal:** Event countdown, themes & SDGs, interactive 3D holographic badge generator, schedule timeline, and dynamic registration routing.
- **Dynamic Registration Dispatcher:** Decoupled registration flow that routes the "REGISTER NOW" button dynamically through the backend. When organizers configure the official Google Form link, the button immediately routes participants to that form without editing frontend code.
- **Admin Management Portal (`admin.html`):** Allows organizers to toggle registration status (`OPEN`, `CLOSED`, `COMING_SOON`), set deadlines, manage announcements, and inspect system telemetry.
- **Official Team FAQ System:** Pre-seeded with official guidelines and integrated into the public and admin API contract (`GET /api/faqs`, `POST /api/admin/faqs`, `PUT /api/admin/faqs/{id}`, `DELETE /api/admin/faqs/{id}`).
- **Future-Ready Google Sheets Integration:** Isolated service module ready to sync form responses once Google Cloud Service Account credentials are provided.

---

## 2. Backend Architecture

The backend is built with high-performance Python asynchronous architecture:

```
[ Frontend: index.html / app.js / api.js ]
                  │
                  ▼
         [ FastAPI REST API ]
  (CORS Middleware, JWT Auth, Pydantic)
                  │
     ┌────────────┼────────────┐
     ▼            ▼            ▼
[ Routers ]  [ Services ]  [ Database ]
- Auth       - Auth & JWT  - SQLAlchemy ORM
- Reg        - Future G-   - SQLite (Local Dev)
- Events       Sheets      - PostgreSQL (Render)
- FAQs         Service
- Schedule
- Sponsors
- Contact
- Dashboard
```

Directory Structure:
```
backend/
├── app/
│   ├── config.py              # Environment configuration & settings
│   ├── database.py            # SQLAlchemy database engine & session dependency
│   ├── main.py                # FastAPI app, CORS, error handlers, and routers
│   ├── models/                # SQLAlchemy ORM models (Admin, Reg, Event, FAQ, etc.)
│   ├── schemas/               # Pydantic v2 validation models & responses
│   ├── routers/               # API route handlers
│   │   ├── auth.py            # POST /api/auth/login, logout, me
│   │   ├── registration.py    # GET /api/registration, PUT /api/admin/registration
│   │   ├── event.py           # GET /api/event, PUT /api/admin/event
│   │   ├── announcements.py   # Public & Admin announcements CRUD
│   │   ├── schedule.py        # Public & Admin schedule CRUD
│   │   ├── sponsors.py        # Public & Admin sponsors CRUD
│   │   ├── contact.py         # Public & Admin contact details
│   │   ├── faqs.py            # Official team FAQ endpoints
│   │   └── dashboard.py       # Admin dashboard live metrics
│   ├── services/
│   │   ├── auth_service.py    # bcrypt password hashing & PyJWT tokens
│   │   └── google_sheets_service.py  # Isolated future Google Sheets stub
│   ├── seeds/
│   │   └── seed_data.py       # Auto-initialization & initial hackathon data
│   └── tests/
│       └── test_api.py        # Comprehensive automated pytest suite
├── .env.example               # Template environment configuration
├── .env                       # Local secrets (git ignored)
├── .gitignore                 # Security ignore rules
├── requirements.txt           # Production dependencies for Render
├── Procfile                   # Web start command for Render
└── run.py                     # Convenience local launcher script
```

---

## 3. Installation & Setup

### Prerequisites
- Python 3.10+ (tested on Python 3.13)
- Node.js (for serving static frontend locally)

### 1. Clone or Open Workspace
```bash
cd "d:/GDG Website ZIP/GDG Website"
```

### 2. Create and Activate Virtual Environment
**On Windows (PowerShell):**
```powershell
python -m venv venv
.\venv\Scripts\Activate.ps1
```

**On Linux / macOS:**
```bash
python3 -m venv venv
source venv/bin/activate
```

### 3. Install Dependencies
```bash
pip install -r backend/requirements.txt
```

---

## 4. Environment Variables

Copy `.env.example` to `.env` in the `backend/` folder:

```bash
cp backend/.env.example backend/.env
```

Key configuration options:
| Variable | Description | Default |
|---|---|---|
| `DATABASE_URL` | SQLite for local dev or PostgreSQL for production | `sqlite:///./hackathon.db` |
| `JWT_SECRET_KEY` | Cryptographic secret for signing admin tokens | `arenacore26-super-secure-secret-key...` |
| `JWT_ALGORITHM` | Hashing algorithm for JWT | `HS256` |
| `ACCESS_TOKEN_EXPIRE_MINUTES` | Session validity duration | `120` |
| `DEFAULT_ADMIN_USERNAME` | Initial administrator username | `admin` |
| `DEFAULT_ADMIN_EMAIL` | Initial administrator email | `admin@arenacore.psnacet.edu.in` |
| `DEFAULT_ADMIN_PASSWORD` | Initial administrator password | `Admin@ArenaCore2026` |
| `FRONTEND_URL` | Allowed origin for CORS | `http://localhost:3000` |
| `GOOGLE_SHEETS_ENABLED` | Set to true when integrating sheets API | `false` |

---

## 5. Running the Application Locally

### Starting the Backend (FastAPI)
Run using the runner script:
```bash
python backend/run.py
```
Or directly with Uvicorn:
```bash
uvicorn backend.app.main:app --host 0.0.0.0 --port 8000 --reload
```
- API Base: `http://localhost:8000`
- Interactive Swagger Docs: `http://localhost:8000/docs`
- ReDoc Documentation: `http://localhost:8000/redoc`

### Starting the Frontend
In a separate terminal:
```bash
npm run dev
```
- Participant Website: `http://localhost:3000`
- Admin Management Portal: `http://localhost:3000/admin.html`

---

## 6. Registration Architecture & Google Form Integration

### Flow of Execution
```
Participant on Website
         │
         ▼
Clicks "REGISTER NOW" / "Register Your Team"
         │
         ▼
Frontend invokes: GET /api/registration
         │
         ▼
Decision Logic:
 ├── [status: "OPEN" & valid URL exists] ──> Opens Google Form in new tab
 ├── [status: "CLOSED"]                  ──> Displays "REGISTRATION CLOSED" notice
 ├── [status: "COMING_SOON"]             ──> Displays "REGISTRATION COMING SOON" notice
 └── [status: "OPEN" & URL is null/empty] ─> Displays "Registration link is currently unavailable. Please try again later."
```

### Adding the Google Form URL when Senior Provides It
1. Open the Admin Portal: `http://localhost:3000/admin.html` (or via Render production URL).
2. Log in with admin credentials (`admin` / `Admin@ArenaCore2026`).
3. Under **Participant Registration Configuration**:
   - Status: Select `OPEN`.
   - Google Form URL: Paste the link (e.g., `https://forms.gle/XYZ...`).
   - Click **[ SAVE CONFIGURATION ]**.
4. The change takes effect immediately. The frontend will dynamically open the form without any code edits or rebuilds!

---

## 7. Official Team FAQ System Integration

Per the hackathon committee's specification, the existing team FAQ system is fully preserved and active:
- **Table:** `faqs` (`id`, `question`, `answer`, `display_order`, `is_visible`, `created_at`, `updated_at`)
- **Public API:** `GET /api/faqs`
- **Admin APIs:**
  - `POST /api/admin/faqs`
  - `PUT /api/admin/faqs/{id}`
  - `DELETE /api/admin/faqs/{id}`
- Pre-seeded with the 5 official ARENACORE '26 questions (food & accommodation, fee deadline, hardware rules, cross-college eligibility, and certifications).

---

## 8. Automated Testing

Run the test suite using pytest:
```bash
python -m pytest backend/app/tests/test_api.py -v
```
All 13 test suites validate:
- Admin login with valid/invalid passwords
- Protected routes requiring Bearer JWT
- Dynamic registration status (`OPEN`, `CLOSED`, `COMING_SOON`) and URL updates
- Event details retrieval and updates
- Announcements CRUD
- Schedule CRUD
- Sponsors CRUD
- Team FAQ contract compliance
- Contact information retrieval

---

## 9. Render Deployment Guide

### Deployment Steps
1. Push repository to GitHub.
2. In [Render Dashboard](https://dashboard.render.com):
   - Click **New** → **Web Service**.
   - Select your repository.
   - **Environment:** `Python 3`
   - **Build Command:** `pip install -r backend/requirements.txt`
   - **Start Command:** `uvicorn backend.app.main:app --host 0.0.0.0 --port $PORT`
3. Add Environment Variables in Render:
   - `DATABASE_URL`: Add your Render PostgreSQL Internal Database URL (or leave blank to use persistent disk SQLite).
   - `JWT_SECRET_KEY`: Set a secure random string.
   - `DEFAULT_ADMIN_PASSWORD`: Set a strong production admin password.
   - `FRONTEND_URL`: Set your production frontend domain (e.g. `https://arenacore26.psnacet.edu.in`).
4. Click **Deploy**. Render will build and deploy the backend automatically!

---

## 10. Future Google Sheets Integration

The backend isolates Google Sheets synchronization in `backend/app/services/google_sheets_service.py`.

When organizers are ready to connect live participant responses:
1. Enable Google Sheets API in Google Cloud Console.
2. Generate a Service Account JSON key.
3. Share the Google Sheet with the Service Account email.
4. Set the following environment variables:
   ```env
   GOOGLE_SHEETS_ENABLED=true
   GOOGLE_SPREADSHEET_ID=your_sheet_id_here
   GOOGLE_SERVICE_ACCOUNT_JSON=path_or_content_of_service_account.json
   ```
The rest of the backend will continue operating without downtime or restructuring.
