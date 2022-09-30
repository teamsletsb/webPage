
        // 스크립트 부분
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
                    window.location.replace("./ST_2_1.html");
                }
            })(); // 바로실행 함수!! (function(){})(); 익명함수
        });