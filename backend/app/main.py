from contextlib import asynccontextmanager
from fastapi import FastAPI, Request, status
from fastapi.middleware.cors import CORSMiddleware
from fastapi.responses import JSONResponse
from fastapi.exceptions import RequestValidationError
from starlette.exceptions import HTTPException as StarletteHTTPException

from backend.app.config import settings
from backend.app.seeds.seed_data import seed_database
from backend.app.routers import (
    auth,
    registration,
    event,
    announcements,
    schedule,
    sponsors,
    contact,
    faqs,
    dashboard,
)

@asynccontextmanager
async def lifespan(app: FastAPI):
    # Startup: Initialize tables and seed initial configuration
    seed_database()
    yield
    # Shutdown logic if needed

app = FastAPI(
    title=settings.PROJECT_NAME,
    version=settings.VERSION,
    description="Backend API platform for ARENACORE '26 - National-Level 24-Hour Hackathon at PSNACET",
    docs_url="/docs",
    redoc_url="/redoc",
    lifespan=lifespan,
    openapi_tags=[
        {"name": "Authentication", "description": "Admin login, logout, and token verification"},
        {"name": "Registration", "description": "Dynamic participant registration status and Google Form URL routing"},
        {"name": "Event", "description": "Hackathon event configuration and metadata"},
        {"name": "Announcements", "description": "Important hackathon alerts and updates"},
        {"name": "Schedule", "description": "Timeline schedule and agenda items"},
        {"name": "Sponsors", "description": "Partner organizations and sponsor directory"},
        {"name": "Contact", "description": "Organizers, department, and campus contact details"},
        {"name": "FAQs", "description": "Official team FAQ management system"},
        {"name": "Admin", "description": "Administrative dashboard statistics and system management"},
    ],
)

# -----------------------------------------------------------------------------
# CORS CONFIGURATION
# -----------------------------------------------------------------------------
allowed_origins = [
    "http://localhost:3000",
    "http://localhost:5173",
    "http://127.0.0.1:3000",
    "http://127.0.0.1:5173",
]
if settings.FRONTEND_URL and settings.FRONTEND_URL not in allowed_origins:
    allowed_origins.append(settings.FRONTEND_URL)

app.add_middleware(
    CORSMiddleware,
    allow_origins=allowed_origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# -----------------------------------------------------------------------------
# ERROR HANDLING (Clean JSON responses without exposing Python stack traces)
# -----------------------------------------------------------------------------
@app.exception_handler(StarletteHTTPException)
async def custom_http_exception_handler(request: Request, exc: StarletteHTTPException):
    return JSONResponse(
        status_code=exc.status_code,
        content={
            "success": False,
            "message": exc.detail if isinstance(exc.detail, str) else str(exc.detail),
        },
    )

@app.exception_handler(RequestValidationError)
async def validation_exception_handler(request: Request, exc: RequestValidationError):
    errors = exc.errors()
    msg = errors[0].get("msg", "Validation error") if errors else "Invalid request data"
    return JSONResponse(
        status_code=status.HTTP_422_UNPROCESSABLE_ENTITY,
        content={
            "success": False,
            "message": f"Input validation failed: {msg}",
            "errors": exc.errors(),
        },
    )

@app.exception_handler(Exception)
async def global_exception_handler(request: Request, exc: Exception):
    # Log the internal error safely on the server side
    return JSONResponse(
        status_code=status.HTTP_500_INTERNAL_SERVER_ERROR,
        content={
            "success": False,
            "message": "An unexpected internal server error occurred. Please try again later.",
        },
    )

# -----------------------------------------------------------------------------
# ROUTERS
# -----------------------------------------------------------------------------
app.include_router(auth.router)
app.include_router(registration.router)
app.include_router(event.router)
app.include_router(announcements.router)
app.include_router(schedule.router)
app.include_router(sponsors.router)
app.include_router(contact.router)
app.include_router(faqs.router)
app.include_router(dashboard.router)

@app.get("/", tags=["Health"])
def root_health_check():
    return {
        "success": True,
        "service": settings.PROJECT_NAME,
        "version": settings.VERSION,
        "status": "HEALTHY",
        "docs": "/docs",
    }
