let number = 0;
$(function unknown_number(){
    number = Math.floor(Math.random() * 10);
});

$(function(){
    var i = 0;
    $("#update").progressbar();
    (function(){
        $("#update").progressbar("value",i);
        i++;
        if(i<=100){
            setTimeout(arguments.callee,10);
        //argument.callee : 현재 실행 중인 함수를 다시 불러오는 것
        }else if(i>=100){
            if(number % 2 == 0){    //난수가 짝수일때 성공
                window.location.replace("./ST_2_1.html");
            }else{
                window.location.replace("./ST_2_2.html")
            }
        }
            })(); // 바로실행 함수!! (function(){})(); 익명함수
        });

