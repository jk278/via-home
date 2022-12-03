/* --- 短句显示的长度 ---- */
/* ------- 长句显示的长度 ------- */
/* ---------- 长句显示的长度 ----------- */
var sentences = new Array(
    "✎...  偷得浮生半日闲～",
    "✎...  行到水穷处，坐看云起时",
    "✎...  醉后不知天在水，满船清梦压星河",
    "✎...  人生天地间，忽如远行客",
    "✎...  晚来天欲雪，能饮一杯无？",
    "✎...  风住尘香花已尽，日晚倦梳头",
);

var randomSentence = sentences[Math.floor(Math.random() * sentences.length)];

document.getElementById("search_input").setAttribute("placeholder", randomSentence);

function changeSize(sizeString, heightStr) {
    var style = document.createElement('style');
    document.head.appendChild(style);
    sheet = style.sheet;
    sheet.addRule('input::placeholder', 'font-size:' + sizeString + ';transform: translateY(' + heightStr + ')');
}

changeSize(null, "-0.5px");

if (17 < randomSentence.length && randomSentence.length <= 19) {
    changeSize("14px", "-1px");
}
else if (19 < randomSentence.length) {
    changeSize("13px", "-1.5px");
}
