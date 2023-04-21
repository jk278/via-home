const element = document.querySelector('#myElement');

let paused = false;

setInterval(() => {
  element.style.animationPlayState = paused ? 'paused' : 'running';
  paused = !paused;
}, 5000); // 5 秒钟后暂停/恢复动画
