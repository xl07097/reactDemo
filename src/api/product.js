import $fetch from "@/utils/fetch";

import path from "@/utils/path";

export function getUserList(data) {
    return $fetch.post(path.userList, data);
}

