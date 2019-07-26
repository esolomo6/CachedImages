//Add jQuery coded
$(document).ready(function() {
    $("#image_list a").each(function() {
        var swap = new Image();
        swap.src = $(this).attr("href");
    });

    $("#image_list a").click(function(evt) {

        var url = $(this).attr("href");
        $("#image").attr("src", url);

        var text = $(this).attr("title");
        $("#caption").text(text);

        evt.preventDefault();
    });

    $("li:first-child a").focus();
});