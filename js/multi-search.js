// 当文档内容被加载完毕后执行
document.addEventListener("DOMContentLoaded", function () {
    var h,
        // 搜索按钮，点击时将读取输入框的内容并搜索
        b = document.getElementById("search_submit"),
        // 创建 <select> 元素
        c = document.createElement("select"),
        // 定义一个空数组，稍后将用于存储 <option> 元素
        e = [],
        // 原始的搜索函数
        f = search,
        // 预定义的一些搜索引擎和它们的查询 URL
        g = {
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
    // 设置 <select> 元素的样式
    (c.style.float = "left"),
        (c.style.appearance = "none"),
        (c.style.height = "30px"),
        (c.style.border = "none"),
        (c.style.padding = "0 10px 0px 9px"),
        (c.style.margin = "8px 0 0 8px"),
        (c.style.setProperty("font-size", "var(--m-font-size)")),
        // 注意：这里使用了 backgroundColor 而不是 background-color
        (c.style.setProperty("color", "var(--m-font-color)")),
        (c.style.outline = "none"),
        (c.style.borderRadius = "8px");
    // 遍历 g 中的每一个属性，将 <option> 元素添加到 e 数组中
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
    // 设置 <select> 元素的 HTML 内容
    (c.innerHTML = e.join("")),
        // 处理 <select> 元素的 onchange 事件
        (c.onchange = function () {
            var b, c;
            // 如果选择了 "其他" 选项或 "自定义" 选项
            if ("c" !== this.value && "m" !== this.value) {
                // 将 localStorage 中的 se 属性设置为当前选项的值
                (b = !0), (localStorage.se = this.value);
            } else {
                // 弹出对话框提示用户输入自定义地址
                c = prompt(
                    "请修改自定义地址\n注：via上取消也可能会清空(′⊙ω⊙`)",
                    localStorage.c
                );
                c = (c || "").trim();
                // 如果用户输入的自定义地址为空，则默认选中默认搜索引擎
                b = !c;
                // 将 select 元素的值设置为其他或自定义选项
                this.value = b ? "i" : "c";
                // 将用户输入的自定义地址保存到本地存储中
                localStorage.c = c;
            }
            // 禁用其他选项
            this.children[this.children.length - 1].disabled = b;
        }),
        // 设置 select 元素的值为本地存储中保存的搜索引擎标识符，如果没有保存则使用默认搜索引擎
        (c.value = localStorage.se || "i"),
        // 将 select 元素插入到搜索按钮之前
        b.parentElement.insertBefore(c, b),
        // 重定义搜索函数
        (search = function () {
            var a = document.getElementById("search_input");
            // 去除搜索关键词两侧的空格
            (a.value = a.value.trim()),
                // 如果搜索关键词不为空，则将搜索关键词和选中的搜索引擎的 URL 组合成完整的搜索链接，然后执行原始的搜索函数
                a.value ? ((a.value = g[c.value].url + a.value), f()) : !1
        });
});
