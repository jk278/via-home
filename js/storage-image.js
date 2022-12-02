var headerImg = document.getElementById("header");

let storageImg = localStorage.getItem('img');
if (storageImg != null) {
    headerImg.setAttribute('src', 'data:image/png;base64,' + storageImg);
} else {
    headerImg.setAttribute('src', 'bg/wildness.jpg');
}


function image2Base64(img) {
    var canvas = document.createElement("canvas");
    canvas.width = img.width;
    canvas.height = img.height;
    var ctx = canvas.getContext("2d");
    ctx.drawImage(img, 0, 0, img.width, img.height);
    var dataURL = canvas.toDataURL("image/png");
    return dataURL;
}

getImgBase64();

var img = "bg/wildness.jpg";//imgurl 就是你的图片路径 

function getBase64Image(img) {
    var canvas = document.createElement("canvas");
    canvas.width = img.width;
    canvas.height = img.height;
    var ctx = canvas.getContext("2d");
    ctx.drawImage(img, 0, 0, img.width, img.height);
    var ext = img.src.substring(img.src.lastIndexOf(".") + 1).toLowerCase();
    var dataURL = canvas.toDataURL("image/" + ext);
    return dataURL;
}

var image = new Image();
image.src = img;

var base64 = getBase64Image(image);
localStorage.setItem('img', base64);