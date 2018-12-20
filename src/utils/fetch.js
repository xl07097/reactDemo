import axios from "axios";

let instance = axios.create({
    baseURL: 'http://192.168.1.49:9100/api',
    withCredentials: true,
    timeout: 10000,
    headers: {
        'Content-Type': 'application/json;charset=utf-8'
    }
})

instance.interceptors.request.use(config => { // 请求拦截器
    window.console.log(process.env.BASE_URL)
    let params = {};
    if(config.method.toLowerCase() === 'get' && config.data){
        let json = config.data;
        for(let i in json){
            params[i] = json[i]
        }    
        // config.params = params
    }
    return config
}, err => {
    Promise.reject(err)
})

instance.interceptors.response.use(res => {
    window.console.log(res);
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