from typing import List
from fastapi import APIRouter, Depends, HTTPException, status
from sqlalchemy.orm import Session

from backend.app.database import get_db
from backend.app.models import FAQ, AdminUser
from backend.app.schemas import (
    APIResponse,
    FAQCreate,
    FAQUpdate,
    FAQResponse,
)
from backend.app.services.auth_service import get_current_admin

router = APIRouter(tags=["FAQs"])

# -----------------------------------------------------------------------------
# PUBLIC FAQ ENDPOINT (Contract: GET /api/faqs)
# -----------------------------------------------------------------------------
@router.get("/api/faqs", response_model=APIResponse[List[FAQResponse]])
def get_public_faqs(db: Session = Depends(get_db)):
    """
    Public endpoint to fetch all visible FAQs ordered by display_order.
    Fulfills the team's FAQ contract: GET /api/faqs
    """
    faqs = (
        db.query(FAQ)
        .filter(FAQ.is_visible == True)
        .order_by(FAQ.display_order.asc(), FAQ.id.asc())
        .all()
    )
    return APIResponse(
        success=True,
        data=[FAQResponse.model_validate(f) for f in faqs],
        message="FAQs retrieved successfully",
    )

# -----------------------------------------------------------------------------
# ADMIN FAQ ENDPOINTS (Contract: POST, PUT, DELETE under /api/admin/faqs)
# -----------------------------------------------------------------------------
@router.post("/api/admin/faqs", response_model=APIResponse[FAQResponse], status_code=status.HTTP_201_CREATED)
def create_faq(
    data: FAQCreate,
    current_admin: AdminUser = Depends(get_current_admin),
    db: Session = Depends(get_db)
):
    """
    Admin endpoint to create a new FAQ item.
    Fulfills contract: POST /api/admin/faqs
    """
    faq = FAQ(
        question=data.question,
        answer=data.answer,
        display_order=data.display_order,
        is_visible=data.is_visible,
    )
    db.add(faq)
    db.commit()
    db.refresh(faq)

    return APIResponse(
        success=True,
        data=FAQResponse.model_validate(faq),
        message="FAQ created successfully",
    )

@router.put("/api/admin/faqs/{faq_id}", response_model=APIResponse[FAQResponse])
def update_faq(
    faq_id: int,
    data: FAQUpdate,
    current_admin: AdminUser = Depends(get_current_admin),
    db: Session = Depends(get_db)
):
    """
    Admin endpoint to update an existing FAQ item.
    Fulfills contract: PUT /api/admin/faqs/{id}
    """
    faq = db.query(FAQ).filter(FAQ.id == faq_id).first()
    if not faq:
        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND,
            detail=f"FAQ #{faq_id} not found",
        )

    for field, value in data.model_dump(exclude_unset=True).items():
        setattr(faq, field, value)

    db.commit()
    db.refresh(faq)

    return APIResponse(
        success=True,
        data=FAQResponse.model_validate(faq),
        message="FAQ updated successfully",
    )

@router.delete("/api/admin/faqs/{faq_id}", response_model=APIResponse[dict])
def delete_faq(
    faq_id: int,
    current_admin: AdminUser = Depends(get_current_admin),
    db: Session = Depends(get_db)
):
    """
    Admin endpoint to delete an FAQ item.
    Fulfills contract: DELETE /api/admin/faqs/{id}
    """
    faq = db.query(FAQ).filter(FAQ.id == faq_id).first()
    if not faq:
        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND,
            detail=f"FAQ #{faq_id} not found",
        )

    db.delete(faq)
    db.commit()

    return APIResponse(
        success=True,
        data={"deleted_id": faq_id},
        message="FAQ deleted successfully",
    )
