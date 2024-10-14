import { post, get } from "@/http/request";

import urls from "@/utils/urls";

export function getFileList(data) {
  return get(urls.fileList, data);
}

export function deletefile(name) {
  return get(`${urls.deleteFile}?name=${name}`)
}
