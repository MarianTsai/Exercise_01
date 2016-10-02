$(document).ready(function () {
    $('button').click(function () {
        
        $.ajax({
            type: "POST",
            url: "http://54.196.235.238/mayday/marian/",
            data: '{"test":' + $("input[name=number]").val() + '}',
            dataType: 'json' ,
            success: function (response) {
                $('#ans').html(response);
            }
        });

    });

});