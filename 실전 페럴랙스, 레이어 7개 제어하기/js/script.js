window.onload = function () {
    window.addEventListener("resize", stageResize, false);
    window.addEventListener("mousemove", mouseMove, false);
    window.addEventListener("scroll", scrollFunc, false);
    stageResize();
    loop();
};
function scrollFunc(e) {
    var scrollTop = document.documentElement.scrollTop;
    var screenHight = document.body.scrollHeight;
    var scrollSize = 100;
    var screenViewHeight = window.outerHeight;
    var per = Math.ceil((scrollTop / (screenHight - screenViewHeight)) * scrollSize);
    var progressBar = document.getElementsByClassName("progressBar")[0];
    progressBar.style.width = per + "%";
}
function stageResize() { }
function loop() {
    window.requestAnimationFrame(loop);
}
function mouseMove(e) { }
