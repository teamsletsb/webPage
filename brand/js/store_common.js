// 헤더영역 공통

$(document).ready(function(){
    $(window).resize(function(){
        let isWindow = $(window).width();
        if(isWindow >= 1024){
            if($("#head ul>li").css("display") == "none"){
                $("#head ul>li").css("display","block");
                $("#mob_menu span").removeClass("mob_menu_switch_on");  //초기화
                $("#mob_menu span").addClass("mob_menu_switch_off");    //X 지움
                $("#mob_menu div").removeClass("mob_menu_switch_off");  //초기화
                $("#mob_menu div").addClass("mob_menu_switch_on");      //햄버거 보여줌
            }else{};
        }else{
            $("#head ul>li").css("display","none");
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
        $("#head ul>li").css("display","block");                //ul 보여줌
        
    }else{                                                 
        $("#mob_menu span").removeClass("mob_menu_switch_on");  //초기화
        $("#mob_menu span").addClass("mob_menu_switch_off");    //X 지움
        $("#mob_menu div").removeClass("mob_menu_switch_off");  //초기화
        $("#mob_menu div").addClass("mob_menu_switch_on");      //햄버거 보여줌
        $("#head ul>li").css("display","none");                 //ul 사라짐
    };
});