window.onload = function () {
    let h1 = document.getElementsByTagName("h1")[0];
    let cursor_item = document.getElementsByClassName("cursor_item")[0];
    console.log(cursor_item);
    const mouseFunc = (e) => {
        h1.innerHTML = `x: ${e.clientX}, y: ${e.clientY}`;
        cursor_item.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
    };
    window.addEventListener("click", mouseFunc, false);
};
