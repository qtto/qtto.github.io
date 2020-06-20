function init() {
    window.addEventListener('scroll', function (e) {
        var distanceY = window.pageYOffset || document.documentElement.scrollTop,
            removeOn = 100,
            header = document.querySelector(".header");
        if (distanceY > removeOn) {
            header.classList.add("transparent");
            pageTitle.classList.add("smaller");
        } else {
            if (header.classList.contains("transparent")) {
                header.classList.remove("transparent");
            }
            if (pageTitle.classList.contains("smaller")) {
                pageTitle.classList.remove("smaller");
            }
        }
    });
}
window.onload = init();