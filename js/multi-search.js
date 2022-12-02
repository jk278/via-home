document.addEventListener("DOMContentLoaded", function () {
    var h,
        b = document.getElementById("search_submit"),
        c = document.createElement("select"),
        e = [],
        f = search,
        g = {
            i: {
                name: "默认", url: ""
            },
            gg: {
                name: "谷歌", url: " https://www.google.com/search?query="
            },
            bing: {
                name: "必应", url: " https://cn.bing.com/search?q="
            },
            sg: {
                name: "搜狗",
                url: " https://m.sogou.com/web/searchList.jsp?keyword="
            },
            wz: {
                name: "无追",
                url: " https://wuzhuiso.com/s?q="
            },
            gk: {
                name: "夸克", url: " https://quark.sm.cn/s?q="
            },
            tt: {
                name: "头条",
                url: " https://m.toutiao.com/search?keyword="
            },
            zh: {
                name: "知乎",
                url: " https://www.zhihu.com/search?q="
            },
            c: {
                name: "其他", url: localStorage.c || ""
            },
        };
    (c.style.float = "left"),
        (c.style.height = "46px"),
        (c.style.border = "none"),
        (c.style.paddingLeft = "6px"),
        (c.style.background = "transparent"),
        (c.style.outline = "none"),
        (c.style.borderRadius = "inherit");
    for (h in g)
        e.push(
            "<option value=" +
            h +
            " " +
            (g[h].disabled || "") +
            ">" +
            g[h].name +
            "</option>"
        );
    (c.innerHTML = e.join("")),
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
