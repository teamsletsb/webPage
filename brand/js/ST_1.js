
/*배송시 요청사항 직접입력 부분 스크립트*/
    $(function(){
//직접입력 인풋박스 기존에는 숨어있다가
        $("#selboxDirect").hide();
        $("#parcel_memo").change(function() {
            //직접입력을 누를 때 나타남
            if($("#parcel_memo").val() == "direct") {
            $("#selboxDirect").show();
            }else{
                $("#selboxDirect").hide();
            }
        })
    });


/*결제방식 영역*/
$(document).ready(function(){
    $(".sltbox").hide();
    $("input[name=payment]").change(function(){
    var radio = $(':radio[name="payment"]:checked').val();
    $(".sltbox").hide();
    if(radio == "creditcard"){
        $("#selboxDirect02").show();
    }else if(radio == "accountment"){
        $("#selboxDirect03").show();
    }else if(radio == "phonepay"){
        $("#selboxDirect04").show();
    }
    });
});

/*이용동의 부분*/
    //전체선택
$(".checkbox_group").on("click", "#check_all", function () {
    $(this).parents(".checkbox_group").find('input').prop("checked", $(this).is(":checked"));
    });
    //개별선택
    $(".checkbox_group").on("click", ".normal", function() {
    var is_checked = true;
        $(".checkbox_group .normal").each(function(){
        is_checked = is_checked && $(this).is(":checked");
    });
    $("#check_all").prop("checked", is_checked);
});


//약관동의 전체체크 아닐시 경고창
    $(document).ready(function(){
        $("#submit_btn").click(function(){
            var u_id = $("input[name='u_id']").val();
            var u_phonenum01 = $("input[name='u_phonenum01']").val();
            var u_phonenum02 = $("input[name='u_phonenum02']").val();
            var addr01 = $("input[name='addr01']").val();
            var addr02 = $("input[name='addr02']").val();
            
            if($("#check_1").is(":checked") == false){
                alert("모든 약관에 동의 하셔야 다음 단계로 진행 가능합니다.");
                return false;
            }else if($("#check_2").is(":checked") == false){
                alert("모든 약관에 동의 하셔야 다음 단계로 진행 가능합니다.");
                return false;
            }else if($("#check_3").is(":checked") == false){
                alert("모든 약관에 동의 하셔야 다음 단계로 진행 가능합니다.");
                return false;
            }else if(!u_id){
                alert("성함을 입력해주세요");
                $("input[name='u_id']").focus();
                return false;
            }

            var phonenumber = $("select[name='phonenumber']>option:selected").index();
            if(phonenumber<1){
                alert("연락처를 입력해주세요");
                $("input[name='phonenumber']").focus();
                return false;

            }else if(!u_phonenum01){
                alert("연락처를 입력해주세요");
                $("input[name='u_phonenum01']").focus();
                return false;
            }else if(!u_phonenum02){
                alert("연락처를 입력해주세요");
                $("input[name='u_phonenum02']").focus();
                return false;
            }else if(!addr01){
                alert("우편번호를 입력해주세요");
                $("input[name='addr01']").focus();
                return false;
            }else if(!addr02){
                alert("상세주소를 입력해주세요");
                $("input[name='addr02']").focus();
                return false;
            }else if( ! jQuery('input[name="payment"]:checked').val() ) {
                alert('결제수단을 선택해주세요');
                jQuery('input[name="payment"]').focus();
                return false;
            }
            /*
            else if( ! jQuery('select[name="memo"]>option:selected').val()) {
                alert("결제수단을 선택해주세요");
                return false;
            }
            
            var memo = $("select[name='memo']>option:selected").index();
            if(memo<1){
                alert("결제수단을 선택해주세요");
                $("input[name='memo']").focus();
                return false;
            }
            */            
        });
    });

    /*수량증감 플마 버튼*/
    Number.prototype.format = function(){
        if(this==0) return 0;
      
        var reg = /(^[+-]?\d+)(\d{3})/;
        var n = (this + '');
      
        while (reg.test(n)) n = n.replace(reg, '$1' + ',' + '$2');
      
        return n;
      };
       
      
      String.prototype.format = function(){
        var num = parseFloat(this);
        if( isNaN(num) ) return "0";
      
        return num.format();
      };
          
      var basic_amount = parseInt('50000');
     
      function change_qty2(t){
        //var min_qty = '수량버튼'*1;
        var min_qty = 1;
        var this_qty = $("#ct_qty").val()*1;
        var max_qty = '10'; // 현재 재고
        if(t=="m"){
          this_qty -= 1;
          if(this_qty<min_qty){
            //alert("최소구매수량 이상만 구매할 수 있습니다.");
            alert("수량은 1개 이상 입력해 주십시오.");
            return;
            }
          }
          else if(t=="p"){
            this_qty += 1;
            if(this_qty>max_qty){
              alert("죄송합니다. 재고가 부족합니다.");
              return;
              }
          }
      
        var show_total_amount = basic_amount * this_qty;
        //$("#ct_qty_txt").text(this_qty); 
        $("#ct_qty").val(this_qty);
        $("#it_pay").val(show_total_amount);
        $("#total_amount").html(show_total_amount.format()+"원");
        $("#tt_amt").html(show_total_amount.format()+"원");
      }  