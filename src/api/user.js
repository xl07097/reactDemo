import $axios from '@/utils/fetch';
import path from '@/utils/path';

export function userLogin(data){
    return $axios({
        url: path.userLogin,
        data: data.data
    })
}

export function getLoginUserInfo(){
    return $axios.get(path.getLoginUserInfo)
}

export function userLogout(){
    return $axios({
        url: path.userLogout
    })
}