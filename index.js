NavigatorInfo = "appCodeName: " + navigator.appCodeName + '<br/>';
NavigatorInfo1 = "appName (Browser Name): " + navigator.appName + '<br/>';
NavigatorInfo2 = "appVersion: " + navigator.appVersion + '<br/>';
NavigatorInfo3 = "cookieEnabled: " + navigator.cookieEnabled + '<br/>';
NavigatorInfo4 = "platform: " + navigator.platform + '<br/>';
NavigatorInfo5 = "userAngent: " + navigator.userAngent + '<br/>';
NavigatorInfo6 = "onLine: " + navigator.onLine + '<br/>';



var demo = document.getElementById("demo0");
demo.innerHTML = NavigatorInfo;
var demo1 = document.getElementById("demo1");
demo1.innerHTML = NavigatorInfo1;
var demo2 = document.getElementById("demo2");
demo2.innerHTML = NavigatorInfo2;
var demo3 = document.getElementById("demo3");
demo3.innerHTML = NavigatorInfo3;
var demo4 = document.getElementById("demo4");
demo4.innerHTML = NavigatorInfo4;
var demo5 = document.getElementById("demo5");
demo5.innerHTML = NavigatorInfo5;
var demo6 = document.getElementById("demo6");
demo6.innerHTML = NavigatorInfo6;