import { get } from "@/http/request";

import urls from "@/utils/urls";

export function getUserList(data) {
    return get(urls.userList, data);
}
