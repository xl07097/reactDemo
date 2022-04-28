// 是否有消息提示框标志，防止出现多个影响体验， false 无 / true 有
let MSGSHOWFLAG = false

import { message, notification } from 'antd'

/**
 *
 * @param {*} content
 * @param {*} type success/warning/info/error
 * @returns
 */
export const showMessage = (content, type = 'info', duration = 3000) => {
  if (MSGSHOWFLAG) {
    return
  }
  MSGSHOWFLAG = true

  message[type](content, duration)

  setTimeout(() => {
    MSGSHOWFLAG = false
  }, duration)
}

// eslint-disable-next-line no-unused-vars
let toastInstance = null
/**
 *
 * @param {*} content
 * @param {*} title
 * @param {*} type success/warning/info/error
 * @param {*} duration
 * @returns
 */
export const showToast = (description, message = '消息', type = 'info', duration = 4000) => {
  if (MSGSHOWFLAG) {
    return
  }
  MSGSHOWFLAG = true
  toastInstance = notification[type]({
    message,
    description,
    duration,
  })
  setTimeout(() => {
    MSGSHOWFLAG = false
  }, duration)
}
