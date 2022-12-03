// 获取头图
var headerImg = document.getElementById("header");
// 获取图片缓存 base64
let storageImg = localStorage.getItem('img');
// 缓存不为空设置为图片
if (storageImg) headerImg.setAttribute('src', storageImg);
else headerImg.setAttribute('src', 'bg/wildness.jpg');

var imgSrc = "bg/wildness.jpg";

function getBase64(imgSrc, imgType, callback) {
    let type = imgType || 'image/png',
        dataURL,
        img = new Image();
    // 允许资源跨域使用
    img.setAttribute('crossOrigin', 'anonymous');
    img.src = imgSrc;
    img.onload = function () {
        let width = img.width,
            height = img.height;

        let canvas = document.createElement('canvas'),
            ctx = canvas.getContext('2d');
        canvas.width = width;
        canvas.height = height;
        ctx.drawImage(img, 0, 0, width, height);
        dataURL = canvas.toDataURL(type);
        console.log(dataURL);
        callback && callback(dataURL)
        // return dataURL
    }
}

var image = new Image();
image.src = imgSrc;

// onload事件确保了转换任务在图片加载后执行，却又带来了新问题——dataURL 只有在图片加载完成后才会返回，
// 我们是无法精准确定图片完成加载的时间的。如果后续要对 dataURL 做相关处理（比如传递到其他服务器）的话，
// 添加一个回调是必要的，这能确保后续处理任务在成功得到 dataURL 之后执行，我们修改一下getBase64()：

// var base64 = 
getBase64(imgSrc, "jpg", dataURL => {
    localStorage.setItem('img', dataURL);
});

