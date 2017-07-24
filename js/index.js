var state = 1;
var check = 0;
var fir_on = 0;
var sec_on = 0;
var temparr1;
var temparr2;
var currentfirindex;
var currentsecindex;
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
    if(val!="") {
        $.ajax({
            type: "POST",
            url: "http://soylatte.kr:3000/db/find",
            data: "model=" + val + "&kind=" + state,
            success: function (data) {
                if (state == 3) {
                    var realdata = JSON.parse(JSON.stringify(data));
                    temparr1 = realdata;
                    $(".canberemoved").remove();
                    $("#find1").html("<div" + " class=\"" + "canberemoved\"" + " id=" + "\"inner1\" " + ">" + "</div>");
                    for (var i = 0; i < realdata.length; i++) {
                        $("#inner1").append("<div>" + "<p class=\"z-depth-3 card\">" + "<span class=\"row\">" + "<span class=\"col s2\">" + "<img src=\"imgs/dumm.png\"" + "class=\"cardimg\">" + "</span>" +
                            "<span class=\"col s1\"></span>" +
                            "<span class=\"col s9 inside\">" +
                            "<span class=\"title\">" +
                            realdata[i].업체명 + " 제품" +
                            "</span>" +
                            "<br />" +
                            "<span class=\"detail\">" +
                            "화면대각선길이 : " + realdata[i].화면대각선길이 + "가격 :" + realdata[i].가격 + "</span>" +
                            "<br />" +
                            "<span class=\"lv\">" +
                            "( " + realdata[i].효율등급 + " 등급 )" + " 소비전력" + " | " + realdata[i].소비전력 +
                            "</span>" +
                            "<input" + " name=\"group1\"" + " type=\"radio\"" + " id=\"test" + i + "\""  + "/>\n" +
                            "<label" + " for=\"test" + i + "\">" + "선택" + "</label>" +
                            "</span>" +
                            "</span>" +
                            "</p>" +
                            "</div>");
                    }
                }
                if (state == 2) {
                    var realdata = JSON.parse(JSON.stringify(data));
                    temparr1 = realdata;
                    $(".canberemoved").remove();
                    $("#find1").html("<div" + " class=\"" + "canberemoved\"" + " id=" + "\"inner1\" " + ">" + "</div>");
                    for (var i = 0; i < realdata.length; i++) {
                        $("#inner1").append("<div>" + "<p class=\"z-depth-3 card\">" + "<span class=\"row\">" + "<span class=\"col s2\">" + "<img src=\"imgs/dumm.png\"" + "class=\"cardimg\">" + "</span>" +
                            "<span class=\"col s1\"></span>" +
                            "<span class=\"col s9 inside\">" +
                            "<span class=\"title\">" +
                            realdata[i].업체명 + " 제품" +
                            "</span>" +
                            "<br />" +
                            "<span class=\"detail\">" +
                            "용량 : " + realdata[i].용량 + " 모델명 : " + realdata[i].모델명 +
                            "</span>" +
                            "<br />" +
                            "<span class=\"lv\">" +
                            "( " + realdata[i].효율등급 + " 등급 )" + " 소비전력" + " | " + realdata[i].월간소비전력량 +
                            "</span>" +
                            "<input" + " name=\"group1\"" + " type=\"radio\"" + " id=\"test" + i + "\""  + "/>\n" +
                            "<label" + " for=\"test" + i + "\">" + "선택" + "</label>" +
                            "</span>" +
                            "</span>" +
                            "</p>" +
                            "</div>");
                    }
                }
                if (state == 1) {
                    var realdata = JSON.parse(JSON.stringify(data));
                    temparr1 = realdata;
                    $(".canberemoved").remove();
                    $("#find1").html("<div" + " class=\"" + "canberemoved\"" + " id=" + "\"inner1\" " + ">" + "</div>");
                    for (var i = 0; i < realdata.length; i++) {
                        $("#inner1").append("<div>" + "<p class=\"z-depth-3 card\">" + "<span class=\"row\">" + "<span class=\"col s2\">" + "<img src=\"imgs/dumm.png\"" + "class=\"cardimg\">" + "</span>" +
                            "<span class=\"col s1\"></span>" +
                            "<span class=\"col s9 inside\">" +
                            "<span class=\"title\">" +
                            realdata[i].업체명 + " 제품" +
                            "</span>" +
                            "<br />" +
                            "<span class=\"detail\">" +
                            "냉방능력 : " + realdata[i].정격냉방능력 + " 모델명 : " + realdata[i].모델명 +
                            "</span>" +
                            "<br />" +
                            "<span class=\"lv\">" +
                            "( " + realdata[i].효율등급 + " 등급 )" + " 소비전력" + " | " + realdata[i].냉방기간월간소비전력량 +
                            "</span>" +
                            "<input" + " name=\"group1\"" + " type=\"radio\"" + " id=\"test" + i + "\""  + "/>\n" +
                            "<label" + " for=\"test" + i + "\">" + "선택" + "</label>" +
                            "</span>" +
                            "</span>" +
                            "</p>" +
                            "</div>");
                    }
                }
            },
            error: function (xhr, status, error) {
            },
        });
    }
}
function find2(val){
    if(val!="") {
        $.ajax({
            type: "POST",
            url: "http://soylatte.kr:3000/db/find",
            data: "model=" + val + "&kind=" + state,
            success: function (data) {
                if (state == 3) {
                    var realdata = JSON.parse(JSON.stringify(data));
                    temparr2 = realdata;
                    $(".canberemoved2").remove();
                    $("#find2").html("<div" + " class=\"" + "canberemoved2\"" + " id=" + "\"inner2\" " + ">" + "</div>");
                    for (var i = 0; i < realdata.length; i++) {
                        $("#inner2").append("<div>" + "<p class=\"z-depth-3 card\">" + "<span class=\"row\">" + "<span class=\"col s2\">" + "<img src=\"imgs/dumm.png\"" + "class=\"cardimg\">" + "</span>" +
                            "<span class=\"col s1\"></span>" +
                            "<span class=\"col s9 inside\">" +
                            "<span class=\"title\">" +
                            realdata[i].업체명 + " 제품" +
                            "</span>" +
                            "<br />" +
                            "<span class=\"detail\">" +
                            "화면대각선길이 : " + realdata[i].화면대각선길이 + "가격 :" + realdata[i].가격 + "</span>" +
                            "<br />" +
                            "<span class=\"lv\">" +
                            "( " + realdata[i].효율등급 + " 등급 )" + " 소비전력" + " | " + realdata[i].소비전력 +
                            "</span>" +
                            "<input" + " name=\"group2\"" + " type=\"radio\"" + " id=\"test_" + i + "\""  + "/>\n" +
                            "<label" + " for=\"test_" + i + "\">" + "선택" + "</label>" +
                            "</span>" +
                            "</span>" +
                            "</p>" +
                            "</div>");
                    }
                }
                if (state == 2) {
                    var realdata = JSON.parse(JSON.stringify(data));
                    temparr2 = realdata;
                    $(".canberemoved2").remove();
                    $("#find2").html("<div" + " class=\"" + "canberemoved2\"" + " id=" + "\"inner2\" " + ">" + "</div>");
                    for (var i = 0; i < realdata.length; i++) {
                        $("#inner2").append("<div>" + "<p class=\"z-depth-3 card\">" + "<span class=\"row\">" + "<span class=\"col s2\">" + "<img src=\"imgs/dumm.png\"" + "class=\"cardimg\">" + "</span>" +
                            "<span class=\"col s1\"></span>" +
                            "<span class=\"col s9 inside\">" +
                            "<span class=\"title\">" +
                            realdata[i].업체명 + " 제품" +
                            "</span>" +
                            "<br />" +
                            "<span class=\"detail\">" +
                            "용량 : " + realdata[i].용량 + " 모델명 : " + realdata[i].모델명 +
                            "</span>" +
                            "<br />" +
                            "<span class=\"lv\">" +
                            "( " + realdata[i].효율등급 + " 등급 )" + " 소비전력" + " | " + realdata[i].월간소비전력량 +
                            "</span>" +
                            "<input" + " name=\"group2\"" + " type=\"radio\"" + " id=\"test_" + i + "\"" +  "/>\n" +
                            "<label" + " for=\"test_" + i + "\">" + "선택" + "</label>" +
                            "</span>" +
                            "</span>" +
                            "</p>" +
                            "</div>");
                    }
                }
                if (state == 1) {
                    var realdata = JSON.parse(JSON.stringify(data));
                    temparr2 = realdata;
                    $(".canberemoved2").remove();
                    $("#find2").html("<div" + " class=\"" + "canberemoved2\"" + " id=" + "\"inner2\" " + ">" + "</div>");
                    for (var i = 0; i < realdata.length; i++) {
                        $("#inner2").append("<div>" + "<p class=\"z-depth-3 card\">" + "<span class=\"row\">" + "<span class=\"col s2\">" + "<img src=\"imgs/dumm.png\"" + "class=\"cardimg\">" + "</span>" +
                            "<span class=\"col s1\"></span>" +
                            "<span class=\"col s9 inside\">" +
                            "<span class=\"title\">" +
                            realdata[i].업체명 + " 제품" +
                            "</span>" +
                            "<br />" +
                            "<span class=\"detail\">" +
                            "냉방능력 : " + realdata[i].정격냉방능력 + " 모델명 : " + realdata[i].모델명 +
                            "</span>" +
                            "<br />" +
                            "<span class=\"lv\">" +
                            "( " + realdata[i].효율등급 + " 등급 )" + " 소비전력" + " | " + realdata[i].냉방기간월간소비전력량 +
                            "</span>" +
                            "<input" + " name=\"group2\"" + " type=\"radio\"" + " id=\"test_" + i + "\"" +"/>\n" +
                            "<label" + " for=\"test_" + i + "\">" + "선택" + "</label>" +
                            "</span>" +
                            "</span>" +
                            "</p>" +
                            "</div>");
                    }
                }
            },
            error: function (xhr, status, error) {
            },
        });
    }
}
function radiochecked1(i){
    fir_on = 1;
    currentfirindex=i;
}
function radiochecked2(i){
    sec_on = 1;
    currentsecindex=i;
}
function checkradio(){
    var arr1 = document.getElementsByName("group1");
    var arr2 = document.getElementsByName("group2");
    for (var i =0 ;i<arr1.length;i++)
    {
        if(arr1[i].checked)
        {
            radiochecked1(i);
        }
    }
    for (var i=0;i<arr2.length;i++)
    {
        if(arr2[i].checked)
        {
            radiochecked2(i);
        }
    }
    alert(fir_on);
    alert(sec_on);
    if(fir_on==1&&sec_on==1){
        alert("fircur = "+currentfirindex);
        alert("seccur = "+currentsecindex);
        alert("따라서, 선택한 항목의 모델명 : " +temparr1[currentfirindex].모델명)
        var compare = window.open("comparison.html","Comparison");
        commpare.focus();
        compare.callFromParent(temparr1);
        compare.arr1 = temparr1;
        compare.arr2 = temparr2;
    }
    else{
        alert("양 쪽 모두 체크해 주세요.");
    }
}