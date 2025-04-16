// export const baseUrl = "http://localhost:5000"


import axios from 'axios';

const api = axios.create({
  baseURL: "http://localhost:5000",
  headers: {
    Authorization: `Bearer ${localStorage.getItem('authToken')}`,
  },
});

export default api;