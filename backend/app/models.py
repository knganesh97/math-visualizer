from pydantic import BaseModel
from typing import List

class CurvePlotRequest(BaseModel):
    equation: str
    x_min: float
    x_max: float
    num_points: int = 1000

class Point(BaseModel):
    x: float
    y: float

class CurvePlotResponse(BaseModel):
    points: List[Point]
