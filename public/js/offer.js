
function changeIcon(){
    $(".headers-offer").click(function(){
    $("i", this).toggleClass("fa-plus fa-minus");
});
}

changeIcon();