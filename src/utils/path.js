let BASIC_URI = '';

if (window.location.hostname === 'localhost'){ // 本地开发状态
    BASIC_URI = 'http://localhost:9000';
}else{
    BASIC_URI = window.location.protocol + '//' + window.location.hostname + ':8080'; //要发布在同一服务器上
}

let path  = {
    BASE_URI: BASIC_URI + '/api', // 基础地址
    userLogin: '/user/login', // 登录
    getLoginUserInfo: '/user/loginUserInfo',// 当前登录用户信息
    userLogout: '/user/logout', //退出登录
    getUser: '/user/checkuser',
    userList: '/users/userList'
}

export default path