import axios from "axios";
import {message} from 'antd';
import path from './path';

export interface ResData {
    code: number,
    data?: object | Array<any> | string,
    msg?: string,
    total?: number
}

let instance = axios.create({
    baseURL: path.BASE_URI,
    // baseURL: '/api',
    timeout: 10000,
    headers: {
        'Content-Type': 'application/json',
        'token': sessionStorage.getItem('token')
    }
})

instance.interceptors.request.use(config => { // 请求拦截器
    console.log(config)
    // window.console.log(process.env.BASE_URL)
    // let params = {};
    // if(config.method.toLowerCase() === 'get' && config.data){
    //     let json = config.data;
    //     for(let i in json){
    //         params[i] = json[i]
    //     }    
    //     config.params = params
    // }
    return config
}, err => {
    Promise.reject(err)
})

instance.interceptors.response.use(res=> {
    let data:any = res.data;

    switch (data.code) {
        case 200:
            break;
        case 201:
            message.error(data.msg);
            break;
        case 300:
            message.error(data.msg);
            localStorage.clear();
            break;
        case 500:
            message.error(data.msg);
            break;
    }

    return data

}, err => {
    Promise.reject(err)
})

export default instance