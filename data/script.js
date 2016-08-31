$(document).ready(function() {
    $('#premium').on('click', function() {
        if (!$(this).closest('li').hasClass('selected')) {
            $(this).closest('li').addClass('selected');
            $('#optimal').closest('li').removeClass('selected');
            $('#basic').closest('li').removeClass('selected');
            $('#premiumContent').show();
            $('#optimalContent').hide();
            $('#basicContent').hide();
        }
    });
    $('#optimal').on('click', function() {
        if (!$(this).closest('li').hasClass('selected')) {
            $(this).closest('li').addClass('selected');
            $('#premium').closest('li').removeClass('selected');
            $('#basic').closest('li').removeClass('selected');
            $('#premiumContent').hide();
            $('#optimalContent').show();
            $('#basicContent').hide();
        }
    });
    $('#basic').on('click', function() {
        if (!$(this).closest('li').hasClass('selected')) {
            $(this).closest('li').addClass('selected');
            $('#premium').closest('li').removeClass('selected');
            $('#optimal').closest('li').removeClass('selected');
            $('#premiumContent').hide();
            $('#optimalContent').hide();
            $('#basicContent').show();
        }
    });
    $(".button").on('click', function() {
        $('html, body').animate({
            scrollTop: $(".form").offset().top
        }, 1000);
    });
    $('#scrollDown').on('click', function() {
        $('html, body').animate({
            scrollTop: $("#secondSection").offset().top
        }, 1000);
    });
    $('#showDetailedConditions').on('click', function(event) {
        event.preventDefault();
        if ($('#detailedConditions').css('display') == 'none') {
            $('#detailedConditions').slideDown('fast');
        } else {
            $('#detailedConditions').slideUp('fast');
        }
        
    });
})