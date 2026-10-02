from fastapi import APIRouter, Depends, HTTPException, status
from sqlalchemy.orm import Session

from backend.app.database import get_db
from backend.app.models import EventConfig, AdminUser
from backend.app.schemas import APIResponse, EventResponse, EventUpdate
from backend.app.services.auth_service import get_current_admin

router = APIRouter(tags=["Event"])

def _get_or_create_event_config(db: Session) -> EventConfig:
    event = db.query(EventConfig).first()
    if not event:
        event = EventConfig(
            event_name="ARENACORE '26",
            short_name="ARENACORE",
            tagline="BUILD • INNOVATE • IMPACT",
            description="24-Hour National-Level Deep Tech Hackathon hosted by Google Developer Groups On Campus PSNACET & ACM PSNACET.",
            venue="PSNA College of Engineering and Technology",
            location="Dindigul, Tamil Nadu, India",
            start_date="2026-10-28",
            end_date="2026-10-29",
            contact_email="gdscpsna@psnacet.edu.in",
            contact_phone="+91 86820 67304",
            website_status="ACTIVE",
        )
        db.add(event)
        db.commit()
        db.refresh(event)
    return event

@router.get("/api/event", response_model=APIResponse[EventResponse])
def get_public_event_details(db: Session = Depends(get_db)):
    """Public endpoint to fetch current hackathon event details."""
    event = _get_or_create_event_config(db)
    return APIResponse(
        success=True,
        data=EventResponse.model_validate(event),
        message="Event details retrieved",
    )

@router.get("/api/admin/event", response_model=APIResponse[EventResponse])
def get_admin_event_details(
    current_admin: AdminUser = Depends(get_current_admin),
    db: Session = Depends(get_db)
):
    """Admin endpoint to fetch event configuration."""
    event = _get_or_create_event_config(db)
    return APIResponse(
        success=True,
        data=EventResponse.model_validate(event),
        message="Admin event configuration retrieved",
    )

@router.put("/api/admin/event", response_model=APIResponse[EventResponse])
def update_admin_event_details(
    update_data: EventUpdate,
    current_admin: AdminUser = Depends(get_current_admin),
    db: Session = Depends(get_db)
):
    """Admin endpoint to update event metadata."""
    event = _get_or_create_event_config(db)

    for field, value in update_data.model_dump(exclude_unset=True).items():
        setattr(event, field, value)

    db.commit()
    db.refresh(event)

    return APIResponse(
        success=True,
        data=EventResponse.model_validate(event),
        message="Event details updated successfully",
    )
