
    //탭메뉴
    $(function(){
        $("ul.tab_menu>li").click(function(){
            $(this).siblings("li").removeClass("active");
            $(this).addClass("active");
            var idx = $(this).index();
            $(".tab_contents>div").removeClass("active");
            $(".tab_contents>div").eq(idx).addClass("active");
            });
        });
    
        //휴대전화 번호인증
        $("#first .telform_btn").click(function(){
            if( ($("#first .tel_name").val() != '') && ($('#first .phone2').val() != '') && ($('#first .phone3').val() != '') ){
            alert("인증번호가 전송되었습니다.");
            }else{
                alert("이름과 휴대폰 번호를 입력하세요.");
            };
        });
        $("#second .telform_btn").click(function(){
            if( ($("#second .tel_name").val() != '') && ($('#second .phone2').val() != '') && ($('#second .phone3').val() != '')){
            alert("인증번호가 전송되었습니다.");
            }else{
                alert("이름과 휴대폰 번호를 입력하세요.");
            };
        });

    //인증하기 alert
    $('#first .fianlform_btn').click(function(){
        if($('#first .cernumber_blank').val() != ''){
            alert("인증되었습니다.")
            return false;
        }else{
            return false;
        };
    });
    $('#second .fianlform_btn').click(function(){
        if($('#second .cernumber_blank').val() != ''){
            alert("인증되었습니다.")
            return false;
        }else{
            return false;
        };
    });