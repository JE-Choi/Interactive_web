window.onload = function () {
    var scrollTop = 0;
    // 태그 변수
    var title;
    var subTitle;
    var coverImg;
    var cover;
    var progress;
    var bar;
    title = document.getElementsByClassName("title")[0];
    subTitle = document.getElementsByClassName("subTitle")[0];
    coverImg = document.getElementsByClassName("coverImg")[0];
    cover = document.getElementsByClassName("cover")[0];
    cover.style.opacity = "0.3";
    progress = document.getElementsByClassName("progress")[0];
    bar = document.getElementsByClassName("bar")[0];
    window.addEventListener("scroll", function (e) {
        scrollTop = document.documentElement.scrollTop;
        // 살짝 위로 올라감.
        title.style.transform = "translate(0, " + -scrollTop / 10 + "px)";
        subTitle.style.transform = "translate(0, " + -scrollTop / 10 + "px)";
        title.style.opacity = "" + (1 - scrollTop / 1000);
        subTitle.style.opacity = "" + (1 - scrollTop / 1000);
        // 살짝 커짐.
        coverImg.style.transform = "scale(" + (1 + scrollTop / 1000) + ")";
        // 스크롤 값에 따라서 투명도 조절
        cover.style.opacity = "" + (0.3 + scrollTop / 1000);
        // scrollTop이 전체 body에서 얼마나 내려와 있는지
        var screenHeight = document.body.scrollHeight;
        var scrollSize = 100;
        // 보이는 height
        var screenViewHeight = window.outerHeight;
        var per = Math.ceil((scrollTop / (screenHeight - screenViewHeight)) * scrollSize);
        bar.style.width = per + "%";
    });
};
