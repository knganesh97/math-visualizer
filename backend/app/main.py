from fastapi import FastAPI, HTTPException
from starlette.status import HTTP_400_BAD_REQUEST
from .math_utils import compute_curve_points
from .models import CurvePlotRequest, CurvePlotResponse, Point
from .validations import validate_equation, validate_range, validate_num_points

app = FastAPI()


@app.post("/api/plot-curve", response_model=CurvePlotResponse)
def plot_curve(req: CurvePlotRequest):
    validate_equation(req.equation)
    validate_range(req.x_min, req.x_max)
    validate_num_points(req.num_points)

    try:
        raw_points = compute_curve_points(req.equation, req.x_min, req.x_max, req.num_points)
        return CurvePlotResponse(points=[Point(x=pt[0], y=pt[1]) for pt in raw_points])
    except ValueError as e:
        raise HTTPException(status_code=HTTP_400_BAD_REQUEST, detail=str(e))