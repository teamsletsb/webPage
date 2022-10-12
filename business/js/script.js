// 헤더영역 공통
$(document).ready(function(){
    $(window).resize(function(){
        let isWindow = $(window).width();
        if(isWindow >= 1024){
            if($("#gnb>li").css("display") == "none"){
                $("#gnb>li").css("display","block");
                $("#mob_menu span").removeClass("mob_menu_switch_on");  //초기화
                $("#mob_menu span").addClass("mob_menu_switch_off");    //X 지움
                $("#mob_menu div").removeClass("mob_menu_switch_off");  //초기화
                $("#mob_menu div").addClass("mob_menu_switch_on");      //햄버거 보여줌
            }else{};
        }else{
            $("#gnb>li").css("display","none");
            $("#mob_menu span").removeClass("mob_menu_switch_on");  //초기화
            $("#mob_menu span").addClass("mob_menu_switch_off");    //X 지움
            $("#mob_menu div").removeClass("mob_menu_switch_off");  //초기화
            $("#mob_menu div").addClass("mob_menu_switch_on");      //햄버거 보여줌
        };
    });
}); 


$("#mob_menu").click(function(){    
    let isWindow = $(window).width();
    
    if($("#mob_menu span").hasClass("mob_menu_switch_off")){    //클릭시 햄버거있으면

        $("#mob_menu span").removeClass("mob_menu_switch_off"); //초기화
        $("#mob_menu span").addClass("mob_menu_switch_on");     //X 표시
        $("#mob_menu div").removeClass("mob_menu_switch_on");   //초기화
        $("#mob_menu div").addClass("mob_menu_switch_off");     //햄버거 지움
        $("#gnb>li").css("display","block");                //ul 보여줌
        
    }else{                                                 
        $("#mob_menu span").removeClass("mob_menu_switch_on");  //초기화
        $("#mob_menu span").addClass("mob_menu_switch_off");    //X 지움
        $("#mob_menu div").removeClass("mob_menu_switch_off");  //초기화
        $("#mob_menu div").addClass("mob_menu_switch_on");      //햄버거 보여줌
        $("#gnb>li").css("display","none");                 //ul 사라짐
    };
});

var slideIndex = 0;
function slideAuto(){
    $(".backimg>li").removeClass("topImg");
    // .backimg안에 있는 모든 li에 접근 한 후 거기에 topImg 클래스가 있다면 지워 버릴 것
    slideIndex++;
    var isIdx = slideIndex % 3;
    $(".backimg>li").eq(isIdx).addClass("topImg");
}

var slideCall = setInterval("slideAuto()",3000);

$(".headerWrap").hover(function(){
    clearInterval(slideCall);
    },function(){
    slideCall = setInterval("slideAuto()",3000);
});

/*
$(function(){
    $("#gnb>li").hover(function(){
        $(this).children(".sub").stop().slideDown();//fadeIn(300);
    },function(){
        $(this).children(".sub").stop().slideUp();//fadeOut(300);
    });
});
*/
$(document).ready(function(){
    /*
    $(".menu>li").mouseover(function(){
        $(this).children(".submenu").stop().slideDown();
    });
    $(".menu>li").mouseleave(function(){
        $(this).children(".submenu").stop().slideUp();
    });
    */

   $("#gnb>li").hover(function(){
        $(this).children(".sub").stop().slideDown();
   },function(){
        $(this).children(".sub").stop().slideUp();
   });
});

$(function(){
    $("#menu").click(function(){
        $(this).toggleClass("aniMenu");
        $("#gnb").fadeToggle(100);
    });
});

$(".modal").click(function(){       
    $("#find").slideToggle();
});    
$("#close_btn").click(function(){       
    $("#find").slideUp();  
}); 
/*
$("a.modal").click(function(){
    $("#gray, #largeImg").show();
    $("#largeImg").html("<img src='" + $(this).attr("href") + "' alt='속성값'/>");
    return false; //클릭이벤트 종료(a링크의 링크 기능 꺼준 것)
});
$("#gray").click(function(){
    $(this).hide();
    $("#largeImg").hide();
});
*/

