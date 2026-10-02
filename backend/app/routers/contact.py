from fastapi import APIRouter, Depends, HTTPException, status
from sqlalchemy.orm import Session

from backend.app.database import get_db
from backend.app.models import ContactInfo, AdminUser
from backend.app.schemas import APIResponse, ContactResponse, ContactUpdate
from backend.app.services.auth_service import get_current_admin

router = APIRouter(tags=["Contact"])

def _get_or_create_contact(db: Session) -> ContactInfo:
    contact = db.query(ContactInfo).first()
    if not contact:
        contact = ContactInfo(
            email="gdscpsna@psnacet.edu.in",
            phone="+91 86820 67304 / +91 93455 30457 / +91 82486 03031",
            address="PSNA College of Engineering and Technology, Kothandaraman Nagar, Dindigul - 624622, Tamil Nadu, India",
            instagram_url="https://instagram.com/gdg_psna",
            linkedin_url="https://linkedin.com/company/gdsc-psna",
            website_url="https://www.psnacet.edu.in",
            other_social_links="College Landline: 0451-2554411 / 2554032",
        )
        db.add(contact)
        db.commit()
        db.refresh(contact)
    return contact

@router.get("/api/contact", response_model=APIResponse[ContactResponse])
def get_public_contact_info(db: Session = Depends(get_db)):
    """Public endpoint to fetch event contact information."""
    contact = _get_or_create_contact(db)
    return APIResponse(
        success=True,
        data=ContactResponse.model_validate(contact),
        message="Contact information retrieved",
    )

@router.get("/api/admin/contact", response_model=APIResponse[ContactResponse])
def get_admin_contact_info(
    current_admin: AdminUser = Depends(get_current_admin),
    db: Session = Depends(get_db)
):
    """Admin endpoint to inspect contact configuration."""
    contact = _get_or_create_contact(db)
    return APIResponse(
        success=True,
        data=ContactResponse.model_validate(contact),
        message="Admin contact information retrieved",
    )

@router.put("/api/admin/contact", response_model=APIResponse[ContactResponse])
def update_admin_contact_info(
    update_data: ContactUpdate,
    current_admin: AdminUser = Depends(get_current_admin),
    db: Session = Depends(get_db)
):
    """Admin endpoint to update contact information."""
    contact = _get_or_create_contact(db)

    for field, value in update_data.model_dump(exclude_unset=True).items():
        setattr(contact, field, value)

    db.commit()
    db.refresh(contact)

    return APIResponse(
        success=True,
        data=ContactResponse.model_validate(contact),
        message="Contact information updated successfully",
    )
