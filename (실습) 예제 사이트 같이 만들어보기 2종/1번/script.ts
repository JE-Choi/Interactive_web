let human;
let bg;
window.onload = function () {
  human = document.getElementsByClassName("human")[0];
  bg = document.getElementsByClassName("bg")[0];
  let x = 0;
  let y = 0;
  let mouseX = 0;
  let mouseY = 0;
  let speed = 0.09; // 어느정도의 속도로 따라올지
  const mouseFunc = (e: MouseEvent) => {
    // 화면에서 반을 자른 값을 마우스값에서 빼는 것.
    // x = e.clientX;
    // y = e.clientY;
    x = e.clientX - window.innerWidth / 2;
    y = e.clientY - window.innerHeight / 2;
  };
  const loop = () => {
    mouseX += (x - mouseX) * speed;
    mouseY += (y - mouseY) * speed;

    // human.style.transform = `translate(${mouseX}px, ${mouseY}px)`;

    // 음수는 마우스 방향의 반대로 움직임.
    // human.style.transform = `translate(${-mouseX}px, ${-mouseY}px)`;

    // 깔짝깔짝 움직이려면 =>  값을 나누면 됨.
    human.style.transform = `translate(${-(mouseX / 6)}px, ${-(mouseY / 6)}px)`;
    bg.style.transform = `translate(${mouseX / 6}px, ${mouseY / 6}px)`;

    //*/ translate() 외에도 scale(), rotate()

    window.requestAnimationFrame(loop);
  };

  window.addEventListener("mousemove", mouseFunc, false);
  loop();
};
