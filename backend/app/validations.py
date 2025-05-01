from sympy import sympify
from fastapi import HTTPException
from starlette.status import HTTP_422_UNPROCESSABLE_ENTITY
from .constants import ERROR_INVALID_EQUATION, ERROR_INVALID_RANGE, ERROR_INVALID_NUM_POINTS

def validate_equation(equation: str):
    try:
        sympify(equation)
    except Exception as e:
        raise HTTPException(
            status_code=HTTP_422_UNPROCESSABLE_ENTITY,
            detail=ERROR_INVALID_EQUATION.format(e)
        )

def validate_range(x_min: float, x_max: float):
    if x_min >= x_max:
        raise HTTPException(
            status_code=HTTP_422_UNPROCESSABLE_ENTITY,
            detail=ERROR_INVALID_RANGE
        )

def validate_num_points(num_points: int):
    if num_points < 2:
        raise HTTPException(
            status_code=HTTP_422_UNPROCESSABLE_ENTITY,
            detail=ERROR_INVALID_NUM_POINTS
        )