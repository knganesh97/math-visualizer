from fastapi import FastAPI, HTTPException
from .math_utils import compute_curve_points
from .models import CurvePlotRequest, CurvePlotResponse, Point

app = FastAPI()


@app.post("/plot-curve", response_model=CurvePlotResponse)
def plot_curve(req: CurvePlotRequest):
    try:
        raw_points = compute_curve_points(req.equation, req.x_min, req.x_max, req.num_points)
        return CurvePlotResponse(points=[Point(x=pt[0], y=pt[1]) for pt in raw_points])
    except ValueError as e:
        raise HTTPException(status_code=400, detail=str(e))