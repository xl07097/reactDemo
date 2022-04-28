import { get, post } from "@/http/request";
import urls from "@/utils/urls";

export function userLogin(data) {
    return post(urls.userLogin, data);
}

export function getLoginUserInfo() {
    return get(urls.getLoginUserInfo);
}

export function switchUserStatus(data) {
    return post(urls.userStatus, data);
}

export function userLogout() {
    return post(urls.userLogout);
}
