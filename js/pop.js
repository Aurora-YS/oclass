$(document).ready(function(){

    $("#dark, #popup .close").click(function(){
        $("#dark").removeClass("active");
        $("#popup").removeClass("active");
    });

});

function setCookie(name, value, expirehours){
    var todayDate = new Date();
    todayDate.setHours(todayDate.getHours() + expirehours);  //현재 시각으로부터 expirehours(24) 더한 값으로 세팅
    document.cookie = name + "=" + escape(value) + "; path=/; expires=" + todayDate.toGMTString() + ";";
}

//"하루동안 열리지 않기" 버튼 클릭시
function todayClosePop(){
    //쿠키 설정 : setCookie(쿠키 설정 key, 쿠키 설정 value, 쿠키 설정 시간)
    setCookie("ncookie_24", "done_24", 24);  //함수 호출문 + 매개변수에 전달될 데이터들
    document.getElementById("dark").setAttribute("class", "");  //비활성화 -> 기존 active라는 클래스명을 제거
    document.getElementById("popup").setAttribute("class", "");  //비활성화 -> 기존 active라는 클래스명을 제거
}

// todayClosePop();

//화면이 열리면서 브라우저 내의 쿠키 상태를 체크
cookiedata = document.cookie;
console.log(cookiedata);
if(cookiedata.indexOf("ncookie_24=done_24")<0){     //"하루동안 열리지 않기" 버튼을 클릭하기 전 상태
    document.getElementById("dark").setAttribute("class", "active");
    document.getElementById("popup").setAttribute("class", "active"); 
}else{      //"하루동안 열리지 않기" 버튼을 클릭한 상태
    document.getElementById("dark").setAttribute("class", "");
    document.getElementById("popup").setAttribute("class", ""); 
}
