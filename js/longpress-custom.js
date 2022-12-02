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

var p = document.getElementById("custom-text");
a = document.getElementById("custom");

changeSite(p, a);

function LongPress(p, a) {
    // alert("长按被触发");
    var name = window.prompt("请输入网站名：");
    if (name) {
        // local storage 是同步的！
        localStorage.setItem('name', name);
        // 在主 html 读取存储 (不是)
        var site = window.prompt("请输入网址：");
        if (site) {
            localStorage.setItem('site', site);
            changeSite(p, a);
        }
    }
}

function changeSite(p, a) {
    var nameCache = localStorage.getItem("name");
    siteCache = localStorage.getItem("site");

    if (nameCache && siteCache) {
        p.innerHTML = nameCache;
        a.setAttribut.href = siteCache;
    }
}
