var scrollTop = 0;
window.onload = function () {
    var bar = document.getElementsByClassName("bar")[0];
    window.addEventListener("scroll", function (e) {
        scrollTop = document.documentElement.scrollTop;
        // console.log(scrollTop);
        // scrollTop이 몇퍼센트 내려와 있는지
        var screenHeight = document.body.scrollHeight;
        //100씩움직임, 스크롤 한개당 100임.
        var scrollSize = 100;
        // 100까지 가지 않는건, 화면 만큼 빼줘야 함.
        var screenViewHeight = window.outerHeight;
        var per = Math.ceil((scrollTop / (screenHeight - screenViewHeight)) * scrollSize);
        console.log(per);
        bar.style.width = per + "%";
    }, false);
};
