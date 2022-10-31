import { showMessage } from './message'

import { getExportName, saveFile } from './saveFile'

// 响应状态码 弹框处理
export const responseHandle = ({ code, message }) => {
  switch (code) {
    case 300:
      showMessage(message)
      break
    default:
      showMessage(message)
      break
  }
}

// 下载文件流处理
export const downloadHandle = (res) => {
  // 当前下载的不是正常的文件流，而是后端返回的 json 提示
  if (res.data.type.includes('json')) {
    const fr = new FileReader()
    fr.onload = (e) => {
      const json = JSON.parse(e.target.result)
      responseHandle(json)
    }
    fr.readAsText(res.data)
    return {
      code: 1000,
      message: '',
    }
  }

  const filename = getExportName(res)
  saveFile(res.data, filename)
  return {
    code: 200,
    message: '导出成功',
  }
}
