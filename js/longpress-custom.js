var btn = document.querySelector("#custom");

var timer = null;

var touchstartHander = function (event) {
    // event.preventDefault();
    timer = setTimeout(LongPress, 500);
}

var touchmoveHander = function (event) {
    event.preventDefault();
    clearTimeout(timer);
    timer = null;
}

var touchendHander = function (event) {
    event.preventDefault();
    clearTimeout(timer);
    return false;
}
// 移动端
btn.addEventListener("touchstart", touchstartHander, false);
btn.addEventListener("touchmove", touchmoveHander, false);
btn.addEventListener("touchend", touchendHander, false);

function LongPress() {
    // alert("长按被触发");
    var name = window.prompt("请输入网站名：");
    if (name != null) localStorage.setItem('name', name);
    // 在主 html 读取存储 (不是)
    if (name != null) {
        var site = window.prompt("请输入网址：");
        if (site != null) localStorage.setItem('site', site);
    }
}

var p = document.getElementById("custom-text");
    a = document.getElementById("custom");

var nameCache = localStorage.getItem("name");
    siteCache = localStorage.getItem("site");

if (nameCache != null && siteCache != null) {
    p.innerHTML = nameCache;
    a.setAttribut.href = siteCache;
}