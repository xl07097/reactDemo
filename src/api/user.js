import $fetch from '@/utils/fetch';
import path from '@/utils/path';

export function userLogin(data){
    return $fetch({
        url: path.userLogin,
        data: data
    })
}

export function getLoginUserInfo(){
    return $fetch.get(path.getLoginUserInfo)
}

export function userLogout(){
    return $fetch({
        url: path.userLogout
    })
}