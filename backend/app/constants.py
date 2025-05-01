from sympy import symbols

DEFAULT_NUM_POINTS = 1000
ROUND_PRECISION = 5

x = symbols("x")

ERROR_INVALID_EQUATION = "Invalid equation: {}"
ERROR_EVALUATION_FAILED = "Error evaluating function: {}"
ERROR_INVALID_RANGE = "x_min must be less than x_max"
ERROR_INVALID_NUM_POINTS = "num_points must be at least 2"
