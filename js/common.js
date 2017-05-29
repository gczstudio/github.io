
jQuery.extend({
    onSrollBottom: function(bottomFuc, notBottomFuc) {
        $(window).on('scroll', function (e) {
            var scrollTop = $(this).scrollTop();
            var scrollHeight = $(document).height();
            var windowHeight = $(this).height();
            if (scrollTop + windowHeight == scrollHeight){
                if (typeof bottomFuc =='function') {
                    bottomFuc();
                }
            } else {
                if (typeof notBottomFuc =='function') {
                    notBottomFuc();
                }
            }

        });
    }
});

var baseHost = getHost();
function createUserFaceImgUrl(name) {
    return 'http://' + baseHost + '/image/user-face?basename=' + name;
}

function createAccountImgUrl(name) {
    return 'http://' + baseHost + '/image/account-img?basename=' + name;
}

function createEditLevelUrl(id) {
    return 'http://' + baseHost + '/admin/user/edit-level?id=' + id;
}

function createEditPwdUrl(id) {
    return 'http://' + baseHost + '/admin/user/edit-pwd?id=' + id;
}

function createBalanceListUrl(type, start_time, end_time) {
    return 'http://' + baseHost + '/distribution/user/balance-list?type=' + type + '&start_time=' + start_time + '&end_time=' + end_time;
}

function createCardListUrl(start_time, end_time) {
    return 'http://' + baseHost + '/distribution/user/card-list?' + 'start_time=' + start_time + '&end_time=' + end_time;
}

function createBalanceDetailUrl(id) {
    return 'http://' + baseHost + '/distribution/user/balance-detail?id=' + id;
}

function createWithDrawDetailUrl(id) {
    return 'http://' + baseHost + '/distribution/user/with-draw-detail?id=' + id;
}

function createAdminWithDrawDetailUrl(id) {
    return 'http://' + baseHost + '/admin/withdraw/detail?id=' + id;
}

function createUserInfoUrl(id) {
    return 'http://' + baseHost + '/admin/user/info?id=' + id;
}

function createProxyUserInfoUrl(id) {
    return 'http://' + baseHost + '/distribution/user/proxy-user-info?id=' + id;
}

function createGameUserInfoUrl(id) {
    return 'http://' + baseHost + '/distribution/user/game-user-info?id=' + id;
}

function createMessageDetailUrl(id) {
    return 'http://' + baseHost + '/message/detail?id=' + id;
}

function createMessageDetailUrl1(id,uid) {
    return 'http://' + baseHost + '/message/activitydetail?id=' + id+'&uid='+uid;
}

function createUserStatusUrl() {
    return 'http://' + baseHost + '/admin/user/status';
}

function getHost(url) {
    var host = "null";
    if (typeof url == "undefined"
        || null == url)
        url = window.location.href;
    var regex = /.*\:\/\/([^\/|:]*).*/;
    var match = url.match(regex);
    if (typeof match != "undefined"
        && null != match) {
        host = match[1];
    }

    return host;
}

function pad(num, n) {
    return Array(Math.max(0,(n+1)-(''+num).length)).join(0)+num;
}

function isQQ(val) {
    var reg = /^[1-9]d{4,8}$/;
    return reg.test(val);
}

$('#header_nav').on('click', function() {
    window.location.href = 'http://' + baseHost;
})