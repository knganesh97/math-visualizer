import numpy as np
from sympy import sympify, lambdify
from constants import x, DEFAULT_NUM_POINTS, ERROR_EVALUATION_FAILED

def compute_curve_points(equation_str: str, x_min: float, x_max: float, num_points: int = DEFAULT_NUM_POINTS) -> list[tuple[float, float]]:
    """
    Compute (x, y) points for a given mathematical equation over a specified range.

    Assumes the input equation string is already validated and sympifiable.
    """
    expr = sympify(equation_str)

    # Convert sympy expression into a function usable with numpy arrays
    f = lambdify(x, expr, modules=['numpy'])

    # Generate x values and compute y values
    x_vals = np.linspace(x_min, x_max, num_points)
    try:
        y_vals = f(x_vals)
    except Exception as e:
        raise ValueError(ERROR_EVALUATION_FAILED.format(e))

    if np.isscalar(y_vals):
        y_vals = np.full_like(x_vals, fill_value=y_vals, dtype=float)

    # Zip x and y into (x, y) tuples
    points = list(zip(x_vals.tolist(), y_vals.tolist()))
    return points