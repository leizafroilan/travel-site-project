from pydantic import BaseModel, Field


# Generate Itinerary models
class Details(BaseModel):
    day: str = Field(description="day")
    location: str = Field(description="tourist destination")
    review: str = Field(description="review of the tourist destination")
    distance: str = Field(description="calculated distance from prev to new location")

class Summary(BaseModel):
    summary: str = Field(description= "summary of the city")
    details: list[Details]