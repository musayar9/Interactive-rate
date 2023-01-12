
const ratingBtn = document.querySelectorAll(".ratingBtn")
const ratingResult = document.querySelector(".ratingResult")


$(function () {
    $(".btnSubmit").click(function () {
        $(".rateArea").css("display", "none")
        $(".thanksArea").css("display", "block")
    })
    $(".ratingAgain").click(function () {
        $(".rateArea").css("display", "block")
        $(".thanksArea").css("display", "none")
    })

})
ratingBtn.forEach((rating) => {
    rating.addEventListener("click", () => {
        ratingResult.innerText = rating.innerText;
    })
})

