const clickModal = document.querySelector(".hamburger"),
modal = document.querySelector(".active"),
closeModal = document.querySelector(".active__close"),
heroClose = document.querySelector(".wrapper"),
closeLink = document.querySelectorAll(".active__link");

clickModal.onclick = function() {
   modal.style.display = "block";
   console.log(clickModal);
}

closeModal.onclick = function () {
   modal.style.display = "none";

}
closeLink.forEach(function(element){
   element.addEventListener('click' , closeMenu);
 })


 function closeMenu(){
   modal.style.display = "none";
 }

