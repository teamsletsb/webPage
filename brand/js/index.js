
//PC sub 메뉴 호버
$(function(){
    $("#gnb>li").hover(function(){
        $(this).children(".sub").stop().slideDown(300);
    },function(){
        $(this).children(".sub").stop().slideUp(300);
    });
});

//M 햄버거이벤트
$("#mob_menu").click(function(){
    if($("#mob_menu span").hasClass("mob_menu_switch_off")){    //클릭시 햄버거있으면

        $("#mob_menu span").removeClass("mob_menu_switch_off"); //초기화
        $("#mob_menu span").addClass("mob_menu_switch_on");     //X 표시
        $("#mob_menu>article>div").removeClass("mob_menu_switch_on");   //초기화
        $("#mob_menu>article>div").addClass("mob_menu_switch_off");     //햄버거 지움
        $("#gnb").css("display","block");                //ul 보여줌
        
    }else{                                                 
        $("#mob_menu span").removeClass("mob_menu_switch_on");  //초기화
        $("#mob_menu span").addClass("mob_menu_switch_off");    //X 지움
        $("#mob_menu>article>div").removeClass("mob_menu_switch_off");  //초기화
        $("#mob_menu>article>div").addClass("mob_menu_switch_on");      //햄버거 보여줌
        $("#gnb").css("display","none");                 //ul 사라짐
    };
});
/*헤더 모바일-PC전환*/
$(window).resize(function(){
    if((window.matchMedia('(max-width: 1023px)').matches) == 0){    
        //PC화면일때
        $("#gnb").css("display","flex");
        $("#mob_menu").css("display","none");
        $("#mob_menu>article>span").removeClass("mob_menu_switch_on");
        $("#mob_menu>article>div").removeClass("mob_menu_switch_off");
        $("#mob_menu>article>span").addClass("mob_menu_switch_off");
        $("#mob_menu>article>div").addClass("mob_menu_switch_on");

    }else{  
        //모바일화면일때
        $("#gnb").css("display","none");
        $("#mob_menu").css("display","flex");
        $("#mob_menu>article>span").removeClass("mob_menu_switch_on");
        $("#mob_menu>article>div").removeClass("mob_menu_switch_off");
        $("#mob_menu>article>span").addClass("mob_menu_switch_off");
        $("#mob_menu>article>div").addClass("mob_menu_switch_on");

    };
});

//Top 버튼 호버
		$('#top_btn').hover(function(){
			$(this).children().attr("src","./images/topmenu_btn_hover.png");
		},function(){
			$(this).children().attr("src","./images/topmenu_btn.png");
		});
//Vegas 스크립트
		$(function(){
			$("#vegas").vegas({
				slides:[{
					src:"nature-1.jpg", // 비디오가 로딩이 안되면 얘로 보여주기 위해서 넣어놓음!
					video:{
						src:["Swans.mp4"],
						loop:true,
						mute:true
						}
				}],
				transition:['zoomOut']
			});
		  });
//하단배너영역 텍스트효과//
$(document).ready(function() {
  $(window).scroll( function(){
      $('.fadein').each( function(i){
          
          var bottom_of_element = $(this).offset().top + $(this).outerHeight();
          var bottom_of_window = $(window).scrollTop() + $(window).height();
          
          if( bottom_of_window > bottom_of_element ){
              $(this).animate({'opacity':'1','margin-bottom':'0px'},1300);
          }
         }); 
     });
 });

 wow = new WOW(
      {
        animateClass: 'animated',
        offset:100,
		live:true
      }
    );
    wow.init();

    gsap.config({trialWarn: false})


    $('.news_hover').hover(function(){
        $(this).css('z-index','999');
        if($(this).index() == 0){
            $(".news_hover:nth-of-type(2)").css("z-index","99");
        }
    },function(){
        $(this).css('z-index','0');
        $(".news_hover:nth-of-type(2)").css("z-index","0");
    });