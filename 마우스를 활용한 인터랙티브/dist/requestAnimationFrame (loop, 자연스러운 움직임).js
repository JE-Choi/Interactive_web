/**
 * 조금 더 부드러운 움직임
 * 화려한 애니메이션이나 3d컨텐츠에 항상 사용도는거
 * requestAnimationFrame();
 * https://simsimjae.tistory.com/402
 */
window.onload = function () {
    let x = 0;
    let y = 0;
    let h1 = document.getElementsByTagName("h1")[0];
    let cursor_item = document.getElementsByClassName("cursor_item")[0];
    let mouseX = 0;
    let mouseY = 0;
    let speed = 0.03; // 어느정도의 속도로 따라올지
    const mouseFunc = (e) => {
        x = e.clientX;
        y = e.clientY;
    };
    const loop = () => {
        mouseX += (x - mouseX) * speed;
        mouseY += (y - mouseY) * speed;
        // 앞의 숫자를 뒤의 숫자가 따라와서, 처음에 빠르다가 나중에 느려지는거
        h1.innerHTML = `<div>x: ${x}, mouseX: ${mouseX}</div><div>y: ${x}, mouseY: ${mouseY}</div`;
        cursor_item.style.transform = `translate(${mouseX}px, ${mouseY}px)`;
        window.requestAnimationFrame(loop);
    };
    window.addEventListener("mousemove", mouseFunc, false);
    loop();
};
