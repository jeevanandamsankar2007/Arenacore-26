from datetime import datetime
from sqlalchemy.orm import Session
from backend.app.database import engine, SessionLocal, Base
from backend.app.config import settings
from backend.app.models import (
    AdminUser,
    RegistrationConfig,
    EventConfig,
    Announcement,
    ScheduleItem,
    Sponsor,
    ContactInfo,
    FAQ,
)
from backend.app.services.auth_service import hash_password

def seed_database():
    """Initializes tables and seeds initial data if not already present."""
    Base.metadata.create_all(bind=engine)
    db: Session = SessionLocal()

    try:
        # 1. Admin User
        admin = db.query(AdminUser).first()
        if not admin:
            default_admin = AdminUser(
                username=settings.DEFAULT_ADMIN_USERNAME,
                email=settings.DEFAULT_ADMIN_EMAIL,
                hashed_password=hash_password(settings.DEFAULT_ADMIN_PASSWORD),
                is_active=True,
            )
            db.add(default_admin)

        # 2. Registration Configuration
        reg_config = db.query(RegistrationConfig).first()
        if not reg_config:
            initial_reg = RegistrationConfig(
                status="OPEN",
                registration_url="https://forms.gle/ir6Dbnn6GTzWCX6v7",
                opening_date="2026-10-01",
                closing_date="2026-10-12",
            )
            db.add(initial_reg)

        # 3. Event Configuration
        event = db.query(EventConfig).first()
        if not event:
            initial_event = EventConfig(
                event_name="ARENACORE '26",
                short_name="ARENACORE",
                tagline="BUILD • INNOVATE • IMPACT",
                description="24-Hour National-Level Deep Tech Hackathon hosted by Google Developer Groups On Campus PSNACET & ACM PSNACET.",
                venue="Department of Information Technology, PSNACET Campus",
                location="Kothandaraman Nagar, Dindigul - 624622, Tamil Nadu, India",
                start_date="2026-10-27",
                end_date="2026-10-28",
                contact_email="gdscpsna@psnacet.edu.in",
                contact_phone="+91 86820 67304",
                website_status="ACTIVE",
            )
            db.add(initial_event)

        # 4. Announcements
        announcement_count = db.query(Announcement).count()
        if announcement_count == 0:
            initial_announcements = [
                Announcement(
                    title="ARENACORE '26 Registrations Announced!",
                    content="Round 1 registrations for the 24-Hour Hackathon are officially open. Submit your squad of 4 before 12 OCT 2026.",
                    category="Important",
                    is_published=True,
                    publish_date="2026-10-01",
                ),
                Announcement(
                    title="₹1,20,000 Total Prize Pool & Direct Incubation",
                    content="Overall cash rewards, prestigious winner trophies, and exclusive tech kits | Startup incubation and cloud credits for finalists.",
                    category="Prizes",
                    is_published=True,
                    publish_date="2026-10-02",
                ),
            ]
            db.add_all(initial_announcements)

        # 5. Schedule Items
        schedule_count = db.query(ScheduleItem).count()
        if schedule_count == 0:
            initial_schedule = [
                ScheduleItem(
                    title="Check-in, Kit Distribution & Breakfast",
                    description="Reporting at IT Auditorium, team badge collection, Wi-Fi setup, and welcome breakfast.",
                    date="2026-10-27",
                    start_time="08:00 AM",
                    end_time="09:30 AM",
                    location="IT Auditorium, Ground Floor",
                    display_order=1,
                    is_visible=True,
                ),
                ScheduleItem(
                    title="Grand Inauguration & Keynote Address",
                    description="Opening remarks by Principal, HOD Dr. A. Vincent Antony Kumar, and keynote on GenAI innovation.",
                    date="2026-10-27",
                    start_time="09:30 AM",
                    end_time="10:30 AM",
                    location="IT Auditorium",
                    display_order=2,
                    is_visible=True,
                ),
                ScheduleItem(
                    title="🚀 24-Hour Hacking Timer Commences!",
                    description="Problem statement lock-in, repository setup, and first sprint initiation across lab clusters.",
                    date="2026-10-27",
                    start_time="11:00 AM",
                    end_time="11:00 AM (Next Day)",
                    location="IT Department Computer Labs (Clusters A, B, C)",
                    display_order=3,
                    is_visible=True,
                ),
                ScheduleItem(
                    title="Mentorship Round 1: Architecture & Feasibility",
                    description="Mentors visit teams for 1-on-1 code reviews, tech stack validation, and design adjustments.",
                    date="2026-10-27",
                    start_time="03:00 PM",
                    end_time="05:30 PM",
                    location="All Hacking Labs",
                    display_order=4,
                    is_visible=True,
                ),
                ScheduleItem(
                    title="Dinner & Midnight Jam Session",
                    description="Energizing dinner, fun trivia kahoot, red bull refreshments, and developer networking.",
                    date="2026-10-27",
                    start_time="08:30 PM",
                    end_time="10:00 PM",
                    location="College Cafeteria & Courtyard",
                    display_order=5,
                    is_visible=True,
                ),
                ScheduleItem(
                    title="Mentorship Round 2: Midnight Checkpoint & Debugging",
                    description="Progress evaluation and debugging assistance by senior developers.",
                    date="2026-10-28",
                    start_time="01:30 AM",
                    end_time="03:30 AM",
                    location="All Hacking Labs",
                    display_order=6,
                    is_visible=True,
                ),
                ScheduleItem(
                    title="🛑 Code Freeze & Final Project Submission",
                    description="GitHub repositories locked, demonstration video and slide decks uploaded to portal.",
                    date="2026-10-28",
                    start_time="11:00 AM",
                    end_time="11:30 AM",
                    location="Submission Portal",
                    display_order=7,
                    is_visible=True,
                ),
                ScheduleItem(
                    title="Grand Jury Evaluation & Stage Presentations",
                    description="Top teams present 5-minute live demo + 3-minute Q&A to industrial evaluation panel.",
                    date="2026-10-28",
                    start_time="11:30 AM",
                    end_time="02:30 PM",
                    location="Main IT Seminar Hall",
                    display_order=8,
                    is_visible=True,
                ),
                ScheduleItem(
                    title="Valedictory Ceremony & Prize Distribution",
                    description="Announcement of ARENACORE '26 Champions, distribution of cash prizes, trophies, certificates and closing photo session.",
                    date="2026-10-28",
                    start_time="03:30 PM",
                    end_time="05:00 PM",
                    location="College Main Auditorium",
                    display_order=9,
                    is_visible=True,
                ),
            ]
            db.add_all(initial_schedule)

        # 6. Contact Information
        contact = db.query(ContactInfo).first()
        if not contact:
            initial_contact = ContactInfo(
                email="gdscpsna@psnacet.edu.in",
                phone="+91 86820 67304 / +91 93455 30457 / +91 82486 03031",
                address="PSNA College of Engineering and Technology, Kothandaraman Nagar, Dindigul - 624622, Tamil Nadu, India",
                instagram_url="https://instagram.com/gdg_psna",
                linkedin_url="https://linkedin.com/company/gdsc-psna",
                website_url="https://www.psnacet.edu.in",
                other_social_links="College Landline: 0451-2554411 / 2554032",
            )
            db.add(initial_contact)

        # 7. FAQs (Matching Team's Contract - 5 core questions from frontend)
        faq_count = db.query(FAQ).count()
        if faq_count == 0:
            initial_faqs = [
                FAQ(
                    question="Will food and accommodation be provided during the 24-hour hackathon?",
                    answer="Yes! Full meals (Breakfast, Lunch, Dinner), midnight snacks, continuous coffee/tea, high-speed Wi-Fi, and resting zones are provided inside the PSNACET campus for all registered participants.",
                    display_order=1,
                    is_visible=True,
                ),
                FAQ(
                    question="When should our team pay the ₹500 per member registration fee?",
                    answer="Do NOT pay any fee during initial Round 1 submission! After our evaluation panel reviews all applications, shortlisted Top 30 teams will receive an official confirmation mail with the payment gateway link and verification steps.",
                    display_order=2,
                    is_visible=True,
                ),
                FAQ(
                    question="What hardware and equipment should we bring?",
                    answer="Each team member should bring their own laptops, chargers, extension cords, and any specific hardware components/microcontrollers (ESP32, Arduino, Raspberry Pi, Sensors) if competing in IoT/hardware tracks. College labs will also have desktop computers available.",
                    display_order=3,
                    is_visible=True,
                ),
                FAQ(
                    question="Can students from different departments or colleges team up?",
                    answer="Absolutely! Cross-disciplinary and cross-college teams (e.g., IT + ECE + Mechanical + BioTech) are encouraged to formulate well-rounded solutions.",
                    display_order=4,
                    is_visible=True,
                ),
                FAQ(
                    question="Will all participants receive certificates?",
                    answer="Yes! Every participant who submits a qualifying project and presents to the jury will receive an official GDG On Campus Certificate of Participation, in addition to winner awards and prize cash for top rankers.",
                    display_order=5,
                    is_visible=True,
                ),
            ]
            db.add_all(initial_faqs)

        db.commit()
    except Exception as e:
        db.rollback()
        raise e
    finally:
        db.close()
