$(document).ready(function(){
    // Open lightbox on image click
    $('.cliff img').click(function(){
        $('.backdrop').animate({'opacity':'.50'}, 300, 'linear').css('display', 'block');
        $('.box').fadeIn();

        // Clear existing image
        if ($('.box').contents('img')) {
            $('.box').contents().remove('img');
        }

        // Clone clicked image and add to lightbox
        var img = $(this).clone();
        $('.box').append(img);
    });

    // Close lightbox
    $('.close, .backdrop').click(function(){
        $('.backdrop').animate({'opacity':'0'}, 300, 'linear', function(){
            $('.backdrop').css('display', 'none');
        });
        $('.box').fadeOut();
    });
}); 