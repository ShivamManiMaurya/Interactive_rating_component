// alert("hellow dunia");

var ratingVal = "";

function passingValues() {
    localStorage.setItem("textvalue", ratingVal);
    return false;
}


$(document).ready(function(){
    $(".btn").on("click", function(){
        ratingVal = $(this).text();

        
    });

    $(".submit-btn").click(function(){

        // window.addEventListener("load", function() {
            
        //     this.document.getElementById("span-id").innerHTML = ratingVal;

        // })

                // window.open('resultpage.html');
        

        // passingValues();

        window.location.href = "resultpage.html?name=" + encodeURIComponent($(".btn").val());
        
        
    });
    
});
