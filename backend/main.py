from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from typing import List

app = FastAPI()

# Enable CORS for your frontend
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3002"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Define the data model for a zone
class Zone(BaseModel):
    name: str
    coordinates: List[List[float]]

# Endpoint to receive and save a zone
@app.post("/api/zones")
def save_zone(zone: Zone):
    return {"message": "Zone saved", "data": zone}
