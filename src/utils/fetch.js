import axios from "axios";

let instance = axios.create({
    baseURL: 'http://192.168.1.49:3000/api',
    withCredentials: true,
    timeout: 10000,
    headers: {
        'Content-Type': 'application/json;charset=utf-8'
    }
})

instance.interceptors.request.use(config => { // 请求拦截器
    let params = {};

    // if(config.method.toLowerCase() === 'get' && config.data){
    //     for(let i in config.data){
    //         params[i] = config.data[i]
    //     }
    //     config.params = params;
    // }
    return config
}, err => {
    Promise.reject(err)
})

instance.interceptors.response.use(res => {
    let data = res.data;

    switch (data.code) {
        case 200:
            break;
        case 201:
            alert(data.msg);
            break;
        case 300:
            localStorage.clear();
            //router.push('/login');
            break;
        case 500:
            alert(data.msg);
            break;
    }

    return data

}, err => {
    Promise.reject(err)
})

export default instance