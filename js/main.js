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

