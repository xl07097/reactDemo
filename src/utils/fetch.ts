import axios from "axios";
// import {message} from 'antd';
import urls from './urls';


let instance = axios.create({
    baseURL: urls.BASE_URI,
    // baseURL: 'http://localhost:3002/api/',
    timeout: 10000,
    headers: {
        'Content-Type': 'application/json'
    }
})

instance.interceptors.request.use((config: any) => { // 请求拦截器
    let token = sessionStorage.getItem('token');
    if (token){
        config.headers['token'] = token;
    }

    return config
}, (err:any) => {
    Promise.reject(err)
})

instance.interceptors.response.use((res:any) => {
    let data: any = res.data;

    // switch (data.code) {
    //     case 200:
    //         break;
    //     case 201:
    //         message.error(data.msg);
    //         break;
    //     case 300:
    //         message.error(data.msg);
    //         localStorage.clear();
    //         break;
    //     case 500:
    //         message.error(data.msg);
    //         break;
    // }

    return data

}, (err:any) => {
    Promise.reject(err)
})

export default instance
