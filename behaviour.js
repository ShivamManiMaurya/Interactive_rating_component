
var ratingVal = "";

$(document).ready(function(){
    $(".btn").on("click", function(){
        ratingVal = $(this).text();
    });

    $("#btn-ratings").submit(function (event){
        event.preventDefault();

        if (ratingVal > 0)
        {
            $(".rating").css("display", "none");
            $(".thanks").css("display", "grid");
            $("span").text(ratingVal);
        }
    });
    
});
