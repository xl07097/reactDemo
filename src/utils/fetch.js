import axios from "axios";

let instance = axios.create({
    baseURL: process.env.Base_URL,
    withCredentials: true,
    timeout: 10000
})

instance.interceptors.request.use(config => { // 请求拦截器
    let params = {};

    for (let key of config.data){
        params[key] = config.data[key]
    }

    return config
},err => {
    Promise.reject(err)
})

instance.interceptors.responce.use(res => {
    let data = res.data;

    switch(res.code){
        case 200:
            break;
        case 300:
            showMessage('会话超时')
            localStorage.clear();
            //router.push('/login');
        break;
        case 500:
            alert(res.msg);
            break;
    }

},err => {
    Promise.reject(err)
})

export default instance
