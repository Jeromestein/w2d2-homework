$(document).ready(function() {
    $('table td').not(':contains("Not Available")').not(':first-child').css('cursor', 'pointer');
    
    $("td").click(function () {
        var content = $(this).text();
        
        if (content != "Not Available") {
            $(this).toggleClass("tdhighlight");
            
            if ($(this).hasClass("tdhighlight")) {
                var columnIndex = $(this).index();
                var cliffName = $('table thead th').eq(columnIndex).text();
                
                $('#displaySelected').css("visibility","visible");
                $('#displaySelected').css("margin-top","2em");
                $('#result').append("<p>" + content + " at <span>" + cliffName + "</span></p>");
            } else {
                $('#result p:contains("'+content+'")').remove();
                
                if ($('#result').has('p').length == false) {
                    $('#displaySelected').css("visibility","hidden");
                    $('#displaySelected').css("margin-top","0");
                }
            }
        }
    });
}); 