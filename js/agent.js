
$('#btnSubmitAuth').on('click', function () {
    postProxyAuthForm();
});

function postProxyAuthForm() {
    var url = window.location.href;
    var data = $('#proxy-auth-form').serialize();
    $('#btnSubmitLogin').val('姝ｅ湪鐧诲綍...');
    $.post(url, data, function(e) {
        if (e.error) {
            $('.tips').find('span').html(e.message);
            $('.tips').show();
            setTimeout(function(){
                $('.tips').hide();
                $('.tips').find('span').html('');
            },1000);
        } else {
            alert(e.message);
            setTimeout(function(){
                window.location.href = url;
            },1000);
        }
    });
}