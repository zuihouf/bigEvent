// 用来存放文章信息管理


var article = {
    // 信息的展示
    category_search: function (options) {
        $.ajax({
            url: CATEGORY_SEARCH,
            success: options.callback
        });
    },

    // 分类数据的新增功能

    category_add: function (options) {
        $.ajax({
            type: 'post',
            url: CATEGORY_ADD,
            data: options.data,
            success: options.callback
        });
    },


    // 分类数据的编辑功能
    // 
    category_edit: function (options) {
        $.ajax({
            type: 'post',
            url: CATEGORY_EDIT,
            data: options.data,
            success: options.callback

        });
    },


    // 分类数据的删除功能

    category_delete: function (options) {
        $.ajax({
            type: 'post',
            url: CATEGORY_DELETE,
            data: options.data,
            success: options.callback
        });

    }


};


