import $fetch from "@/utils/fetch";

import urls from "@/utils/urls";

export function getUserList(data) {
    return $fetch.get(urls.userList, {
        params: data,
    });
}
