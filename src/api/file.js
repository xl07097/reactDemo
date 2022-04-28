import { post } from "@/http/request";

import urls from "@/utils/urls";

export function getFileList(data) {
  return post(urls.fileList, data);
}

export function deletefile(data) {
  return post(urls.deleteFile, data);
}
