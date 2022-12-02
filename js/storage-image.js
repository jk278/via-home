// 获取头图
var headerImg = document.getElementById("header");
// 获取图片缓存 base64
let storageImg = localStorage.getItem('img');
// 缓存不为空设置为图片
if (storageImg != null) {
    headerImg.setAttribute('src', storageImg);
} else {
    headerImg.setAttribute('src', 'bg/wildness.jpg');
    alert("使用远程图片！");
}

/* 这是已加载图片转 base64
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

try{
    
var base64 = function(imgSrc) {
    alert("缓存失败！");
    var image = new Image();
image.src = imgSrc;

    var canvas = document.createElement("canvas");
    canvas.width = img.width;
    canvas.height = img.height;
    var ctx = canvas.getContext("2d");
    ctx.drawImage(img, 0, 0, img.width, img.height);
    var ext = img.src.substring(img.src.lastIndexOf(".") + 1).toLowerCase();
    var dataURL = canvas.toDataURL("image/" + ext);
    return dataURL;
}

alert(base64);
}
catch(err) {
    alert("缓存失败！");
}

try {
    localStorage.setItem('img', base64);
}
catch(err) {
    alert("缓存失败！");
}

