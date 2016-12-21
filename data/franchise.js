'use strict';

$(document).ready(function() {
    $('.center button').on('click', function() {
        $('.modal_bg').show();
        $('.modal_form').show();
        $('body').css({overflow: 'hidden'});
    });
    $('.closeModal').on('click', function(event) {
        event.preventDefault(event);
        $('.modal_bg').hide();
        $('.modal_form').hide();
        $('.modal_message').hide();
        $('body').css({overflow: 'auto'});
    });
    $('.modal_bg').on('click', function(event) {
        $('.modal_bg').hide();
        $('.modal_form').hide();
        $('.modal_message').hide();
        $('body').css({overflow: 'auto'});
    });
    $('#form').on('submit', function(event) {
        event.preventDefault(event);
        var form = $(this),
            formData = form.serialize();
        $.ajax({
            url: 'http://api.e96.ru/franchise',
            type: 'POST',
            dataType: 'json',
            data: formData,
            success: function() {
                form.find('input,textarea').val('');
                $('.modal_form').hide();
                $('.modal_message').show();
                dataLayer.push({'event': 'otpravka_formy_fr'});
            }
        });
    });
});
