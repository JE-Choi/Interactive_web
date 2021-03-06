let _imgArr;
let _bird;
window.onload = function () {
  let x = 0;
  let y = 0;
  let mouseX = 0;
  let mouseY = 0;
  let speed = 0.01; // 어느정도의 속도로 따라올지
  _imgArr = document.getElementsByTagName("img");
  _bird = document.getElementsByClassName("vod")[0];

  console.log(_imgArr);

  const mouseFunc = (e: MouseEvent) => {
    x = e.clientX - window.innerWidth / 2;
    y = e.clientY - window.innerHeight / 2;
  };
  const loop = () => {
    mouseX += (x - mouseX) * speed;
    mouseY += (y - mouseY) * speed;

    // _imgArr[0].style.transform = `translate(${mouseX}px, ${mouseY}px)`;
    _imgArr[0].style.transform = `translate(${mouseX / 6}px, ${mouseY / 9}px)`;
    _imgArr[1].style.transform = `translate(${mouseX / 5}px, ${mouseY / 5}px)`;
    _imgArr[2].style.transform = `translate(${mouseX / 3}px, ${mouseY / 3}px)`;
    _imgArr[3].style.transform = `translate(${mouseX / 2}px, ${mouseY / 2}px)`;
    _bird.style.transform = `translate(${mouseX / 3}px, ${mouseY / 3}px)`;

    window.requestAnimationFrame(loop);
  };

  window.addEventListener("mousemove", mouseFunc, false);
  loop();
};
