let BASIC_URI = "";

if (window.location.hostname === "localhost") {
  // 本地开发状态
  // BASIC_URI = "http://localhost:9087";
  BASIC_URI = "https://note.zhiqiuge.com";
} else {
  BASIC_URI = "https://note.zhiqiuge.com";
}
let urls = {};

urls.BASE_URI = BASIC_URI + "/note"; // 基础地址

urls.upload = "/note/upload/alioss/file";

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
