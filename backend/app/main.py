from pathlib import Path

from fastapi import FastAPI

app = FastAPI(
    title="ttm-backend",
    description="The missing tech lead/PM tool for Gitlab",
    version="0.0.1",
)


# Any API routes should be mounted before the static files fallback
@app.get("/api/health")
def read_root():
    return {"message": "Hello from backend API!"}


# Path to the frontend build directory
FRONTEND_BUILD_DIR = (
    Path(__file__).parent.parent.parent / "frontend" / "build" / "client"
)

# Serve the static frontend SPA
app.frontend("/", directory=str(FRONTEND_BUILD_DIR), check_dir=False)
