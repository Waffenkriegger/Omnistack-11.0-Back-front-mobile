import axios from 'axios';

const api = axios.create({
    baseURL: 'Http://192.168.1.134:3333'
});

export default api;