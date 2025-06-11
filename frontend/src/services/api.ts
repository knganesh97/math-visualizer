import axios from 'axios';
import { CurvePlotResponse } from '../types';

const apiClient = axios.create({
  baseURL: `${import.meta.env.VITE_BACKEND_URL}/api`,
  headers: {
    'Content-Type': 'application/json',
  },
});

export const plotCurve = async(equation: string): Promise<CurvePlotResponse> => {
    const response = await apiClient.post('/plot-curve', { 
      equation,
      x_min: -10,
      x_max: 10,
      num_points: 1000
    });
    return response.data;
}

export default apiClient;