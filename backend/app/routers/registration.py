from fastapi import APIRouter, Depends, HTTPException, status
from sqlalchemy.orm import Session

from backend.app.database import get_db
from backend.app.models import RegistrationConfig, AdminUser
from backend.app.schemas import (
    APIResponse,
    RegistrationPublicResponse,
    RegistrationAdminResponse,
    RegistrationAdminUpdate,
)
from backend.app.services.auth_service import get_current_admin

router = APIRouter(tags=["Registration"])

VALID_STATUSES = {"OPEN", "CLOSED", "COMING_SOON"}

def _get_or_create_registration_config(db: Session) -> RegistrationConfig:
    config = db.query(RegistrationConfig).first()
    if not config:
        config = RegistrationConfig(
            status="OPEN",
            registration_url=None,
            opening_date="2026-10-01",
            closing_date="2026-10-21",
        )
        db.add(config)
        db.commit()
        db.refresh(config)
    return config

# -----------------------------------------------------------------------------
# PUBLIC REGISTRATION API
# -----------------------------------------------------------------------------
@router.get("/api/registration", response_model=APIResponse[RegistrationPublicResponse])
def get_public_registration_status(db: Session = Depends(get_db)):
    """
    Public endpoint consumed by the hackathon website frontend.
    Returns current registration status and the dynamic Google Form URL.
    """
    config = _get_or_create_registration_config(db)
    
    return APIResponse(
        success=True,
        data=RegistrationPublicResponse(
            status=config.status,
            registration_url=config.registration_url,
            opening_date=config.opening_date,
            closing_date=config.closing_date,
        ),
        message=f"Registration is currently {config.status}",
    )

# -----------------------------------------------------------------------------
# ADMIN REGISTRATION APIs (Protected)
# -----------------------------------------------------------------------------
@router.get("/api/admin/registration", response_model=APIResponse[RegistrationAdminResponse])
def get_admin_registration_config(
    current_admin: AdminUser = Depends(get_current_admin),
    db: Session = Depends(get_db)
):
    """Admin endpoint to view full registration configuration."""
    config = _get_or_create_registration_config(db)
    return APIResponse(
        success=True,
        data=RegistrationAdminResponse.model_validate(config),
        message="Registration configuration retrieved",
    )

@router.put("/api/admin/registration", response_model=APIResponse[RegistrationAdminResponse])
def update_admin_registration_config(
    update_data: RegistrationAdminUpdate,
    current_admin: AdminUser = Depends(get_current_admin),
    db: Session = Depends(get_db)
):
    """
    Admin endpoint to update registration status, Google Form URL, and dates.
    Changing the Google Form URL here allows immediate frontend updates without rebuilding code.
    """
    config = _get_or_create_registration_config(db)

    if update_data.status is not None:
        upper_status = update_data.status.upper().strip()
        if upper_status not in VALID_STATUSES:
            raise HTTPException(
                status_code=status.HTTP_400_BAD_REQUEST,
                detail=f"Invalid status '{update_data.status}'. Allowed values: {', '.join(sorted(VALID_STATUSES))}",
            )
        config.status = upper_status

    if update_data.registration_url is not None:
        url_val = update_data.registration_url.strip()
        # Allow setting null/empty or valid url
        config.registration_url = url_val if url_val else None

    if update_data.opening_date is not None:
        config.opening_date = update_data.opening_date.strip()

    if update_data.closing_date is not None:
        config.closing_date = update_data.closing_date.strip()

    db.commit()
    db.refresh(config)

    return APIResponse(
        success=True,
        data=RegistrationAdminResponse.model_validate(config),
        message="Registration configuration updated successfully",
    )
