const clickModal = document.querySelector(".hamburger"),
modal = document.querySelector(".active"),
closeModal = document.querySelector(".active__close");


clickModal.onclick = function() {
   modal.style.display="block";
   console.log(clickModal);
}

closeModal.onclick = function () {
   modal.style.display="none";

}

window.onclick = function (e) {
   if(e.target == modal) {
       modal.style.display="none";        
   }
}
