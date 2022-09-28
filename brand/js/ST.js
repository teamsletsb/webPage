//메인컨텐츠 view 클릭 이벤트
let cnt = $("#main>div").length;    //총 컨텐츠요소 갯수
let change = function(){
    $("#main").css("background-image","url('./images/bg_01.png"); //default 이미지 설정
    $('#products>ul>li').click(function(){      
        let idx = $(this).index()+1;        //컨텐츠 넘버링 타겟
        

        for(let i = 0; i <= cnt; i++){
            $("#prod"+i).removeClass("switch"); //전체 컨텐츠 클래스 초기화
        }
        $("#prod"+idx).addClass("switch");  //클래스 삽입
        $("#main").css("background-image","url('./images/bg_0"+ idx +".png')"); //이미지 삽입

        let color = [ //모바일용 백그라운드 컬러 설정
            ,
        "#56BB8A", 
        "rgba(128,194,242,0.6)", 
        "#F4BA65", 
        "#ADCE99", 
        "#97C94F", 
        "#EDEC9B", 
        "#C5ECF5"];
        $("#main").css("background-color",color[idx]);
    });
};
$(document).ready(change());

//슬라이드(+swiper.js)
var mySwiper = undefined;

function initSwiper() {

if ((window.matchMedia('(max-width: 1023px)').matches) && mySwiper == undefined) {
    $("#products>ul").removeClass("flex");
    mySwiper = new Swiper(".swiper-container", {
    slidesPerView: 3,
    spaceBetween: 20,
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
$(function(){
    $(".paybtn>button:nth-of-type(1)").click(function(){
        $(this).append("<div class='btn_popup'>장바구니에 담았습니다.</div>");
        setTimeout(function(){
            $(".paybtn>button:nth-of-type(1)>div:nth-of-type(1)").remove();
        },2000);
    });
});


//버튼이벤트 - 구매하기
$(function(){
    $(".paybtn>button:nth-of-type(2)").click(function(){
        location.href = 'ST_1.html';
    });
});


