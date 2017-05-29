
$(function() {
    $('#btnSubmitEditProfile').on('click', function () {
        var year = $('#year').val();
        var month = $('#month').val();
        var day = $('#day').val();
        if (year && month && day) {
            var birthday = new Array();
            birthday.push(year);
            birthday.push(pad(month, 2));
            birthday.push(pad(day, 2));
            $('#birthday').val(birthday.join(''));
        }
        $('#edit-profile-form').submit();
    });

    $('#avatar').on('change', function () {
        $('#pageForm').submit();
    });

    $('#province').change(function() {
        $('#city').empty();
        $('#area').empty();
        $('#area').val('');
        var id = $(this).val();
        if (id) {
            getCitys(0, id);
        }
    });

    $('#city').change(function() {
        $('#area').empty();
        var id = $(this).val();
        if (id) {
            getAreas(0, id);
        }
    });

    $.ms_DatePicker({
        YearSelector: "#year",
        MonthSelector: "#month",
        DaySelector: "#day"
    });
})

function getProvinces(select_id) {
    var url = 'http://' + baseHost + '/region/get-provinces';
    $.get(url, function(json) {
        var html = '';
        html += '<option value="0">请选择所在省份</option>';
        $(json.data).each(function(i, v) {
            html += '<option value="' + v.id + '"';
            if (select_id == v.id) {
                html += ' selected ';
            }
            html += '>' + v.name + '</option>'
        })
        $('#province').html(html);
    })
}

function getCitys(select_id, pid) {
    if (!pid) {
        return;
    }

    var url = 'http://' + baseHost + '/region/get-citys';
    var params = {id: pid};
    $.get(url, params, function(json) {
        var html = '';
        html += '<option value="0">请选择所在城市</option>';
        $(json.data).each(function(i, v) {
            html += '<option value="' + v.id + '"';
            if (select_id == v.id) {
                html += ' selected ';
            }
            html += '>' + v.name + '</option>'
        })
        $('#city').html(html);
    })
}

function getAreas(select_id, pid) {
    if (!pid) {
        return;
    }

    var url = 'http://' + baseHost + '/region/get-areas';
    var params = {id: pid};
    $.get(url, params, function(json) {
        var html = '';
        html += '<option value="0">请选择所在地区</option>';
        $(json.data).each(function(i, v) {
            html += '<option value="' + v.id + '"';
            if (select_id == v.id) {
                html += ' selected ';
            }
            html += '>' + v.name + '</option>'
        })
        $('#area').html(html);
    })
}

function successUploadImage(data) {
    data = JSON.parse(data);
    if (data.error == 0) {
        var url = createUserFaceImgUrl(data.basename);
        $('#avatarImg').prop('src', url);
        $('input[name="User[avatar]"]').val(data.basename);
    }
}