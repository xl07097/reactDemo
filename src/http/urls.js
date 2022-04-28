let baseURL = ''

export const OSSURIPrefix = 'https://files.zhiqiuge.com/'

if (window.location.hostname === "localhost") {
  // 本地开发状态
  baseURL = "https://tomcat.zhiqiuge.com";
  // baseURL = "http://localhost:9087";
} else {
  baseURL = "https://tomcat.zhiqiuge.com";
}
let urls = {};

urls.BASE_URI = baseURL + "/note"; // 基础地址

urls.upload = urls.baseURL + "/upload/alioss/file";

urls.userLogin = "/login"; // 登录
urls.getLoginUserInfo = "/user/loginUserInfo"; // 当前登录用户信息
urls.userLogout = "/logout"; //退出登录
urls.getUser = "/user/checkuser";
urls.userList = "/user/list";
urls.userStatus = "/user/updateUserStatus";
urls.getAllMenu = "/menu/getMenu";

urls.fileList = "/file/list";
urls.deleteFile = "/file/delete";

export default urls;
