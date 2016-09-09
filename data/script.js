'use strict';

$(document).ready(function() {
    $('form').on('submit', function(event) {
        event.preventDefault(event);
        var name, email, city;
        $.each($(this).serializeArray(), function(key, element) {
            if (element.name == 'email') {
                email = element.value;
            } else if (element.name == 'city') {
                city = element.value;
            }
        });
        dataLayer.push({
            'event': 'iphone7SendForm',
            'iphone7FormName': name,
            'iphone7FormEmail': email,
            'iphone7FormCity': city
        });
        $('#success').show();
    });
});