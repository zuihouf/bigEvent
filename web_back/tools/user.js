// 在里面进行请求信息的设置
// 用来存放用户信息管理


var user = {
    // 登录请求
    login: function (options) {
        $.ajax({
            type: 'post',
            // 因为如果前后端要进行修改地址的话，单个操作麻烦，进行js封装
            url: USER_LOGIN,
            data: options.data,
            success: options.callback

        });
    },

    // 退出请求
    logout: function (options) {
        $.ajax({
            type: 'post',
            url: USER_LOGOUT,
            success: options.callback
        });
    },


    // 简单信息展示
    get_user: function (options) {
        $.ajax({
            url: GET_USER,
            success: options.callback
        });
    },


    // 请求用户信息的获取
    get_userinfo: function (options) {
        $.ajax({
            url: GET_USERINFO,
            success: options.callback
        });
    },

    // 编辑用户信息
    edit_userinfo: function (options) {
        $.ajax({
            type: 'post',
            url: EDIT_USERINFO,
            data: options.data,
            contentType: false,
            processData: false,
            success: options.callback
        });
    }
};