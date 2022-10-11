
// 비밀번호 8자리 이상 25자리이하 입력 경고문구
$('#pw_text').hide();
$('#pw_length').on('input', function(){
    if($('#pw_length').val() != '' && $('#pw_length').val().length < 8){
        $('#pw_text').show();
    }else{
        $('#pw_text').hide();
    };

    var pwdCheck = /^(?=.*[0-9])(?=.*[a-zA-Z]).{8,25}$/;

    if(!pwdCheck.test(pw_length.value)){
         $('#pw_text').show();
        return false;
    };
})
// 체크박스 전체 선택
$(".checkbox_group").on("click", "#check_all", function () {
    $(this).parents(".checkbox_group").find('input').prop("checked", $(this).is(":checked"));
});
// 체크박스 개별 선택
$(".checkbox_group").on("click", ".normal", function() {
    var is_checked = true;

    $(".checkbox_group .normal").each(function(){
        is_checked = is_checked && $(this).is(":checked");
    });

    $("#check_all").prop("checked", is_checked);
});


//회원가입 유효성검사
$(document).ready(function(){
    $("#final_submit").click(function(){
        var email_id = document.getElementById('email_id');
        var pw_length = document.getElementById('pw_length');
        var re_pw_length = document.getElementById('re_pw_length');
        var u_name = document.getElementById('u_name');
        

        if(email_id.value == ""){
            alert("이메일 주소를 입력하세요.");
            email_id.focus();
            return false;
        };

        if(email_sel.value == ""){
            alert("이메일 주소를 입력하세요.");
            return false;
        };

        if(pw_length.value == ""){
            alert("비밀번호를 입력하세요.");
            pw_length.focus();
            return false;
        };

        var pwdCheck = /^(?=.*[0-9])(?=.*[a-zA-Z]).{8,25}$/;

        if(!pwdCheck.test(pw_length.value)){
            alert("비밀번호는 영문 숫자 조합 8이상 25자리 이하로 사용해야합니다.");
            pw_length.focus();
            return false;
        };

        if(re_pw_length.value !== pw_length.value){
            alert("비밀번호가 일치하지 않습니다.");
            re_pw_length.focus();
            return false;
        };

        if(u_name == ""){
            alert("닉네임을 입력하세요.");
            u_name.focus();
            return false;
        };

        var u_nameCheck = /^[a-zA-Z0-9가-힣]{1,15}$/;

        if(!u_nameCheck.test(u_name.value)){
            alert("닉네임은 1~15자리로 사용해야합니다.");
            u_name.focus();
            return false;
        };

        //필수 약관동의체크해야 넘어가기..
        if(!check_1.checked){
           alert("약관 동의를 체크하세요.");
           serviceterm.focus();
           return false;
        };
        if(!check_2.checked){
           alert("약관 동의를 체크하세요.");
           serviceterm.focus();
           return false;
        };
        if(!check_3.checked){
           alert("약관 동의를 체크하세요.");
           serviceterm.focus();
           return false;
        };
        

        location.href="./S_2.html";

    });
});

//이메일 체크 팝업..
$("#email_btn").click(function(){
    if($('#email_id' && '#email_sel').val() != ''){
    alert("확인되었습니다.");
    };
});
//닉네임 체크 팝업..
$("#u_name_btn").click(function(){
    if($('#u_name').val() != ''){
        alert("확인되었습니다.");
    };
});
