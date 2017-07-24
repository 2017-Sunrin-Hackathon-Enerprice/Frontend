var arr1;
var arr2;
$(document).ready(function() {
    arr1 = window.opener.temparr1[window.opener.currentfirindex];
    arr2 = window.opener.temparr2[window.opener.currentsecindex];
    $("#title").append(arr1.업체명+"의"+arr1.모델명);
    $("#sub").append("화면대각선길이 : "+arr1.화면대각선길이+", 디스플레이방식 : "+arr1.디스플레이방식);
    $("#price").append(arr1.효율등급+" 등급 | \\"+arr1.가격);
    $("#watt").append(arr1.소비전력+"W");
    $("#title1").append(arr2.업체명+"의"+arr2.모델명);
    $("#sub1").append("화면대각선길이 : "+arr2.화면대각선길이+", 디스플레이방식 : "+arr2.디스플레이방식);
    $("#price1").append(arr2.효율등급+" 등급 | \\"+arr2.가격);
    $("#watt1").append(arr2.소비전력+"W");
    var line1 = [arr1.가격,arr1.가격/100+6*5,arr1.가격/100+6*5*2,arr1.가격/100+6+5+3];
    var line2 = [arr2.가격,arr2.가격/100+6*5,arr2.가격/100+6*5*2,arr2.가격/100+6+5+3];
    var ticks = ['년도','5년','10년','15년'];


});
function first(){
    var cost = arr1.소비전력*$("#day1").val()*$("#time1").val();
    $("#cost1").val(cost);
    $("#costs1").val(cost+arr1.가격*1);
}
function sec(){
    var cost = arr2.소비전력*$("#day2").val()*$("#time2").val();
    $("#cost2").val(cost);
    $("#costs2").val(cost+arr2.가격*1);
}