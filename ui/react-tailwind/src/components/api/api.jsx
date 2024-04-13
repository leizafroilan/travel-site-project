import axios from "axios";


const api = axios.create({
  baseURL: 'http://54.91.220.225:8000/api/v1/main', 
});

export default api;
