
//초기화
$(document).ready(function(){

    list_delete();  //리스트삭제
    bucketslist();  //건수 구하기
    list_refresh(); // 건수 새로고침
});

//총 건수
let bucketslist = function(){   //건수 구하기
    return $(".buckets").length;
};
let list_refresh = function(){  //새로고침
    $("#counting_buckets>h3").html("총 "+bucketslist()+"건");
};




    //체크박스 이벤트
    function checkSelectAll()  {
        // 전체 체크박스
        const checkboxes 
          = document.querySelectorAll('input[name="items"]');
        // 선택된 체크박스
        const checked 
          = document.querySelectorAll('input[name="items"]:checked');
        // select all 체크박스
        const selectAll 
          = document.querySelector('input[name="selectall"]');
        
        if(checkboxes.length === checked.length)  {
          selectAll.checked = true;
        }else {
          selectAll.checked = false;
        }
      
      }
      
      function selectAll(selectAll)  {
        const checkboxes 
           = document.getElementsByName('items');
        
        checkboxes.forEach((checkbox) => {
          checkbox.checked = selectAll.checked
        })
      }



//삭제이벤트
//X버튼
let list_delete = function(){
    $("button.delete").click(function(){
        $(this).parents(".buckets").remove();
        bucketslist();
        list_refresh();
    });
};

//선택삭제
$("button[name=delete_select_items]").click(function(){
    let for_idx = bucketslist();
    let bkt_chk = [];
    for(let i = 1; i <= for_idx; i++){
        bkt_chk[i] = $(".buckets:nth-of-type("+i+")").find("input[name=items]").is(":checked");

        if(bkt_chk[i] == true){
            $(".buckets:nth-of-type("+i+")").addClass("rmv");
        }
    }
    $(".rmv").remove();
    
    bucketslist();
    list_refresh();
});
