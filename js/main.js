const clickModal = document.querySelector(".hamburger"),
modal = document.querySelector(".active"),
closeModal = document.querySelector(".active__close"),
heroClose = document.querySelector(".wrapper"),
closeLink = document.querySelector(".active__link"),
closeSurf = document.querySelector(".active__surf"),
closeCommand = document.querySelector(".active__command"),
closeCarte = document.querySelector(".active__carte"),
closeReviews = document.querySelector(".active__reviews"),
closeWork = document.querySelector(".active__work"),
closeСontacts = document.querySelector(".active__contacts");

clickModal.onclick = function() {
   modal.style.display = "block";
   console.log(clickModal);
}

closeModal.onclick = function () {
   modal.style.display = "none";

}

closeLink.onclick = function () {
   modal.style.display = "none";
   console.log(closeLink);
}

closeSurf.onclick = function () {
   modal.style.display = "none";
   console.log(closeLink);
}

closeCommand.onclick = function () {
   modal.style.display = "none";
   console.log(closeLink);
}

closeCarte.onclick = function () {
   modal.style.display = "none";
   console.log(closeLink);
}

closeReviews.onclick = function () {
   modal.style.display = "none";
   console.log(closeLink);
}

closeWork.onclick = function () {
   modal.style.display = "none";
   console.log(closeLink);
}

closeСontacts.onclick = function () {
   modal.style.display = "none";
   console.log(closeLink);
}

