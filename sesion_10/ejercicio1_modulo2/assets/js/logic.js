$(document).ready(
    function () {         
        $("#text1").mouseout(
            function () {
             $("#text2").hide();
        });
 
        $("#text1").mouseenter(
            function () {
             $("#text2").show();
        });
});

$(document).ready(
    function () {
        $("#imgPacman").click(
            function () {
                $("#imgPacman").css("width", "100%");
    });

    $("#imgPacman").mouseout(
        function () {
            $("#imgPacman").css("width", "20%");
    });
});

$(document).ready(
    function () {
        $("#text3").dblclick(
            function () {
                $("#text3").css("font-size", "xx-large");
    });

    $("#text3").mouseout(
        function () {
            $("#text3").css("font-size", "medium");
    });
});