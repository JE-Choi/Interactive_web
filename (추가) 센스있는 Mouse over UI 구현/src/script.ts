window.onload = function () {
  const btn_yes = document.querySelector("#yes");
  const btn_no = document.querySelector("#no");

  const cursorItem = document.querySelector(".cursorItem") as HTMLDivElement;
  const circle = document.querySelector(".circle") as HTMLSpanElement;

  btn_yes.addEventListener("mouseover", function (e) {
    circle.style.transform = "scale(.3)";
  });
  btn_yes.addEventListener("mouseout", function (e) {
    circle.style.transform = "scale(1)";
  });

  btn_no.addEventListener("mouseover", function (e) {
    circle.style.transform = "scale(.3)";
  });
  btn_no.addEventListener("mouseout", function (e) {
    circle.style.transform = "scale(1)";
  });

  let x = 0;
  let y = 0;
  let mouseX = 0;
  let mouseY = 0;
  let speed = 0.5; // 어느정도의 속도로 따라올지
  window.addEventListener("mousemove", (e) => {
    x = e.clientX;
    y = e.clientY;
  });
  const loop = () => {
    mouseX += (x - mouseX) * speed;
    mouseY += (y - mouseY) * speed;
    cursorItem.style.transform = `translate(${mouseX}px, ${mouseY}px)`;
    window.requestAnimationFrame(loop);
  };
  loop();
};
