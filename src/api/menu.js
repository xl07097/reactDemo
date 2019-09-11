import $fetch from "@/utils/fetch";
import path from "@/utils/path";

export function getAllMenu() {
    return $fetch.post(path.getAllMenu)
}