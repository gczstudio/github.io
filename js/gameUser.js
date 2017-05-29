/**
 * Created by chenyi on 2016/7/8.
 */
var perpage = 10;
var url = window.location.href;
var page = $('#hidPage').val();
var params = {
    page: page,
    perpage: perpage,
    sort: 0,  //鎺掑簭瀛楁  0 鎴垮崱  1 娉ㄥ唽鏃堕棿
    order: 1, //鎺掑簭鏂瑰紡  1 闄嶅簭  2 鍗囧簭
};
$.get(url, params, function (json) {
    $('#divUserListLoading').hide();
    createUserListHtml(json.data, false);
});

$('#search').on('click', function() {
    params['account'] = $('#account').val();
    $.get(url, params, function (json) {
        $('#divUserListLoading').hide();
        createUserListHtml(json.data, false);
    });
})

var stopLoadPage = false;
var isLoading = false;
$.onSrollBottom(function() {
    if (stopLoadPage || isLoading) {
        return;
    }

    isLoading = true;
    $('#divUserListLoading').show();

    var pageVal = $('#hidPage').val();
    pageVal= parseInt(pageVal) + 1;
    params.page = pageVal;
    $.get(url, params, function(json) {
        var t = function() {
            createUserListHtml(json.data, true);
            $('#divUserListLoading').hide();
            if (json.data.list.length < perpage) {
                stopLoadPage = true;
            } else {
                isLoading = false;
                $('#hidPage').val(pageVal);
            }
        }
        setTimeout(t,1000);
    });
});

$(".nav").each(function(region) {
    $(this).on("click",
        function() {
            var order = $(this).attr('order');
            var set_order = order == 1 ? 2 : 1;
            $(this).attr('order', set_order);
            params.page = 1;
            params.sort = region;
            params.order = order;
            $.get(url, params, function (json) {
                $('#divUserListLoading').hide();
                createUserListHtml(json.data, false);
            });
        })
});

function createUserListHtml(json, append) {
    var strHtml = '';
    $(json.list).each(function(i, v) {
        strHtml += '<div class="row list"><div class="col-xs-2"><img user_id="' + v.id + '" src="' + v.headimgurl + '" class="img-rounded" width="50" height="50"></div>';
        strHtml += '<div class="col-xs-3"><p>' + v.id + '</p><p>' + v.buy_card + '涓帀</p></div>';
        strHtml += '<div class="col-xs-3"></div>';
        strHtml += '<div class="col-xs-4"><p>' + v.nickname + '</p><p>' + v.createtime + '</p>';
        strHtml += '</div></div>';
    })

    /*if (append) {
        $('#list').append(strHtml);
    } else {*/
        $('#list').html(strHtml);
    //}

    $('.list img').each(function() {
        $(this).click(function() {
            window.location.href = createGameUserInfoUrl($(this).attr('user_id'));
        })
    })
}