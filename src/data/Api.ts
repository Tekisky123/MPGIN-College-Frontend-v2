// export const baseUrl = "http://localhost:5000"


import axios from 'axios';

const api = axios.create({
  baseURL: "https://mpgin-backend-v2.vercel.app",
  headers: {
    Authorization: `Bearer ${localStorage.getItem('authToken')}`,
  },
});

export default api;