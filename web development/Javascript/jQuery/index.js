
$("h1").addClass("big-title margin-50");
// $("button").click(function(){
//     $("h1").css("color", "purple");
// })

$("h1").text("Bye")
$("button").text("Don't click me")
$("a").attr("href", "https://www.yahoo.com")

$(document).keypress(function(event){
    $("h1").text(event.key);
})


$("h1").on("mouseover", function(){
    $("h1").css("color", "green");
})

$("h1").before("<button>Before</button>");

$("h1").after("<button>After</button>");

$("h1").prepend("<button>Prepend</button>");
$("h1").append("<button>Append</button>");

// $("button")[0].remove();
// $("button").remove();

$("button").on("click", function(){
    // $("h1").hide();
    // $("h1").show();
    // $("h1").toggle();
    // $("h1").fadeOut();
    // $("h1").fadeIn();
    // $("h1").fadeToggle();
    // $("h1").slideUp();
    // $("h1").slideDown();
    // $("h1").slideToggle();
    $("h1").animate({opacity: 0.5});
})