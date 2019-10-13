


// 进行将所有的地址进行赋值
var baseUrl = 'http://localhost:8000';

// 1 用户登录
var USER_LOGIN = baseUrl + '/admin/login';
// 2 退出登录
var USER_LOGOUT = baseUrl + '/admin/logout';
// 3 获取用户信息
var GET_USER = baseUrl + '/admin/getuser';
// 4 文章数量统计
var ARTICLE_COUNT = baseUrl + '/admin/article_count';
// 5 评论数量统计
var DISCUSS_COUNT = baseUrl + '/admin/comment_count';
// 6 月新增文章数
var MONTH_ARTICLE = baseUrl + '/admin/month_article_count';
// 7 各类型文章数量统计
var COUNT_TYPE = baseUrl + '/admin/article_category_count';
// 8 月文章访问量
var ARTICLE_VISIT = baseUrl + '/admin/article_category_visit';
// 9 文章搜索
var ARTICLE_SEARCH = baseUrl + '/admin/search';
// 10 发布文章
var ARTICLE_PUBLISH = baseUrl + '/admin/article_publish';
// 11 文章编辑
var ARTICLE_EDIT = baseUrl + '/admin/article_edit';
// 12 删除文章
var ARTICLE_DELETE = baseUrl + '/admin/article_delete';
// 13 文章类别搜索
var CATEGORY_SEARCH = baseUrl + '/admin/category_search';
// 14 新增文章类别
var CATEGORY_ADD = baseUrl + '/admin/category_add';
// 15 编辑文章类别
var CATEGORY_EDIT = baseUrl + '/admin/category_edit';
// 16 删除文章类别
var CATEGORY_DELETE = baseUrl + '/admin/category_delete';
// 17 文章评论搜索
var COMMENT_SEARCH = baseUrl + '/admin/comment_search';
// 18 评论审核通过
var COMMENT_PASS = baseUrl + '/admin/comment_pass';
// 19 评论审核不通过
var COMMENT_REJECT = baseUrl + '/admin/comment_reject';
// 20 删除评论
var COMMENT_DELETE = baseUrl + '/admin/comment_delete';
// 21 获取用户信息
var GET_USERINFO = baseUrl + '/admin/userinfo_get';
// 22 编辑用户信息
var EDIT_USERINFO = baseUrl + '/admin/userinfo_edit';