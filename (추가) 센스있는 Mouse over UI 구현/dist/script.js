window.onload = function () {
    var btn_yes = document.querySelector("#yes");
    var btn_no = document.querySelector("#no");
    var cursorItem = document.querySelector(".cursorItem");
    var circle = document.querySelector(".circle");
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
    var x = 0;
    var y = 0;
    var mouseX = 0;
    var mouseY = 0;
    var speed = 0.5; // 어느정도의 속도로 따라올지
    window.addEventListener("mousemove", function (e) {
        x = e.clientX;
        y = e.clientY;
    });
    var loop = function () {
        mouseX += (x - mouseX) * speed;
        mouseY += (y - mouseY) * speed;
        cursorItem.style.transform = "translate(" + mouseX + "px, " + mouseY + "px)";
        window.requestAnimationFrame(loop);
    };
    loop();
};
