/**
 *
 * @param {*} res 接口返回原始数据
 * @returns
 */
export const getExportName = (res) => {
  const { headers } = res
  const disposition = headers['content-disposition'].split(';')[1]
  const filename = disposition.split('=')[1]
  return decodeURIComponent(filename)
}

/**
 *
 * @param {*} blob blob数据
 * @param {*} filename 文件名
 * @param {*} type 文件类型
 */
export const saveFile = (blob, filename, type) => {
  // let blob = new Blob([data], {
  //     type: type                 // 'application/vnd.ms-excel'
  // })
  if ('msSaveOrOpenBlob' in navigator) {
    // 兼容edge
    window.navigator.msSaveOrOpenBlob(blob, filename)
  }
  if (window.navigator && window.navigator.msSaveBlob) {
    window.navigator.msSaveBlob(blob, filename)
  } else {
    /* 火狐谷歌的文件下载方式 */
    let a = document.createElement('a')
    let href = window.URL.createObjectURL(blob)
    a.href = href
    a.download = filename
    document.body.appendChild(a)
    let evt = new MouseEvent('click', {
      bubbles: false,
      cancelable: true,
      view: window,
    });
    a.dispatchEvent(evt);
    window.URL.revokeObjectURL(href)
    setTimeout(() => {
      document.body.removeChild(a)
    }, 100)
  }
}
