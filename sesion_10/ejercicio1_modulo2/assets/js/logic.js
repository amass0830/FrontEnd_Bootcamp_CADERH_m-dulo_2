$(document).ready(function () {         
        $("#text1").mouseout(function () {
            $("#text2").hide();
        });
 
    $("#text1").mouseenter(function () {
        $("#text2").show();
    });
});

