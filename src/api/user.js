import $fetch from "@/utils/fetch";
import urls from "@/utils/urls";

export function userLogin(data){
    return $fetch.post(urls.userLogin, data);
}

export function getLoginUserInfo(){
    return $fetch.get(urls.getLoginUserInfo);
}

export function switchUserStatus(data) {
    return $fetch.post(urls.userStatus, data);
}

export function userLogout(){
    return $fetch.post(urls.userLogout);
}