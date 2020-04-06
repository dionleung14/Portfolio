// function showMoreBtn(event){
//     const thumbnailButton = $(this).next() 
//     thumbnailButton.css("display", "block")
// }

// function hideMoreBtn(event){
//     const thumbnailButton = $(this).next() 
//     thumbnailButton.css("display", "none")
// }

$(document).ready(function(){
    $("#WelcomeMat").modal("show")
})


// $(".thumbnail-container-DCL").on("mouseenter", showMoreBtn(){
$(".thumbnail-container-DCL").on("mouseenter", function(){
    var thumbnailButton = $(this).children(":last")
    console.log(thumbnailButton)
    thumbnailButton.css("display", "block")
})

// $(".thumbnail-container-DCL").on("mouseleave", hideMoreBtn(){
$(".thumbnail-container-DCL").on("mouseleave", function(){
    var thumbnailButton = $(this).children(":last")
    thumbnailButton.css("display", "none")
})



// $(document).on("click", ".thumbnail-container-DCL", function(){
//     var linkTarget = $(this).children().next();
//     var linkDestination = linkTarget.attr("href")
//     window.location.href = linkDestination
// })