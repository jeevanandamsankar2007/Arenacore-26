from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session

from backend.app.database import get_db
from backend.app.models import (
    AdminUser,
    RegistrationConfig,
    Announcement,
    ScheduleItem,
    Sponsor,
    FAQ,
)
from backend.app.schemas import APIResponse, AdminDashboardStats
from backend.app.services.auth_service import get_current_admin

router = APIRouter(tags=["Admin"])

@router.get("/api/admin/dashboard", response_model=APIResponse[AdminDashboardStats])
def get_admin_dashboard_statistics(
    current_admin: AdminUser = Depends(get_current_admin),
    db: Session = Depends(get_db)
):
    """
    Returns authentic system statistics for the Admin Dashboard.
    Notice: No fake registration numbers are generated.
    """
    reg_config = db.query(RegistrationConfig).first()
    reg_status = reg_config.status if reg_config else "OPEN"
    reg_url = reg_config.registration_url if reg_config else None
    reg_configured = bool(reg_url and reg_url.strip())

    announcements_count = db.query(Announcement).count()
    schedule_count = db.query(ScheduleItem).count()
    sponsors_count = db.query(Sponsor).count()
    faqs_count = db.query(FAQ).count()

    stats = AdminDashboardStats(
        registration_status=reg_status,
        registration_configured=reg_configured,
        registration_url=reg_url,
        announcements_count=announcements_count,
        schedule_items_count=schedule_count,
        sponsors_count=sponsors_count,
        faqs_count=faqs_count,
    )

    return APIResponse(
        success=True,
        data=stats,
        message="Admin dashboard statistics retrieved successfully",
    )
