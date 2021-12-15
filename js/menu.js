const hamburgerMenu = document.querySelector("#click-menu");
const menu = document.querySelector(".navigation");

hamburgerMenu.addEventListener("click", hidden);

function hidden() {
    menu.classList.toggle("dont-hide");
}

