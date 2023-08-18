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

    $("h1").click(function() {
        $("h1").css("color","blue");
    });

    $("button").click(function() { //for all buttons, without needing a loop...
        $("h1").css("color","blue");
    })

    console.log(link);

    $("input").keypress(function(event) {
        console.log(event.key);
    })

    $("h1").on("mouseover",function() {
        $("h1").css("color","blue");
    })

    $("h1").before("<button>New_B4</button>");
    $("h1").after("<button>New_After</button>");
    $("h1").prepend("<button>New_Prepend</button>");
    $("h1").append("<button>New_Append</button>");

    $("button").remove();

    $("h1").hide();
    $("h1").show();
    $("h1").toggle();
});
