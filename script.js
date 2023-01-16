
$(function () {
    $(".btnSubmit").click(function () {
        $(".rateArea").css("display", "none")
        $(".thanksArea").css("display", "block")
    })
    $(".ratingAgain").click(function () {
        $(".rateArea").css("display", "block")
        $(".thanksArea").css("display", "none")
    })

    $(".ratingBtn").click(function(event){
        $(".ratingResult").html(event.target.textContent)
    })

})

