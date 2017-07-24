var state = 1;

function clickTV(){
    alert("state는 3입니다.");
    state = 3;
}
function clickRe(){
    alert("state는 2입니다.");
    state = 2;
}
function clickAir(){
    state = 1;
}
function clickCal(){

}

function find1(val){
    $.ajax({
        type: "POST",
        url: "http://soylatte.kr:3000/db/find",
        data: "model="+val+"&kind="+state,
        success: function(data){
        if(state==3){
            alert(JSON.stringify(data));
            var realdata = JSON.parse(JSON.stringify(data));
            $(".canberemoved").remove();
            $("#find1").html("<div"+" class=\""+"canberemoved\""+" id="+"\"inner1\" "+">"+"</div>");
            for(var i = 0; i<realdata.length;i++)
            {
                $("#inner1").append("<div>" + "<p class=\"z-depth-4 card\">" + "<span class=\"row\">" + "<span class=\"col s2\">" + "<img src=\"imgs/dumm.png\"" + "class=\"cardimg\">" + "</span>" +
                    "<span class=\"col s1\"></span>" +
                    "<span class=\"col s9 inside\">" +
                    "<span class=\"title\">" +
                    realdata[i].업체명+" 제품" +
                    "</span>" +
                    "<br />" +
                    "<span class=\"detail\">" +
                    "화면대각선길이 : " + realdata[i].화면대각선길이 + " 디스플레이방식 : " + realdata[i].디스플레이방식+
                    "</span>" +
                    "<br />" +
                    "<span class=\"lv\">" +
                    "( "+realdata[i].효율등급+" 등급 )"+" 소비전력"+" | " +realdata[i].소비전력+
                    "</span>" +
                    "</span>" +
                    "</span>" +
                    "</p>" +
                    "</div>");
            }
        }
        if(state==2){
                for(var i = 0; i<data.length;i++)
                {
                    alert("하나잡음");
                }
        }
            },
        error: function(xhr, status, error)     {
            alert("서버에 문제가 있습니다. 관리자에게 문의하세요");
        }
    });
}
function find2(){

}