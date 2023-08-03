import $cookie from "vue-cookie";
import axios from 'axios'


const API = axios.create({
    baseURL: '/api',
    timeout: 15000
})

API.interceptors.request.use(config => {
    if (config.url !== '/userApi/login' && config.url !== '/userApi/register')
        config.headers['token'] = $cookie.get("token");
    return config
},error=>{
    return Promise.reject(error)
})
export default API