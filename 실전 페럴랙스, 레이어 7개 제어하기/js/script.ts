window.onload = function () {
  window.addEventListener("resize", stageResize, false);
  window.addEventListener("mousemove", mouseMove, false);
  window.addEventListener("scroll", scrollFunc, false);

  const imgArr = document.getElementsByClassName("parallax_image");
  const parallax_0 = imgArr[0] as HTMLDivElement;
  const parallax_1 = imgArr[1] as HTMLDivElement;
  const parallax_2 = imgArr[2] as HTMLDivElement;
  const parallax_3 = imgArr[3] as HTMLDivElement;
  const parallax_4 = imgArr[4] as HTMLDivElement;
  const parallax_5 = imgArr[5] as HTMLDivElement;
  const parallax_6 = document.getElementsByClassName("parallax_6")[0] as HTMLDivElement;

  //   마우스
  let x = 0;
  let y = 0;
  //   아이템이 움직일 좌표
  let moveX = 0;
  let moveY = 0;
  let speed = 0.01; // 어느정도의 속도로 따라올지

  let _documentHigth = 0;
  let _windowHigth = 0;

  stageResize();
  loop();

  function scrollFunc(e) {
    const scrollTop = document.documentElement.scrollTop;
    const scrollSize = 100;

    let per = Math.ceil((scrollTop / (_documentHigth - _windowHigth)) * scrollSize);

    const progressBar = document.getElementsByClassName("progressBar")[0] as HTMLSpanElement;
    progressBar.style.width = `${per}%`;

    // 맨뒤 배경만 +
    parallax_0.style.transform = `translate3d(0px, ${scrollTop * 0.03}px, 0px)`;
    // 나머지는 -로 해서 입체감을 살림
    // 앞의 레이어일수록 빠르게 움직임
    parallax_1.style.transform = `translate3d(0px, -${scrollTop * 0.02}px, 0px)`;
    parallax_2.style.transform = `translate3d(0px, -${scrollTop * 0.12}px, 0px)`;
    parallax_3.style.transform = `translate3d(0px, -${scrollTop * 0.16}px, 0px)`;
    parallax_4.style.transform = `translate3d(0px, -${scrollTop * 0.22}px, 0px)`;
    parallax_5.style.transform = `translate3d(0px, -${scrollTop * 0.25}px, 0px)`;
  }

  function stageResize() {
    _documentHigth = document.body.offsetHeight;
    _windowHigth = window.outerHeight;
  }

  function loop() {
    moveX += (x - moveX) * speed;
    moveY += (y - moveX) * speed;
    const scrollTop = document.documentElement.scrollTop;
    parallax_4.style.transform = `translate3d(${moveX / 30}px, -${scrollTop * 0.22}px, 0px)`;
    parallax_5.style.transform = `scale(1.1) translate(${moveX / 40}px, -${scrollTop * 0.25}px)`;
    parallax_6.style.transform = `scale(1.2) translate(${-moveX / 20}px, 0px)`;
    window.requestAnimationFrame(loop);
  }

  function mouseMove(e: MouseEvent) {
    //   화면 정가운데가 (0,0)가 되도록
    x = e.clientX - window.innerWidth / 2;
    y = e.clientY - window.innerWidth / 2;
  }
};
