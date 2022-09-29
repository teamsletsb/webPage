/*배송주소 다음 api
    // 우편번호 찾기 찾기 화면을 넣을 element
    var element_wrap = document.getElementById('wrap');

    function foldDaumPostcode() {
        // iframe을 넣은 element를 안보이게 한다.
        element_wrap.style.display = 'none';
    }

    function sample3_execDaumPostcode() {
        // 현재 scroll 위치를 저장해놓는다.
        var currentScroll = Math.max(document.body.scrollTop, document.documentElement.scrollTop);
        new daum.Postcode({
            oncomplete: function(data) {
                // 검색결과 항목을 클릭했을때 실행할 코드를 작성하는 부분.

                // 각 주소의 노출 규칙에 따라 주소를 조합한다.
                // 내려오는 변수가 값이 없는 경우엔 공백('')값을 가지므로, 이를 참고하여 분기 한다.
                var addr = ''; // 주소 변수
                var extraAddr = ''; // 참고항목 변수

                //사용자가 선택한 주소 타입에 따라 해당 주소 값을 가져온다.
                if (data.userSelectedType === 'R') { // 사용자가 도로명 주소를 선택했을 경우
                    addr = data.roadAddress;
                } else { // 사용자가 지번 주소를 선택했을 경우(J)
                    addr = data.jibunAddress;
                }

                // 사용자가 선택한 주소가 도로명 타입일때 참고항목을 조합한다.
                if(data.userSelectedType === 'R'){
                    // 법정동명이 있을 경우 추가한다. (법정리는 제외)
                    // 법정동의 경우 마지막 문자가 "동/로/가"로 끝난다.
                    if(data.bname !== '' && /[동|로|가]$/g.test(data.bname)){
                        extraAddr += data.bname;
                    }
                    // 건물명이 있고, 공동주택일 경우 추가한다.
                    if(data.buildingName !== '' && data.apartment === 'Y'){
                        extraAddr += (extraAddr !== '' ? ', ' + data.buildingName : data.buildingName);
                    }
                    // 표시할 참고항목이 있을 경우, 괄호까지 추가한 최종 문자열을 만든다.
                    if(extraAddr !== ''){
                        extraAddr = ' (' + extraAddr + ')';
                    }
                    // 조합된 참고항목을 해당 필드에 넣는다.
                    document.getElementById("sample3_extraAddress").value = extraAddr;
                
                } else {
                    document.getElementById("sample3_extraAddress").value = '';
                }

                // 우편번호와 주소 정보를 해당 필드에 넣는다.
                document.getElementById('sample3_postcode').value = data.zonecode;
                document.getElementById("sample3_address").value = addr;
                // 커서를 상세주소 필드로 이동한다.
                document.getElementById("sample3_detailAddress").focus();

                // iframe을 넣은 element를 안보이게 한다.
                // (autoClose:false 기능을 이용한다면, 아래 코드를 제거해야 화면에서 사라지지 않는다.)
                element_wrap.style.display = 'none';

                // 우편번호 찾기 화면이 보이기 이전으로 scroll 위치를 되돌린다.
                document.body.scrollTop = currentScroll;
            },
            // 우편번호 찾기 화면 크기가 조정되었을때 실행할 코드를 작성하는 부분. iframe을 넣은 element의 높이값을 조정한다.
            onresize : function(size) {
                element_wrap.style.height = size.height+'px';
            },
            width : '100%',
            height : '100%'
        }).embed(element_wrap);

        // iframe을 넣은 element를 보이게 한다.
        element_wrap.style.display = 'block';
    }
*/
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
            if($("#check_1").is(":checked") == false){
                alert("모든 약관에 동의 하셔야 다음 단계로 진행 가능합니다.");
                return false;
            }else if($("#check_2").is(":checked") == false){
                alert("모든 약관에 동의 하셔야 다음 단계로 진행 가능합니다.");
                return false;
            }else if($("#check_3").is(":checked") == false){
                alert("모든 약관에 동의 하셔야 다음 단계로 진행 가능합니다.");
                return false;
            }
            else{
                $("#form").submit();
            }
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