import { post } from "@/http/request";
import urls from "@/utils/urls";

export function getAllMenu() {
    return post(urls.getAllMenu)
}
