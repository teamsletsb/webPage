function nextFunc(idx){
    if(idx=='a'){
        $("#slide01>.slideWrap").append($("#slide01>.slideWrap li").first().clone()); //복붙만 해준거라서 무한증식
        $("#slide01>.slideWrap li").first().remove(); // 첫번째거 잘라주는거
    }else if(idx=='b'){
        $("#slide02>.slideWrap").append($("#slide02>.slideWrap li").first().clone()); //복붙만 해준거라서 무한증식
        $("#slide02>.slideWrap li").first().remove(); // 첫번째거 잘라주는거
    }else if(idx=='c'){
        $("#slide03>.slideWrap").append($("#slide03>.slideWrap li").first().clone()); //복붙만 해준거라서 무한증식
        $("#slide03>.slideWrap li").first().remove(); // 첫번째거 잘라주는거
    }
}
function prevFunc(idx){
    if(idx=='a'){
        $("#slide01>.slideWrap").prepend($("#slide01>.slideWrap li").last().clone());
        $("#slide01>.slideWrap li").last().remove();
    }else if(idx=='b'){
        $("#slide02>.slideWrap").prepend($("#slide02>.slideWrap li").last().clone());
        $("#slide02>.slideWrap li").last().remove();
    }else if(idx=='c'){
        $("#slide03>.slideWrap").prepend($("#slide03>.slideWrap li").last().clone());
        $("#slide03>.slideWrap li").last().remove();
    }
}