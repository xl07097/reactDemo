import $http from './base'
import { downloadHandle } from './httpHandle.js'
const qs = require('qs')

/**
 * config 中可以配置上传下载进度函数，取消请求等配置
 */

/**
 * GET 请求
 * @param {*} url
 * @param {*} params
 * @returns
 */
export const get = (url, params = {}, config = {}) => {
  const { headers = {}, ...configRest } = config

  return $http.get(url, {
    params,
    ...configRest,
    headers: {
      ...headers,
      'Content-Type': 'application/json',
    },
  })
}

/**
 * POST json 求情
 * @param {*} url
 * @param {*} data
 * @returns
 */
export const post = (url, data = {}, config = {}) => {
  const { headers = {}, ...configRest } = config
  return $http.post(url, JSON.stringify(data), {
    ...configRest,
    headers: {
      ...headers,
      'Content-Type': 'application/json',
    },
  })
}

/**
 * POST form表单 求情
 * @param {*} url
 * @param {*} data
 * @returns
 */
export const formPost = (url, data = {}, config = {}) => {
  const { headers = {}, ...configRest } = config
  return $http.post(url, qs.stringify(data), {
    ...configRest,
    headers: {
      ...headers,
      'Content-Type': 'application/x-www-form-urlencoded',
    },
  })
}

/**
 * POST 文件上传请求
 * @param {*} url
 * @param {*} data
 * @returns
 */
export const postFile = (url, data, config = {}) => {
  return $http.post(url, data, config)
}
/**
 * GET 文件下载请求
 * @param {*} url
 * @param {*} params
 * @returns
 */
export const downloadGet = (url, params = {}, config = {}) => {
  const { headers = {}, ...configRest } = config
  return $http
    .get(url, {
      params,
      ...configRest,
      responseType: 'blob',
      headers: {
        ...headers,
        'Content-Type': 'application/json',
      },
    })
    .then(downloadHandle)
}

/**
 * POST 文件下载json请求
 * @param {*} url
 * @param {*} data
 * @returns
 */
export const downloadPost = (url, data = {}, config = {}) => {
  const { headers = {}, ...configRest } = config
  return $http
    .post(url, JSON.stringify(data), {
      headers: {
        ...headers,
        'Content-Type': 'application/json',
      },
      ...configRest,
      responseType: 'blob',
    })
    .then(downloadHandle)
}


/**
 * 以链接形式下载(此方法不能处理下载异常),OSS下载
 * @param {*} url
 * @param {*} data
 * @returns
 */
export const OSSURIPrefix = 'https://files.zhiqiuge.com/'

export const downloadOss = (url, data = {}) => {
  window.location.href = `${OSSURIPrefix}${url}`
}

