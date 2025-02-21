$(document).ready(function() {
    let selectedActivities = [];

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

    $('table tbody td').click(function() {
        const activity = $(this).text();

        if (activity === "Not Available") {
            return;
        }

        const index = selectedActivities.indexOf(activity);

        if (index === -1) {
            selectedActivities.push(activity);
            $(this).addClass('tdhighlight'); 
        } else {
            selectedActivities.splice(index, 1);
            $(this).removeClass('tdhighlight'); 
        }
    });

    $('#selectButton').click(function() {
        if (selectedActivities.length > 0) {
            $('#modalContent').text('My selected activities to enquire: ' + selectedActivities.join(', '));
            $('#infoModal').modal('show');
        } else {
            alert('Please select at least one activity.');
        }
    });
}); 