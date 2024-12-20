// filepath: /path/to/your/frontend/src/api.js
import axios from 'axios';

const api = axios.create({
    baseURL: 'http://localhost:5080/api', // Replace with your backend URL
});

export default api;