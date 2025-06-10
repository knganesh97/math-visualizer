import axios from 'axios';

const apiClient = axios.create({
  baseURL: process.env.BACKEND_URL + '/api',
  headers: {
    'Content-Type': 'application/json',
  },
});

export const plotCurve = async(expression: string) => {
    const response = await apiClient.post('/plot-curve', { expression });
    return response.data;
}

export default apiClient;