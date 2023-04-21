function showButton() {
    document.getElementById("search_submit").style.display = "block"
}
function hideButton() {
    "" == document.getElementById("search_input").value && (document.getElementById("search_submit").style.display = "none")
}
function search() {
    var a = document.getElementById("search_input"); if ("" != a.value) {
        try {
            window.via.searchText(a.value)
        } catch (b) {
            alert(b)
        } a.value = ""; document.getElementById("search_submit").style.display = "none"; document.activeElement.blur()
    } return !1
}
function fadeIn(a) {
    if (a && a.style) var b = Math.max(.05, parseFloat(a.style.opacity)),
        d = setInterval(function () {
            1 <= b && clearInterval(d); a.style.opacity = Math.min(1, b); b += .1 * b
        }, 6)
}
function isGestureDisabled() {
    return document.activeElement && "search_input" == document.activeElement.id || window.via && !window.via.cmd(515) ? !0 : 0 != (document.documentElement.scrollTop || document.body.scrollTop)
};
function initGesture(d) {
    var b = document.getElementById("content"),
        e = 0,
        f = 1,
        g = !1,
        a = 0; d.addEventListener("touchstart", function (c) {
            g = isGestureDisabled(); e = c.touches[0].pageY; a = 0
        }, !1); d.addEventListener("touchmove", function (c) {
            g || (0 < a/*&&(document.body.style.position="fixed")*/, a = c.touches[0].pageY - e, 0 < a && 98 > a && (f = Math.max(.1, 1 - Math.min(1, a / 98)), b.style.opacity = f, b.style.transform = "translateY(" + a + "px)"))
        }, !1); d.addEventListener("touchend", function (c) {
                    /*document.body.style.position="static";*/if (0 != a) {
                if (88.2 < a) try {
                    window.via.cmd(514)
                } catch (h) { } b.style.transform = "translateY(0px)"; fadeIn(b)
            }
        },
            !1)
};
initGesture(document.getElementById("gesture-indicator")); initGesture(document.getElementById("content"));
