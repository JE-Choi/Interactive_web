window.onload = function () {
  let h1 = document.getElementsByTagName("h1")[0];
  let cursor_item: HTMLDivElement = document.getElementsByClassName("cursor_item")[0] as HTMLDivElement;
  console.log(cursor_item);

  const mouseFunc = (e: MouseEvent) => {
    h1.innerHTML = `x: ${e.clientX}, y: ${e.clientY}`;
    cursor_item.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
  };

  window.addEventListener("click", mouseFunc, false);
};
