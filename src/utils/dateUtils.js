/* eslint-disable indent */

/**
 *
 * @param {*} str
 * @return yyyy/MM/dd hh:mm:ss
 */
export function datetimeformatFromString(str) {
  if (!str) {
    return "";
  }
  return new Date(str).Format("yyyy/MM/dd hh:mm:ss");
}
/**
 *
 * @param {*} str
 * @return yyyy/MM/dd
 */
export function datetimeformatFromString1(str) {
  if (!str) {
    return "";
  }
  return new Date(str).Format("yyyy/MM/dd");
}

/**
 *
 * @param {*} d
 * @return yyyy-MM-dd hh:mm:ss
 */
export function timetrans(str) {
  if (!str) {
    return "";
  }
  return new Date(str).Format("yyyy-MM-dd hh:mm:ss");
}

/**
 *
 * @param {*} str
 * @return yyyy-MM-dd
 */
export function dateFormatFromString(str) {
  if (!str) {
    return "";
  }
  return new Date(str).Format("yyyy-MM-dd");
}

/**
 *
 * @param {*} str
 * @return yyyy-MM-dd hh:mm
 */
export function stringFromDate1(str) {
  if (!str) {
    return "";
  }
  return new Date(str).Format("yyyy-MM-dd hh:mm");
}

/**
 *
 * @param {*} str
 * @return yyyy年MM月dd日 hh:mm
 */
export function stringFromDate2(str) {
  if (!str) {
    return "";
  }
  return new Date(str).Format("yyyy年MM月dd日 hh:mm");
}

/**
 *
 * @param {*} str
 * @return yyyy年MM月dd日 hh:mm
 */
export function stringFromDate3(str) {
  if (!str) {
    return "";
  }
  return new Date(str).Format("yyyy年MM月dd日");
}

/**
 *
 * @param {*} str
 * @return yyyy年MM月dd日 hh:mm
 */
export function stringFromDateToNormal(str) {
  if (!str) {
    return "";
  }
  return new Date(str).Format("MM月dd日 hh:mm");
}

export function twoDateTime() {
  let t = new Date();
  let y = t.getFullYear();
  let m = t.getMonth() + 1;
  if (m < 10) {
    m = "0" + m;
  }
  let date1 = y + "/" + m + "/01";
  let date2 = null;
  let allDate = new Date(y, m, 0).getDate();
  return [new Date(date1 + " 00:00"), new Date(date2 + "m" + allDate + " 23:59")];
}

export function getDay(time1, time2) {
  let t1 = new Date(time1).getTime();
  let t2 = new Date(time2).getTime();
  return Math.ceil((t1 - t2) / 24 / 60 / 60 / 1000);
}
