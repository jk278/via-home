const btn = document.querySelector("#custom");
const p = document.getElementById("custom-text");

let timer = 0;
// 坐标
document.startPoint = {};
// event 是触摸时间
btn.addEventListener("touchstart", function (e) {
    // 阻止默认的屏幕滚动
    e.preventDefault();
    // 变量都没传，当然没反应了
    timer = setTimeout(() => {
        LongPress(p, btn);
        timer = null;
    }, 500);
    // 起始坐标
    document.startPoint = {
        x: e.changedTouches[0].pageX,
        y: e.changedTouches[0].pageY
    }
});

btn.addEventListener("touchmove", function (e) {
    clearTimeout(timer);
    timer = 0;
});

btn.addEventListener("touchend", function (e) {
    clearTimeout(timer);
    // 结束坐标
    var now = {
        x: e.changedTouches[0].pageX,
        y: e.changedTouches[0].pageY
    };
    // 全不等于，类型也不同
    if (timer !== 0 && Math.abs(now.x - document.startPoint.x)
        + Math.abs(now.y - document.startPoint.y) < 5) {
        // 执行点击事件
        // e.target.dispatchEvent(tap);
        window.location.href = localStorage.getItem("site");
    }
    return false;
});

// let和var的区别体现在作用域上。var的作用域被规定为一个函数作用域，
// 而let则被规定为块作用域，块作用域要比函数作用域小一些，
// 但是如果两者既没在函数中，也没在块作用域中定义，那么两者都属于全局作用域。
// var允许在同一作用域中声明同名的变量，而let不可以。
// es6中还有一个声明变量的命令const，const和let都是在声明的块作用域中有效，
// 但是let声明的变量可变，值和类型都可以改变，没有限制。const声明额变量不能改变，
// 所以，const一旦声明一个变量，就必须马上初始化，不能留到以后赋值。
// let p = document.getElementById("custom-text"),
// 同一个元素声明成两个变量！看都没看完，状态不对。
// a = document.getElementById("custom");

changeSite(p, btn);

function LongPress(p, a) {
    // alert("长按被触发");
    var name = window.prompt("请输入网站名称：");
    if (name && name != "") {
        var site = window.prompt("请输入包含 \"http(s)://\" 的完整网址：");
        if (site && site != "") {
            // 变量命名为函数名 confirm 出现只执行一次的问题，即无法存储
            conf = window.confirm("确认保存？\n\n网站名：" + name 
            + "\n网址：\u3000" + site + "\n( ´◔︎ ‸◔︎`)\n清除网页存储将会丢失~");
            if (conf) {
                // local storage 是同步的！
                localStorage.setItem('name', name);
                // 在主 html 读取存储 (不是)
                localStorage.setItem('site', site);
                p.innerHTML = name;
                a.href = site;
            }
        }
    }
}

function changeSite(p, a) {
    var nameCache = localStorage.getItem("name"),
        siteCache = localStorage.getItem("site");

    if (nameCache && siteCache) {
        p.innerHTML = nameCache;
        a.href = siteCache;
    }
}
