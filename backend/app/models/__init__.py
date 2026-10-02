from datetime import datetime
from sqlalchemy import Column, Integer, String, Text, Boolean, DateTime
from backend.app.database import Base

class AdminUser(Base):
    __tablename__ = "admin_users"

    id = Column(Integer, primary_key=True, index=True)
    username = Column(String(50), unique=True, index=True, nullable=False)
    email = Column(String(120), unique=True, index=True, nullable=False)
    hashed_password = Column(String(255), nullable=False)
    is_active = Column(Boolean, default=True)
    created_at = Column(DateTime, default=datetime.utcnow)

class RegistrationConfig(Base):
    __tablename__ = "registration_config"

    id = Column(Integer, primary_key=True, index=True)
    status = Column(String(20), default="OPEN", nullable=False)  # "OPEN", "CLOSED", "COMING_SOON"
    registration_url = Column(String(500), nullable=True)        # The Google Form URL (null until provided by senior)
    opening_date = Column(String(100), nullable=True)
    closing_date = Column(String(100), nullable=True)
    created_at = Column(DateTime, default=datetime.utcnow)
    updated_at = Column(DateTime, default=datetime.utcnow, onupdate=datetime.utcnow)

class EventConfig(Base):
    __tablename__ = "event_config"

    id = Column(Integer, primary_key=True, index=True)
    event_name = Column(String(150), nullable=False, default="ARENACORE '26")
    short_name = Column(String(50), nullable=False, default="ARENACORE")
    tagline = Column(String(255), nullable=True, default="BUILD • INNOVATE • IMPACT")
    description = Column(Text, nullable=True)
    venue = Column(String(200), nullable=True, default="PSNA College of Engineering and Technology")
    location = Column(String(200), nullable=True, default="Dindigul, Tamil Nadu, India")
    start_date = Column(String(50), nullable=True, default="2026-10-27")
    end_date = Column(String(50), nullable=True, default="2026-10-28")
    contact_email = Column(String(120), nullable=True, default="gdscpsna@psnacet.edu.in")
    contact_phone = Column(String(50), nullable=True, default="+91 86820 67304")
    website_status = Column(String(50), nullable=True, default="ACTIVE")
    created_at = Column(DateTime, default=datetime.utcnow)
    updated_at = Column(DateTime, default=datetime.utcnow, onupdate=datetime.utcnow)

class Announcement(Base):
    __tablename__ = "announcements"

    id = Column(Integer, primary_key=True, index=True)
    title = Column(String(200), nullable=False)
    content = Column(Text, nullable=False)
    category = Column(String(50), default="General")
    is_published = Column(Boolean, default=True)
    publish_date = Column(String(100), nullable=True)
    created_at = Column(DateTime, default=datetime.utcnow)
    updated_at = Column(DateTime, default=datetime.utcnow, onupdate=datetime.utcnow)

class ScheduleItem(Base):
    __tablename__ = "schedules"

    id = Column(Integer, primary_key=True, index=True)
    title = Column(String(150), nullable=False)
    description = Column(Text, nullable=True)
    date = Column(String(50), nullable=True)
    start_time = Column(String(50), nullable=True)
    end_time = Column(String(50), nullable=True)
    location = Column(String(150), nullable=True)
    display_order = Column(Integer, default=0)
    is_visible = Column(Boolean, default=True)
    created_at = Column(DateTime, default=datetime.utcnow)
    updated_at = Column(DateTime, default=datetime.utcnow, onupdate=datetime.utcnow)

class Sponsor(Base):
    __tablename__ = "sponsors"

    id = Column(Integer, primary_key=True, index=True)
    name = Column(String(150), nullable=False)
    logo_url = Column(String(500), nullable=True)
    website_url = Column(String(500), nullable=True)
    sponsor_level = Column(String(50), default="Associate")
    display_order = Column(Integer, default=0)
    is_visible = Column(Boolean, default=True)
    created_at = Column(DateTime, default=datetime.utcnow)
    updated_at = Column(DateTime, default=datetime.utcnow, onupdate=datetime.utcnow)

class ContactInfo(Base):
    __tablename__ = "contact_info"

    id = Column(Integer, primary_key=True, index=True)
    email = Column(String(120), nullable=False)
    phone = Column(String(100), nullable=True)
    address = Column(Text, nullable=True)
    instagram_url = Column(String(500), nullable=True)
    linkedin_url = Column(String(500), nullable=True)
    website_url = Column(String(500), nullable=True)
    other_social_links = Column(Text, nullable=True)
    created_at = Column(DateTime, default=datetime.utcnow)
    updated_at = Column(DateTime, default=datetime.utcnow, onupdate=datetime.utcnow)

# TEAM'S EXISTING FAQ SPECIFICATION
# Matches table "faqs" and columns exactly:
# id, question, answer, display_order, is_visible, created_at, updated_at
class FAQ(Base):
    __tablename__ = "faqs"

    id = Column(Integer, primary_key=True, index=True)
    question = Column(String(500), nullable=False)
    answer = Column(Text, nullable=False)
    display_order = Column(Integer, default=0)
    is_visible = Column(Boolean, default=True)
    created_at = Column(DateTime, default=datetime.utcnow)
    updated_at = Column(DateTime, default=datetime.utcnow, onupdate=datetime.utcnow)
