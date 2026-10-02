from typing import List
from fastapi import APIRouter, Depends, HTTPException, status
from sqlalchemy.orm import Session

from backend.app.database import get_db
from backend.app.models import Announcement, AdminUser
from backend.app.schemas import (
    APIResponse,
    AnnouncementCreate,
    AnnouncementUpdate,
    AnnouncementResponse,
)
from backend.app.services.auth_service import get_current_admin

router = APIRouter(tags=["Announcements"])

@router.get("/api/announcements", response_model=APIResponse[List[AnnouncementResponse]])
def get_public_announcements(db: Session = Depends(get_db)):
    """Public endpoint to fetch published announcements."""
    announcements = (
        db.query(Announcement)
        .filter(Announcement.is_published == True)
        .order_by(Announcement.id.desc())
        .all()
    )
    return APIResponse(
        success=True,
        data=[AnnouncementResponse.model_validate(a) for a in announcements],
        message="Announcements retrieved",
    )

@router.get("/api/admin/announcements", response_model=APIResponse[List[AnnouncementResponse]])
def get_admin_announcements(
    current_admin: AdminUser = Depends(get_current_admin),
    db: Session = Depends(get_db)
):
    """Admin endpoint to fetch all announcements (including unpublished)."""
    announcements = db.query(Announcement).order_by(Announcement.id.desc()).all()
    return APIResponse(
        success=True,
        data=[AnnouncementResponse.model_validate(a) for a in announcements],
        message="All announcements retrieved",
    )

@router.post("/api/admin/announcements", response_model=APIResponse[AnnouncementResponse], status_code=status.HTTP_201_CREATED)
def create_announcement(
    data: AnnouncementCreate,
    current_admin: AdminUser = Depends(get_current_admin),
    db: Session = Depends(get_db)
):
    """Admin endpoint to create a new announcement."""
    announcement = Announcement(
        title=data.title,
        content=data.content,
        category=data.category or "General",
        is_published=data.is_published,
        publish_date=data.publish_date,
    )
    db.add(announcement)
    db.commit()
    db.refresh(announcement)

    return APIResponse(
        success=True,
        data=AnnouncementResponse.model_validate(announcement),
        message="Announcement created successfully",
    )

@router.put("/api/admin/announcements/{announcement_id}", response_model=APIResponse[AnnouncementResponse])
def update_announcement(
    announcement_id: int,
    data: AnnouncementUpdate,
    current_admin: AdminUser = Depends(get_current_admin),
    db: Session = Depends(get_db)
):
    """Admin endpoint to update an existing announcement."""
    announcement = db.query(Announcement).filter(Announcement.id == announcement_id).first()
    if not announcement:
        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND,
            detail=f"Announcement #{announcement_id} not found",
        )

    for field, value in data.model_dump(exclude_unset=True).items():
        setattr(announcement, field, value)

    db.commit()
    db.refresh(announcement)

    return APIResponse(
        success=True,
        data=AnnouncementResponse.model_validate(announcement),
        message="Announcement updated successfully",
    )

@router.delete("/api/admin/announcements/{announcement_id}", response_model=APIResponse[dict])
def delete_announcement(
    announcement_id: int,
    current_admin: AdminUser = Depends(get_current_admin),
    db: Session = Depends(get_db)
):
    """Admin endpoint to delete an announcement."""
    announcement = db.query(Announcement).filter(Announcement.id == announcement_id).first()
    if not announcement:
        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND,
            detail=f"Announcement #{announcement_id} not found",
        )

    db.delete(announcement)
    db.commit()

    return APIResponse(
        success=True,
        data={"deleted_id": announcement_id},
        message="Announcement deleted successfully",
    )
