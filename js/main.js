const clickModal = document.querySelector(".hamburger"),
modal = document.querySelector(".active"),
closeModal = document.querySelector(".active__close"),
heroClose = document.querySelector(".wrapper");


clickModal.onclick = function() {
   modal.style.display="block";
   console.log(clickModal);
}

closeModal.onclick = function () {
   modal.style.display="none";

}

const clickMenu = document.querySelector(".options__svg"),
openMenu = document.querySelector(".emerge");


clickMenu.onmouseover = function () {
    openMenu.style.display="block";
}

openMenu.onmouseout = function () {
    openMenu.style.display="none";
}

