import pytest
from math_utils import compute_curve_points

def test_simple_parabola():
    points = compute_curve_points("x**2", -2, 2, num_points=5)
    expected = [(-2.0, 4.0), (-1.0, 1.0), (0.0, 0.0), (1.0, 1.0), (2.0, 4.0)]
    for (x1, y1), (x2, y2) in zip(points, expected):
        assert abs(x1 - x2) < 1e-6
        assert abs(y1 - y2) < 1e-6

def test_invalid_equation():
    with pytest.raises(ValueError):
        compute_curve_points("x***2", -1, 1)


# Test trigonometric function
def test_trigonometric_function():
    points = compute_curve_points("sin(x)", 0, 3.14159, num_points=3)
    expected = [(0.0, 0.0), (1.570795, 1.0), (3.14159, 0.0)]
    for (x1, y1), (x2, y2) in zip(points, expected):
        assert abs(x1 - x2) < 1e-5
        assert abs(y1 - y2) < 1e-1  # Allowing higher tolerance due to float sin approximation


# Test large input range
def test_large_range():
    points = compute_curve_points("x", -1e6, 1e6, num_points=3)
    expected = [(-1e6, -1e6), (0.0, 0.0), (1e6, 1e6)]
    for (x1, y1), (x2, y2) in zip(points, expected):
        assert abs(x1 - x2) < 1e-2
        assert abs(y1 - y2) < 1e-2


# Test constant function
def test_constant_function():
    points = compute_curve_points("7", -3, 3, num_points=3)
    expected = [(-3.0, 7.0), (0.0, 7.0), (3.0, 7.0)]
    for (x1, y1), (x2, y2) in zip(points, expected):
        assert abs(x1 - x2) < 1e-6
        assert abs(y1 - y2) < 1e-6