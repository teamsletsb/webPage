$(function(){
    $("ul.tab_menu>li").click(function(){
        $(this).siblings("li").removeClass("active");
        $(this).addClass("active");
        var idx = $(this).index();
        $(".tab_contents>div").removeClass("active");
        $(".tab_contents>div").eq(idx).addClass("active");
    });
});