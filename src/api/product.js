import $fetch from "@/utils/fetch";

import urls from "@/utils/urls";

export function getUserList(data) {
    return $fetch.post(urls.userList, data);
}

