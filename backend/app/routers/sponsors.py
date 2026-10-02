from typing import List
from fastapi import APIRouter, Depends, HTTPException, status
from sqlalchemy.orm import Session

from backend.app.database import get_db
from backend.app.models import Sponsor, AdminUser
from backend.app.schemas import (
    APIResponse,
    SponsorCreate,
    SponsorUpdate,
    SponsorResponse,
)
from backend.app.services.auth_service import get_current_admin

router = APIRouter(tags=["Sponsors"])

@router.get("/api/sponsors", response_model=APIResponse[List[SponsorResponse]])
def get_public_sponsors(db: Session = Depends(get_db)):
    """Public endpoint to fetch visible sponsors."""
    sponsors = (
        db.query(Sponsor)
        .filter(Sponsor.is_visible == True)
        .order_by(Sponsor.display_order.asc(), Sponsor.id.asc())
        .all()
    )
    return APIResponse(
        success=True,
        data=[SponsorResponse.model_validate(s) for s in sponsors],
        message="Sponsors retrieved",
    )

@router.post("/api/admin/sponsors", response_model=APIResponse[SponsorResponse], status_code=status.HTTP_201_CREATED)
def create_sponsor(
    data: SponsorCreate,
    current_admin: AdminUser = Depends(get_current_admin),
    db: Session = Depends(get_db)
):
    """Admin endpoint to add a new sponsor."""
    sponsor = Sponsor(
        name=data.name,
        logo_url=data.logo_url,
        website_url=data.website_url,
        sponsor_level=data.sponsor_level or "Associate",
        display_order=data.display_order,
        is_visible=data.is_visible,
    )
    db.add(sponsor)
    db.commit()
    db.refresh(sponsor)

    return APIResponse(
        success=True,
        data=SponsorResponse.model_validate(sponsor),
        message="Sponsor created successfully",
    )

@router.put("/api/admin/sponsors/{sponsor_id}", response_model=APIResponse[SponsorResponse])
def update_sponsor(
    sponsor_id: int,
    data: SponsorUpdate,
    current_admin: AdminUser = Depends(get_current_admin),
    db: Session = Depends(get_db)
):
    """Admin endpoint to update a sponsor."""
    sponsor = db.query(Sponsor).filter(Sponsor.id == sponsor_id).first()
    if not sponsor:
        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND,
            detail=f"Sponsor #{sponsor_id} not found",
        )

    for field, value in data.model_dump(exclude_unset=True).items():
        setattr(sponsor, field, value)

    db.commit()
    db.refresh(sponsor)

    return APIResponse(
        success=True,
        data=SponsorResponse.model_validate(sponsor),
        message="Sponsor updated successfully",
    )

@router.delete("/api/admin/sponsors/{sponsor_id}", response_model=APIResponse[dict])
def delete_sponsor(
    sponsor_id: int,
    current_admin: AdminUser = Depends(get_current_admin),
    db: Session = Depends(get_db)
):
    """Admin endpoint to delete a sponsor."""
    sponsor = db.query(Sponsor).filter(Sponsor.id == sponsor_id).first()
    if not sponsor:
        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND,
            detail=f"Sponsor #{sponsor_id} not found",
        )

    db.delete(sponsor)
    db.commit()

    return APIResponse(
        success=True,
        data={"deleted_id": sponsor_id},
        message="Sponsor deleted successfully",
    )
