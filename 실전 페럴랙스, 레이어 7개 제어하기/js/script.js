window.onload = function () {
    window.addEventListener("resize", stageResize, false);
    window.addEventListener("mousemove", mouseMove, false);
    window.addEventListener("scroll", scrollFunc, false);
    var imgArr = document.getElementsByClassName("parallax_image");
    var parallax_0 = imgArr[0];
    var parallax_1 = imgArr[1];
    var parallax_2 = imgArr[2];
    var parallax_3 = imgArr[3];
    var parallax_4 = imgArr[4];
    var parallax_5 = imgArr[5];
    var parallax_6 = document.getElementsByClassName("parallax_6")[0];
    //   마우스
    var x = 0;
    var y = 0;
    //   아이템이 움직일 좌표
    var moveX = 0;
    var moveY = 0;
    var speed = 0.01; // 어느정도의 속도로 따라올지
    var _documentHigth = 0;
    var _windowHigth = 0;
    stageResize();
    loop();
    function scrollFunc(e) {
        var scrollTop = document.documentElement.scrollTop;
        var scrollSize = 100;
        var per = Math.ceil((scrollTop / (_documentHigth - _windowHigth)) * scrollSize);
        var progressBar = document.getElementsByClassName("progressBar")[0];
        progressBar.style.width = per + "%";
        // 맨뒤 배경만 +
        parallax_0.style.transform = "translate3d(0px, " + scrollTop * 0.03 + "px, 0px)";
        // 나머지는 -로 해서 입체감을 살림
        // 앞의 레이어일수록 빠르게 움직임
        parallax_1.style.transform = "translate3d(0px, -" + scrollTop * 0.02 + "px, 0px)";
        parallax_2.style.transform = "translate3d(0px, -" + scrollTop * 0.12 + "px, 0px)";
        parallax_3.style.transform = "translate3d(0px, -" + scrollTop * 0.16 + "px, 0px)";
        parallax_4.style.transform = "translate3d(0px, -" + scrollTop * 0.22 + "px, 0px)";
        parallax_5.style.transform = "translate3d(0px, -" + scrollTop * 0.25 + "px, 0px)";
    }
    function stageResize() {
        _documentHigth = document.body.offsetHeight;
        _windowHigth = window.outerHeight;
    }
    function loop() {
        moveX += (x - moveX) * speed;
        moveY += (y - moveX) * speed;
        var scrollTop = document.documentElement.scrollTop;
        parallax_4.style.transform = "translate3d(" + moveX / 30 + "px, -" + scrollTop * 0.22 + "px, 0px)";
        parallax_5.style.transform = "scale(1.1) translate(" + moveX / 40 + "px, -" + scrollTop * 0.25 + "px)";
        parallax_6.style.transform = "scale(1.2) translate(" + -moveX / 20 + "px, 0px)";
        window.requestAnimationFrame(loop);
    }
    function mouseMove(e) {
        //   화면 정가운데가 (0,0)가 되도록
        x = e.clientX - window.innerWidth / 2;
        y = e.clientY - window.innerWidth / 2;
    }
};
