import os
import sys
from pathlib import Path

# Add project root directory to sys.path
PROJECT_ROOT = Path(__file__).resolve().parent.parent
if str(PROJECT_ROOT) not in sys.path:
    sys.path.insert(0, str(PROJECT_ROOT))

import uvicorn

if __name__ == "__main__":
    port = int(os.getenv("PORT", 8000))
    print(f"Starting ARENACORE '26 Backend API Server on port {port}...")
    print(f"Interactive Swagger Documentation available at: http://localhost:{port}/docs")
    print(f"Interactive ReDoc Documentation available at: http://localhost:{port}/redoc")
    uvicorn.run("backend.app.main:app", host="0.0.0.0", port=port, reload=False)
