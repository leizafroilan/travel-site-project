import uvicorn
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from main.api.routes.main_routes import router as main_router


description = """
    ...
"""
origins = [
    "http://localhost:5173/",
    "http://127.0.0.1:5173/",
    "http://localhost:5173",
    "http://172.18.0.3:80",
    "http://ai-api:80",
    "http://172.18.0.3",
    "http://ai-api",
    "http://54.91.220.225",
    "http://54/91.220.225:80"

    ]

app = FastAPI(
    title="...",
    description=description,
    version="1.0",
    license_info={
        "name": "MIT License",
    },
)

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["GET", "POST", "PUT", "PATCH" "DELETE"],
    allow_headers=["*"],
)

app.include_router(main_router)
