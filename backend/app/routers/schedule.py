from typing import List
from fastapi import APIRouter, Depends, HTTPException, status
from sqlalchemy.orm import Session

from backend.app.database import get_db
from backend.app.models import ScheduleItem, AdminUser
from backend.app.schemas import (
    APIResponse,
    ScheduleCreate,
    ScheduleUpdate,
    ScheduleResponse,
)
from backend.app.services.auth_service import get_current_admin

router = APIRouter(tags=["Schedule"])

@router.get("/api/schedule", response_model=APIResponse[List[ScheduleResponse]])
def get_public_schedule(db: Session = Depends(get_db)):
    """Public endpoint to fetch visible schedule/timeline items ordered by display_order."""
    items = (
        db.query(ScheduleItem)
        .filter(ScheduleItem.is_visible == True)
        .order_by(ScheduleItem.display_order.asc(), ScheduleItem.id.asc())
        .all()
    )
    return APIResponse(
        success=True,
        data=[ScheduleResponse.model_validate(item) for item in items],
        message="Schedule retrieved",
    )

@router.post("/api/admin/schedule", response_model=APIResponse[ScheduleResponse], status_code=status.HTTP_201_CREATED)
def create_schedule_item(
    data: ScheduleCreate,
    current_admin: AdminUser = Depends(get_current_admin),
    db: Session = Depends(get_db)
):
    """Admin endpoint to create a timeline schedule item."""
    item = ScheduleItem(
        title=data.title,
        description=data.description,
        date=data.date,
        start_time=data.start_time,
        end_time=data.end_time,
        location=data.location,
        display_order=data.display_order,
        is_visible=data.is_visible,
    )
    db.add(item)
    db.commit()
    db.refresh(item)

    return APIResponse(
        success=True,
        data=ScheduleResponse.model_validate(item),
        message="Schedule item created successfully",
    )

@router.put("/api/admin/schedule/{schedule_id}", response_model=APIResponse[ScheduleResponse])
def update_schedule_item(
    schedule_id: int,
    data: ScheduleUpdate,
    current_admin: AdminUser = Depends(get_current_admin),
    db: Session = Depends(get_db)
):
    """Admin endpoint to update a schedule item."""
    item = db.query(ScheduleItem).filter(ScheduleItem.id == schedule_id).first()
    if not item:
        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND,
            detail=f"Schedule item #{schedule_id} not found",
        )

    for field, value in data.model_dump(exclude_unset=True).items():
        setattr(item, field, value)

    db.commit()
    db.refresh(item)

    return APIResponse(
        success=True,
        data=ScheduleResponse.model_validate(item),
        message="Schedule item updated successfully",
    )

@router.delete("/api/admin/schedule/{schedule_id}", response_model=APIResponse[dict])
def delete_schedule_item(
    schedule_id: int,
    current_admin: AdminUser = Depends(get_current_admin),
    db: Session = Depends(get_db)
):
    """Admin endpoint to delete a schedule item."""
    item = db.query(ScheduleItem).filter(ScheduleItem.id == schedule_id).first()
    if not item:
        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND,
            detail=f"Schedule item #{schedule_id} not found",
        )

    db.delete(item)
    db.commit()

    return APIResponse(
        success=True,
        data={"deleted_id": schedule_id},
        message="Schedule item deleted successfully",
    )
