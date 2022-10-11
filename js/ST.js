//메인컨텐츠 view 클릭 이벤트
let cnt = $("#main>div").length;    //총 컨텐츠요소 갯수
let change = function(){
    $("#main").css("background-image","url('./images/bg_01.png"); //default 이미지 설정
    if((window.matchMedia('(max-width: 1023px)').matches)){
        $("#main").css("background-image","url('')");
    }
    
    $('#products>ul>li').click(function(){      
        let idx = $(this).index()+1;        //컨텐츠 넘버링 타겟
        

        for(let i = 0; i <= cnt; i++){
            $("#prod"+i).removeClass("switch"); //전체 컨텐츠 클래스 초기화
        }
        $("#prod"+idx).addClass("switch");  //클래스 삽입
        if((window.matchMedia('(max-width: 1023px)').matches)){
            $("#main").css("background-image","url('')");
        }else{
        $("#main").css("background-image","url('./images/bg_0"+ idx +".png')");
        }         //이미지 삽입

        let color = [ //모바일용 백그라운드 컬러 설정
            ,
        "#56BB8A", 
        "rgba(128,194,242,0.6)", 
        "#ADCE99", 
        "#F4BA65",
        "#97C94F", 
        "#C5ECF5", 
        "#EDEC9B"];
        $("#main").css("background-color",color[idx]);
    });
};
$(document).ready(change());
$(window).resize(function(){
    if((window.matchMedia('(max-width: 1023px)').matches)){
        $("#main").css("background-image","url('')");
    }else{
        let switch_idx = $(".switch").index()+1;
        $("#main").css("background-image","url('./images/bg_0"+ switch_idx +".png')");
    }
});


//슬라이드(+swiper.js)
var mySwiper = undefined;

function initSwiper() {

if ((window.matchMedia('(max-width: 1023px)').matches) && mySwiper == undefined) {
    $("#products>ul").removeClass("flex");
    mySwiper = new Swiper(".swiper-container", {
    slidesPerView: 3,
    spaceBetween: 15,
    simulateTouch: true,
    
    });
} else if (!(window.matchMedia('(max-width: 1023px)').matches) && mySwiper != undefined) {
    $("#products>ul").addClass("flex");
    mySwiper.destroy();
    mySwiper = undefined;
}
}

initSwiper();   //최초 실행
$(window).on('resize', function(){  //이후 창 크기에 반응하여 실행
initSwiper();
});


//버튼이벤트 - 장바구니
let btn_cnt = 0;
$(function(){
    $(".paybtn>button:nth-of-type(1)").click(function(){
        btn_cnt += 1;

        if($(".btn_popup").hasClass("btn_popup")){
            $(".btn_popup").remove();
        };
        if($(".btn_count").hasClass("btn_count")){
            $(".btn_count").remove();
        };

        $('body').append("<div class='btn_popup'></div>");
        $('#CA').append("<div class='btn_count'>"+btn_cnt+"</div>");

        $(".btn_popup").fadeIn(300);
        $(".btn_count").fadeIn(300);
        setTimeout(function(){
            $(".btn_popup").fadeOut(300);
            $(".btn_count").fadeOut(300);
        },600)
    });
});


//버튼이벤트 - 구매하기
$(function(){
    $(".paybtn>button:nth-of-type(2)").click(function(){
        location.href = 'ST_1.html';
    });
});


