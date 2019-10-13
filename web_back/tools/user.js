// 在里面进行请求信息的设置

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
    }

};