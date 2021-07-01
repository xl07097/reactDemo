let BASIC_URI = "";

if (window.location.hostname === "localhost"){ // 本地开发状态
    BASIC_URI = "https://tomcat.zhiqiuge.com";
    // BASIC_URI = "http://localhost:9087";
} else {
    BASIC_URI = "https://tomcat.zhiqiuge.com";
    // BASIC_URI = window.location.protocol + "//" + window.location.hostname + ":8080"; //要发布在同一服务器上
}
let urls = {};

urls.BASE_URI = BASIC_URI + "/note"; // 基础地址


urls.upload = urls.BASE_URI + '/upload/uploadfile';

urls.userLogin = "/user/login"; // 登录
urls.getLoginUserInfo = "/user/loginUserInfo";// 当前登录用户信息
urls.userLogout = "/user/logout"; //退出登录
urls.getUser = "/user/checkuser";
urls.userList = "/user/userList";
urls.userStatus = '/user/changeUserStatus';
urls.getAllMenu = '/menu/getMenu';

urls.fileList = '/file/alioss/list'

export default urls;
