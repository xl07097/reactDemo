
let HOST = '';

if(window.location.hostname === 'localhost'){ // 本地开发状态
    HOST = 'http://192.168.1.49:9100/';
}else{
    HOST = window.location.protocol + '//' + window.location.hostname + ':' + window.location.port; //要发布在同一服务器上
}

function getApiUri(){
    return HOST + '/api/'
}


let path  = {
    userLogin: '/user/login', // 登录
    getLoginUserInfo: '/user/loginUserInfo',// 当前登录用户信息
    userLogout: '/user/logout', //退出登录
    getUser: '/user/checkuser'
}

export default path