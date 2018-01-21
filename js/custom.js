
//fixed menu
$(document).ready(function () {
    $("#outer").css({
        "min-height": $("#mySidenav").outerHeight()
    });
    $("#main,#mySidenav").css({
        "min-height": $("#outer").outerHeight()
    });
    $(".head nav ul li").css({
        "min-height": $(".head").outerHeight()
    });
    
});


function openNav() {
    document.getElementById("mySidenav").style.left = "0";
    document.getElementById("mySidenav").style.visibility = "visible";
}

function closeNav() {
    document.getElementById("mySidenav").style.left = "-100%";
    document.getElementById("main").style.marginLeft= "0";
    document.getElementById("mySidenav").style.visibility = "hidden";
}
$('.selectpicker').selectpicker({
    size:10
});

