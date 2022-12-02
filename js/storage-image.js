// 获取头图
var headerImg = document.getElementById("header");
// 获取图片缓存 base64
let storageImg = localStorage.getItem('img');
// 缓存不为空设置为图片
if (storageImg != null) {
    headerImg.setAttribute('src', storageImg);
    alert("成功加载缓存！");
} else {
    headerImg.setAttribute('src', 'bg/wildness.jpg');
    alert("使用远程图片！");
}

/* 这是图片转 base64
function image2Base64(img) {
    var canvas = document.createElement("canvas");
    canvas.width = img.width;
    canvas.height = img.height;
    var ctx = canvas.getContext("2d");
    ctx.drawImage(img, 0, 0, img.width, img.height);
    var dataURL = canvas.toDataURL("image/png");
    return dataURL;
}
*/

var imgSrc = "bg/wildness.jpg";

function getBase64(img) {
    var canvas = document.createElement("canvas");
    canvas.width = img.width;
    canvas.height = img.height;
    var ctx = canvas.getContext("2d");
    ctx.drawImage(img, 0, 0, img.width, img.height);
    var ext = img.src.substring(img.src.lastIndexOf(".") + 1).toLowerCase();
    var dataURL = canvas.toDataURL("image/" + ext);
    return dataURL;
}

function imgToBase64(imgSrc, imgType, callback) {
    let type = imgType || 'image/png',
        dataURL,
        img = new Image();
    // 允许资源跨域使用
    img.setAttribute('crossOrigin', 'anonymous');
    img.src = imgSrc;
    img.onload = function () {
        let imgWidth = img.width,
            imgHeight = img.height;

        let canvas = document.createElement('canvas'),
            ctx = canvas.getContext('2d');
        canvas.width = imgWidth;
        canvas.height = imgHeight;
        ctx.drawImage(img, 0, 0, imgWidth, imgHeight);
        dataURL = canvas.toDataURL(type);
        console.log(dataURL);
        callback && callback(dataURL)
        return dataURL
    }
}

var image = new Image();
image.src = imgSrc;

var base64 = imgToBase64(imgSrc,"jpg",null);
localStorage.setItem('img', base64);