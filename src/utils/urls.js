let BASIC_URI = "";

if (window.location.hostname === "localhost"){ // 本地开发状态
    BASIC_URI = "http://122.51.129.51:8080";
    // BASIC_URI = "http://localhost:9087";
}else{
    BASIC_URI = window.location.protocol + "//" + window.location.hostname + ":8080"; //要发布在同一服务器上
}

let urls = {
    upload: '/upload/uploadfile',

    BASE_URI: BASIC_URI + "/note", // 基础地址
    
    userLogin: "/user/login", // 登录
    getLoginUserInfo: "/user/loginUserInfo",// 当前登录用户信息
    userLogout: "/user/logout", //退出登录
    getUser: "/user/checkuser",
    userList: "/user/userList",
    userStatus: '/user/changeUserStatus',
    getAllMenu: 'menu/getMenu'
};

export default urls;