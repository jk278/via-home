// 加载后执行
document.addEventListener("DOMContentLoaded", function () {
    var h,
        // 搜索点击块，会读取 input 的内容
        b = document.getElementById("search_submit"),
        // 创建 select
        c = document.createElement("select"),
        e = [],
        f = search,
        g = {
            // i 和 gg 是 g 对象的属性
            i: {
                name: "默认", url: ""
            },
            gg: {
                name: "谷歌", url: "https://www.google.com/search?query="
            },
            bing: {
                name: "必应", url: "https://cn.bing.com/search?q="
            },
            sg: {
                name: "搜狗",
                url: "https://m.sogou.com/web/searchList.jsp?keyword="
            },
            yd: {
                name: "y-dx",
                url: "https://yandex.com/search/touch/?text="
            },
            tt: {
                name: "头条",
                url: "https://m.toutiao.com/search?keyword="
            },
            wz: {
                name: "无追",
                url: "https://wuzhuiso.com/s?q="
            },
            zh: {
                name: "知乎",
                url: "https://www.zhihu.com/search?q="
            },
            c: {
                name: "其他", url: localStorage.c || ""
            },
        };
    // select 的样式
    (c.style.float = "left"),
        (c.style.appearance = "none"),
        (c.style.height = "30px"),
        (c.style.border = "none"),
        (c.style.padding = "0 10px 0px 9px"),
        (c.style.margin = "8px 0 0 8px"),
        (c.style.setProperty("font-size", "var(--m-font-size)")),
        // 操，要用 backgroundColor
        (c.style.setProperty("color", "var(--m-font-color)")),
        (c.style.outline = "none"),
        (c.style.borderRadius = "8px");
    // 循环 g 中的每一个属性
    for (h in g)
        // 数组 e 添加元素，创建 option 标签
        e.push(
            "<option value=" +
            h +
            " " +
            (g[h].disabled || "") +
            ">" +
            g[h].name +
            "</option>"
        );
    // select 的文本
    (c.innerHTML = e.join("")),
        // 其他 的选中事件 onchange
        (c.onchange = function () {
            var b, c;
            "c" !== this.value && "m" !== this.value
                ? ((b = !0), (localStorage.se = this.value)) : ((c = prompt(
                    "请修改自定义地址\n注：via上取消也可能会清空(′⊙ω⊙`)",
                    localStorage.c
                )),
                    (c = (c || "").trim()),
                    (b = !c),
                    (this.value = b ? "i" : "c"),
                    (localStorage.c = c)),
                (this.children[this.children.length - 1].disabled = b);
        }),
        (c.value = localStorage.se || "i"),
        b.parentElement.insertBefore(c, b),
        (search = function () {
            var a = document.getElementById("search_input");
            return (
                (a.value = a.value.trim()),
                a.value ? ((a.value = g[c.value].url + a.value), f()) : !1
            );
        });
});
