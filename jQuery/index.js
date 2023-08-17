$(document).ready(function() {
    //$("h1").css("color","red");
    $("h1").addClass("big-title");
    $("h1").removeClass("big-title");
    $("h1").addClass("big-title margin-50");
    console.log($("h1").hasClass("nops")); // tem a classe?

    $("h1").text("Ufff");
    $("button").text("Don't click me");
    $("button").html("<em>Don't click me</em>"); // equivale ao innerHTML

    let link=$("a").attr("href"); //1 param, retorna valor
    $("a").attr("href","http://www.bing.com"); //2 param, seta valor

    console.log(link);
});
