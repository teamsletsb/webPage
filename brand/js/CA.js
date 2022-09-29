    let item1 = {
        name : '까스활명수',
        price : 1200
    };
    let item2 = {
        name : '미인활명수',
        price : 1400
    };
    let item3 = {
        name : '꼬마활명수',
        price : 1800
    };
    let item4 = {
        name : '까스활',
        price : 1500
    };
    let items = [0, item1.price, item2.price, item3.price, item4.price];
    

    //초기화
    $(document).ready(function(){
        $(".buckets:nth-of-type(1) .item_name").html(item1.name);
        $(".buckets:nth-of-type(1) .item_price").html(item1.price+"원");

        $(".buckets:nth-of-type(2) .item_name").html(item2.name);
        $(".buckets:nth-of-type(2) .item_price").html(item2.price+"원");

        $(".buckets:nth-of-type(3) .item_name").html(item3.name);
        $(".buckets:nth-of-type(3) .item_price").html(item3.price+"원");

        $(".buckets:nth-of-type(4) .item_name").html(item4.name);
        $(".buckets:nth-of-type(4) .item_price").html(item4.price+"원");

            
        list_delete();  //리스트삭제
        bucketslist();  //건수 구하기
        list_refresh(); // 건수 새로고침
        paybanner();    //구매하기배너
    });

    //총 건수
    let bucketslist = function(){   //건수 구하기
        return $(".buckets").length;
    };
    let list_refresh = function(){  //새로고침
        $("#counting_buckets>h3").html("총 "+bucketslist()+"건");
    };


    // 가격계산
    $(function(){
        //감소버튼
        $(".btn_dec").click(function(){
            if(parseInt($(this).siblings(".count_items").text()) >= 2){  //2 이상일때만 감소
                let nowcnt = parseInt($(this).siblings(".count_items").text());
                let aftercnt = nowcnt - 1;
                $(this).siblings(".count_items").html(aftercnt);
                let idx = $(this).parents("ul").index() + 1;

                let afterprice = price(aftercnt, idx);  //계산함수 호출
                $(this).parent("div").siblings(".item_price").html(afterprice+"원");

                paybanner();
            };
        });
        //증가버튼
        $(".btn_inc").click(function(){
            let nowcnt = parseInt($(this).siblings(".count_items").text());
            let aftercnt = nowcnt + 1;
            $(this).siblings(".count_items").html(aftercnt);
            let idx = $(this).parents("ul").index() + 1;

            let afterprice = price(aftercnt, idx);  //계산함수 호출
            $(this).parent("div").siblings(".item_price").html(afterprice+"원");

            paybanner();
        });
    });
    //가격계산식
    function price(aftercnt, idx){
            return items[idx] * aftercnt;
        }; 

    //총금액계산
    let sumprice = function(){
        let sum = 0;
        for(let i = 0; i < bucketslist(); i++){
            let sprs = parseInt($(".buckets:nth-of-type("+(i+1)+") .item_price").text());
            sum = sum + sprs;
        }
        return sum;
    };

    //결제 링크 배너 최신화
    let paybanner = function(){
        $("#to_pay_link h5:first-child").html(bucketslist()+"개 상품 "+"총 "+sumprice()+"원 + 배송비 3000원 입니다.");
        $("#to_pay_link h4:last-child").html("총 "+(sumprice()+3000)+"원")
    };


    //체크박스 이벤트
        $("#checkall").click(function(){
        $("input[name=items]").prop("checked", $(this).is(":checked"));
        });
    

    //삭제이벤트
    //X버튼
    let list_delete = function(){
        $("button.delete").click(function(){
            $(this).parents(".buckets").remove();
            bucketslist();
            list_refresh();
            paybanner();
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
        paybanner();
    });