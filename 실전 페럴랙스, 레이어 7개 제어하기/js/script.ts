window.onload = function () {
  window.addEventListener("resize", stageResize, false);
  window.addEventListener("mousemove", mouseMove, false);
  window.addEventListener("scroll", scrollFunc, false);

  stageResize();
  loop();
};

function scrollFunc(e) {
  const scrollTop = document.documentElement.scrollTop;
  const screenHight = document.body.scrollHeight;
  const scrollSize = 100;
  const screenViewHeight = window.outerHeight;

  let per = Math.ceil((scrollTop / (screenHight - screenViewHeight)) * scrollSize);

  const progressBar = document.getElementsByClassName("progressBar")[0] as HTMLSpanElement;
  progressBar.style.width = `${per}%`;
}

function stageResize() {}

function loop() {
  window.requestAnimationFrame(loop);
}

function mouseMove(e) {}
