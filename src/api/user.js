import $fetch from "@/utils/fetch";
import path from "@/utils/path";

export function userLogin(data){
    return $fetch.post(path.userLogin, data);
}

export function getLoginUserInfo(){
    return $fetch.get(path.getLoginUserInfo);
}

export function switchUserStatus(data) {
    return $fetch.post(path.userStatus, data);
}

export function userLogout(){
    return $fetch.post(path.userLogout);
}