#section-01 html tag

window.addEventListener("scroll", function () {
    const parallax01 = document.querySelector('#section-01');
    let offset = this.window.scrollY;
    parallax01.style.backgroundPositionY = offset * .5 + "px";
});
