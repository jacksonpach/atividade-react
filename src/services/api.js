import { create } from 'apisauce'

const api = create({
   baseURL: 'http://localhost:8080/api'
});

export default api;