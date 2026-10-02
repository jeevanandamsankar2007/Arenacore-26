from datetime import datetime
from typing import Optional, List, Any, Generic, TypeVar
from pydantic import BaseModel, Field, ConfigDict

T = TypeVar("T")

class APIResponse(BaseModel, Generic[T]):
    success: bool = True
    data: Optional[T] = None
    message: Optional[str] = None

class ErrorResponse(BaseModel):
    success: bool = False
    message: str

# -----------------------------------------------------------------------------
# AUTH SCHEMAS
# -----------------------------------------------------------------------------
class LoginRequest(BaseModel):
    username: str
    password: str

class Token(BaseModel):
    access_token: str
    token_type: str = "bearer"
    expires_in_minutes: int

class AdminUserResponse(BaseModel):
    model_config = ConfigDict(from_attributes=True)

    id: int
    username: str
    email: str
    is_active: bool
    created_at: datetime

# -----------------------------------------------------------------------------
# REGISTRATION SCHEMAS
# -----------------------------------------------------------------------------
class RegistrationPublicResponse(BaseModel):
    model_config = ConfigDict(from_attributes=True)

    status: str  # "OPEN", "CLOSED", "COMING_SOON"
    registration_url: Optional[str] = None
    opening_date: Optional[str] = None
    closing_date: Optional[str] = None

class RegistrationAdminResponse(BaseModel):
    model_config = ConfigDict(from_attributes=True)

    id: int
    status: str
    registration_url: Optional[str] = None
    opening_date: Optional[str] = None
    closing_date: Optional[str] = None
    created_at: Optional[datetime] = None
    updated_at: Optional[datetime] = None

class RegistrationAdminUpdate(BaseModel):
    status: Optional[str] = Field(None, description="OPEN, CLOSED, or COMING_SOON")
    registration_url: Optional[str] = Field(None, description="Google Form URL")
    opening_date: Optional[str] = None
    closing_date: Optional[str] = None

# -----------------------------------------------------------------------------
# EVENT SCHEMAS
# -----------------------------------------------------------------------------
class EventResponse(BaseModel):
    model_config = ConfigDict(from_attributes=True)

    id: int
    event_name: str
    short_name: str
    tagline: Optional[str] = None
    description: Optional[str] = None
    venue: Optional[str] = None
    location: Optional[str] = None
    start_date: Optional[str] = None
    end_date: Optional[str] = None
    contact_email: Optional[str] = None
    contact_phone: Optional[str] = None
    website_status: Optional[str] = None

class EventUpdate(BaseModel):
    event_name: Optional[str] = None
    short_name: Optional[str] = None
    tagline: Optional[str] = None
    description: Optional[str] = None
    venue: Optional[str] = None
    location: Optional[str] = None
    start_date: Optional[str] = None
    end_date: Optional[str] = None
    contact_email: Optional[str] = None
    contact_phone: Optional[str] = None
    website_status: Optional[str] = None

# -----------------------------------------------------------------------------
# ANNOUNCEMENTS SCHEMAS
# -----------------------------------------------------------------------------
class AnnouncementBase(BaseModel):
    title: str
    content: str
    category: Optional[str] = "General"
    is_published: bool = True
    publish_date: Optional[str] = None

class AnnouncementCreate(AnnouncementBase):
    pass

class AnnouncementUpdate(BaseModel):
    title: Optional[str] = None
    content: Optional[str] = None
    category: Optional[str] = None
    is_published: Optional[bool] = None
    publish_date: Optional[str] = None

class AnnouncementResponse(AnnouncementBase):
    model_config = ConfigDict(from_attributes=True)

    id: int
    created_at: Optional[datetime] = None
    updated_at: Optional[datetime] = None

# -----------------------------------------------------------------------------
# SCHEDULE SCHEMAS
# -----------------------------------------------------------------------------
class ScheduleBase(BaseModel):
    title: str
    description: Optional[str] = None
    date: Optional[str] = None
    start_time: Optional[str] = None
    end_time: Optional[str] = None
    location: Optional[str] = None
    display_order: int = 0
    is_visible: bool = True

class ScheduleCreate(ScheduleBase):
    pass

class ScheduleUpdate(BaseModel):
    title: Optional[str] = None
    description: Optional[str] = None
    date: Optional[str] = None
    start_time: Optional[str] = None
    end_time: Optional[str] = None
    location: Optional[str] = None
    display_order: Optional[int] = None
    is_visible: Optional[bool] = None

class ScheduleResponse(ScheduleBase):
    model_config = ConfigDict(from_attributes=True)

    id: int
    created_at: Optional[datetime] = None
    updated_at: Optional[datetime] = None

# -----------------------------------------------------------------------------
# SPONSOR SCHEMAS
# -----------------------------------------------------------------------------
class SponsorBase(BaseModel):
    name: str
    logo_url: Optional[str] = None
    website_url: Optional[str] = None
    sponsor_level: Optional[str] = "Associate"
    display_order: int = 0
    is_visible: bool = True

class SponsorCreate(SponsorBase):
    pass

class SponsorUpdate(BaseModel):
    name: Optional[str] = None
    logo_url: Optional[str] = None
    website_url: Optional[str] = None
    sponsor_level: Optional[str] = None
    display_order: Optional[int] = None
    is_visible: Optional[bool] = None

class SponsorResponse(SponsorBase):
    model_config = ConfigDict(from_attributes=True)

    id: int
    created_at: Optional[datetime] = None
    updated_at: Optional[datetime] = None

# -----------------------------------------------------------------------------
# CONTACT SCHEMAS
# -----------------------------------------------------------------------------
class ContactResponse(BaseModel):
    model_config = ConfigDict(from_attributes=True)

    id: int
    email: str
    phone: Optional[str] = None
    address: Optional[str] = None
    instagram_url: Optional[str] = None
    linkedin_url: Optional[str] = None
    website_url: Optional[str] = None
    other_social_links: Optional[str] = None

class ContactUpdate(BaseModel):
    email: Optional[str] = None
    phone: Optional[str] = None
    address: Optional[str] = None
    instagram_url: Optional[str] = None
    linkedin_url: Optional[str] = None
    website_url: Optional[str] = None
    other_social_links: Optional[str] = None

# -----------------------------------------------------------------------------
# FAQ SCHEMAS (Matches Team's Contract)
# -----------------------------------------------------------------------------
class FAQBase(BaseModel):
    question: str
    answer: str
    display_order: int = 0
    is_visible: bool = True

class FAQCreate(FAQBase):
    pass

class FAQUpdate(BaseModel):
    question: Optional[str] = None
    answer: Optional[str] = None
    display_order: Optional[int] = None
    is_visible: Optional[bool] = None

class FAQResponse(FAQBase):
    model_config = ConfigDict(from_attributes=True)

    id: int
    created_at: Optional[datetime] = None
    updated_at: Optional[datetime] = None

# -----------------------------------------------------------------------------
# ADMIN DASHBOARD STATS
# -----------------------------------------------------------------------------
class AdminDashboardStats(BaseModel):
    registration_status: str
    registration_configured: bool
    registration_url: Optional[str] = None
    announcements_count: int
    schedule_items_count: int
    sponsors_count: int
    faqs_count: int
