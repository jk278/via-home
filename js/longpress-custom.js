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

// let和var的区别体现在作用域上。var的作用域被规定为一个函数作用域，
// 而let则被规定为块作用域，块作用域要比函数作用域小一些，
// 但是如果两者既没在函数中，也没在块作用域中定义，那么两者都属于全局作用域。
// var允许在同一作用域中声明同名的变量，而let不可以。
// es6中还有一个声明变量的命令const，const和let都是在声明的块作用域中有效，
// 但是let声明的变量可变，值和类型都可以改变，没有限制。const声明额变量不能改变，
// 所以，const一旦声明一个变量，就必须马上初始化，不能留到以后赋值。
let p = document.getElementById("custom-text"),
    a = document.getElementById("custom");

changeSite(p, a);

function LongPress(p, a) {
    // alert("长按被触发");
    var name = window.prompt("请输入网站名：");
    if (name && name != "") {
        var site = window.prompt("请输入网址：");
        if (site && site != "") {
            // local storage 是同步的！
            localStorage.setItem('name', name);
            // 在主 html 读取存储 (不是)
            localStorage.setItem('site', site);
            p.innerHTML = name;
            a.href = site;
        }
    }
}

function changeSite(p, a) {
    var nameCache = localStorage.getItem("name");
    siteCache = localStorage.getItem("site");

    if (nameCache && siteCache) {
        p.innerHTML = nameCache;
        a.href = siteCache;
    }
}
