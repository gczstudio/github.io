/**
 * Created by chenyi on 2016/7/8.
 */
$('#btnSubmitEditPwd').on('click', function () {
    postEditPwdForm();
});

function postEditPwdForm() {
    var url = window.location.href;
    var data = $('#edit-pwd-form').serialize();
    $.post(url, data, function(e) {
        if (e.error) {
            $('#dd_error_msg').css('display','block').html('<i></i>'+e.message);
        } else {
            window.location.reload();
        }
    });
}