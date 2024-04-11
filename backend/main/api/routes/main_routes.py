from fastapi import APIRouter, Depends, HTTPException, Security
from fastapi.encoders import jsonable_encoder
from fastapi.responses import ORJSONResponse
# from main.api.models.main_models import Summary
from main.ai.get_itinerary import get_itinerary
from main.ai.get_scene import get_scene
import json



router = APIRouter(
    prefix="/api/v1/main",
    tags=[""],
)

@router.get("/generate_itinerary",
            response_class=ORJSONResponse
            ) 
async def generate_itinerary(city: str, days: int, mode: str, view: str):
    try:
        result = await get_itinerary(city, days, mode, view)
        response_data = {
            "Status": 200,
            "Message": result
        }
    except Exception as e:
        response_data = {
            "Status": 500,
            "Message": str(e)
        }
        
    return ORJSONResponse(content=response_data)

@router.get("/scenes",
            response_class=ORJSONResponse)


async def scenes(city: str):
    try:
        result = await get_scene(city)
        response_data = {
            "Status": 200,
            "Message": result
        }
    except Exception as e:
        response_data = {
            "Status": 500,
            "Message": str(e)
        }
        
    return ORJSONResponse(content=response_data)