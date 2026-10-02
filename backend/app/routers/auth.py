from datetime import timedelta
from fastapi import APIRouter, Depends, HTTPException, status
from sqlalchemy.orm import Session

from backend.app.config import settings
from backend.app.database import get_db
from backend.app.models import AdminUser
from backend.app.schemas import (
    APIResponse,
    LoginRequest,
    Token,
    AdminUserResponse,
)
from backend.app.services.auth_service import (
    verify_password,
    create_access_token,
    get_current_admin,
)

router = APIRouter(prefix="/api/auth", tags=["Authentication"])

@router.post("/login", response_model=APIResponse[Token])
def login(login_data: LoginRequest, db: Session = Depends(get_db)):
    """Authenticates admin user and returns a JWT access token."""
    admin = db.query(AdminUser).filter(
        (AdminUser.username == login_data.username) | (AdminUser.email == login_data.username)
    ).first()

    if not admin or not verify_password(login_data.password, admin.hashed_password):
        raise HTTPException(
            status_code=status.HTTP_401_UNAUTHORIZED,
            detail="Invalid username or password",
            headers={"WWW-Authenticate": "Bearer"},
        )

    if not admin.is_active:
        raise HTTPException(
            status_code=status.HTTP_403_FORBIDDEN,
            detail="Admin account is inactive. Please contact system administrator.",
        )

    access_token = create_access_token(
        data={"sub": admin.username, "email": admin.email}
    )

    return APIResponse(
        success=True,
        data=Token(
            access_token=access_token,
            token_type="bearer",
            expires_in_minutes=settings.ACCESS_TOKEN_EXPIRE_MINUTES,
        ),
        message="Login successful",
    )

@router.post("/logout", response_model=APIResponse[dict])
def logout(current_admin: AdminUser = Depends(get_current_admin)):
    """Logs out the current admin user (client should clear the Bearer token)."""
    return APIResponse(
        success=True,
        data={"logged_out": True},
        message="Logged out successfully",
    )

@router.get("/me", response_model=APIResponse[AdminUserResponse])
def get_current_user_profile(current_admin: AdminUser = Depends(get_current_admin)):
    """Returns the authenticated admin's profile."""
    return APIResponse(
        success=True,
        data=AdminUserResponse.model_validate(current_admin),
        message="Profile retrieved",
    )
