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
    const thumbnailImage = $(this).children(":first");
    const thumbnailTitleDetails = $(this).children(":last");
    const imageSource = thumbnailImage.attr("src");
    const imageSourceSplit = imageSource.split("/");
    const projectName = imageSourceSplit[3].split(".")[0];
    thumbnailImage.attr("src", `../photos/Application .gifs/${projectName}.gif`);
    thumbnailTitleDetails.css("display", "block");
})

// $(".thumbnail-container-DCL").on("mouseleave", hideMoreBtn(){
$(".thumbnail-container-DCL").on("mouseleave", function(){
    const thumbnailImage = $(this).children(":first")
    const thumbnailTitleDetails = $(this).children(":last")
    const imageSource = thumbnailImage.attr("src")
    const imageSourceSplit = imageSource.split("/")
    const projectName = imageSourceSplit[3].split(".")[0]
    thumbnailImage.attr("src", `../photos/Portfolio thumbnails/${projectName}.jpg`)
    thumbnailTitleDetails.css("display", "none")
})



// $(document).on("click", ".thumbnail-container-DCL", function(){
//     var linkTarget = $(this).children().next();
//     var linkDestination = linkTarget.attr("href")
//     window.location.href = linkDestination
// })