// // これJquery
// $("#a").html("変化した");
// $("#a").fadeOut(3000);
// $("#a").fadeIn(3000); 
// // ↑フェードインは、見えてるものには効かない


$("#a").css("text-align", "center");
$("#a").css("color", "black");
$("#a").css("background", "pink");
$("#a").css("padding-top", "10px");
$("#a").css("padding-bottom", "10px");

    $("#a").on("click", function(){        
        // $("#a").html("変化した");
        // $("#a").fadeOut(3000);
        // $("#a").fadeIn(3000); 
// ↓絶対消すな！！！！
});

// JavaScriptもJqueryも、
// html側にidかclassが必ず必要

$(".janken").css("font-size", "30px");
$(".janken").css("font", "bold");
$(".janken").css("font-weight", "bold");
$(".janken").css("width", "fit-content");
$(".janken").css("margin", "auto");
$(".janken").css("padding", "7px 7px 7px 7px");
$(".janken").css("background-color", "pink");
$(".janken").css("color", "black");

$(".janken").on("click", function(){
    $(".janken").html("Paper...(click me!)");
    $(".janken").css("color", "black");
    $(".janken").on("click", function(){
        $(".janken").html("Scissors...👇");
        $(".janken").css("color", "black");
    }
    )
})

$(".pon").css("margin-left", "586px");
$(".pon").css("background-color", "pink");
$(".pon").css("width", "100px");
$(".pon").css("height", "50px");
$(".pon").css("margin-top", "21.440px");
$(".pon").css("font-weight", "bold");
$(".pon").css("border", "solid", "bold");

$(".pon").on("click", function(){
    // $(".janken").fadeOut(5000);

    var jibun = Math.floor( Math.random() *3);
    var aite = Math.floor( Math.random() *3+3);

    if (jibun == 0){
        $(".b").html('<img src="img/rock.jpg">');
    } else if (jibun == 1){
        $(".b").html('<img src="img/scissors.jpg">');
    }else if (jibun == 2){
        $(".b").html('<img src="img/paper.jpg">');
    }

    if (aite == 3){
        $(".c").html('<img src="img/rock.jpg">');
    } else if (aite == 4){
        $(".c").html('<img src="img/scissors.jpg">');
    }else if (aite == 5){
        $(".c").html('<img src="img/paper.jpg">');
    }

    if (jibun - aite == -2){
        $(".result").html("You lost..");
    }else if(jibun - aite == -4){
        $(".result").html("You won!");
    }else if(jibun - aite == -3){
        $(".result").html("A tie");
    }else if(jibun - aite == -5){
        $(".result").html("You lost..");
    }else if(jibun - aite == -1){
        $(".result").html("You won!");
    }

});

$(".flex").css("display", "flex");
$(".flex").css("margin-left", "339px");
$(".flex").css("margin-top", "21.440px");
$(".flex").css("margin-bottom", "0px");

// $(".flex2").css("display", "flex");

$(".flex3").css("background-color", "white");
$(".flex3").css("width", "600px");
$(".flex3").css("margin-left", "339px");
$(".flex3").css("margin-top", "-38px");
$(".flex3").css("padding-bottom", "47px");
$(".flex3").css("font-size", "20px");

$(".result").css("background-color", "#FFFF00");
$(".result").css("width", "200px");
$(".result").css("height", "50px");
$(".result").css("text-align", "center");
$(".result").css("margin", "auto");
$(".result").css("padding-top", "20px");
$(".result").css("border", "solid", "bold", "border-color", "pink");
$(".result").css("font-weight", "bold");
$(".result").css("font-size", "20px");