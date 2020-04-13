import $fetch from "@/utils/fetch";
import urls from "@/utils/urls";

export function getAllMenu() {
    return $fetch.post(urls.getAllMenu)
}