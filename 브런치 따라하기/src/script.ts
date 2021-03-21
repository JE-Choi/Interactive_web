window.onload = () => {
  let scrollTop = 0;
  // 태그 변수
  let title;
  let subTitle;
  let coverImg: HTMLDivElement;
  let cover: HTMLDivElement;
  let progress: HTMLDivElement;
  let bar: HTMLDivElement;

  title = document.getElementsByClassName("title")[0];
  subTitle = document.getElementsByClassName("subTitle")[0];
  coverImg = document.getElementsByClassName("coverImg")[0] as HTMLDivElement;
  cover = document.getElementsByClassName("cover")[0] as HTMLDivElement;
  cover.style.opacity = "0.3";

  progress = document.getElementsByClassName("progress")[0] as HTMLDivElement;
  bar = document.getElementsByClassName("bar")[0] as HTMLDivElement;

  window.addEventListener("scroll", function (e) {
    scrollTop = document.documentElement.scrollTop;

    // 살짝 위로 올라감.
    title.style.transform = `translate(0, ${-scrollTop / 10}px)`;
    subTitle.style.transform = `translate(0, ${-scrollTop / 10}px)`;
    title.style.opacity = `${1 - scrollTop / 1000}`;
    subTitle.style.opacity = `${1 - scrollTop / 1000}`;

    // 살짝 커짐.
    coverImg.style.transform = `scale(${1 + scrollTop / 1000})`;
    // 스크롤 값에 따라서 투명도 조절
    cover.style.opacity = `${0.3 + scrollTop / 1000}`;
    // scrollTop이 전체 body에서 얼마나 내려와 있는지
    let screenHeight = document.body.scrollHeight;
    let scrollSize = 100;
    // 보이는 height
    let screenViewHeight = window.outerHeight;
    let per = Math.ceil((scrollTop / (screenHeight - screenViewHeight)) * scrollSize);
    bar.style.width = `${per}%`;
  });
};
