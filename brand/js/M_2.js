    /*탈퇴버튼*/
    $("#outbtn").click(function(){
        var result = confirm("정말로 탈퇴하시겠어요? ㅠ.ㅠ");
        if(!result){
            return false;
        }else{
            alert("즐거웠습니다...")
            location.href="./ST.html";
        }
    })
    /*적용버튼*/
    $("#modify").click(function(){
        let conf = confirm('적용하시겠습니까?');
        if(conf == true){
            alert("적용되었습니다.");
            location.href="./M_2.html";
        }else{

        }
    });
    /*핸드폰인증버튼*/
    function verify(){
        if($("input[name='phone']").val()!='' ){
            alert('인증되었습니다')
        }else{
            alert("휴대폰 번호를 입력해주세요.")
        }
    }
    /*비밀번호변경버튼*/
    function pw(){
        if( ($("input[name='password']").val()!='') && ($("#pw1").val()==$("#pw2").val()) ){
        alert('변경되었습니다');
        }else{
            alert('비밀번호를 확인해주세요.');
        }
    }
    /*배송지변경버튼*/
    function loc(){
        if($("#loc1").val() != '' || $("#loc2").val() != ''){
            alert("변경되었습니다");
        }else{
            alert("배송지를 입력해주세요.");
        }
    }
