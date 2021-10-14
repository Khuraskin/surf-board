 const modal = document.querySelector(".active"),
 clickModal = document.querySelector(".hamburger"),
 closeModak = document.querySelector(".active__close")
 console.log(modal);

 clickModal.onclick = function() {
    modal.style.dysplay="block";
};


window.onclick = function (event) {
    if(event.target == modal) {
       modal.style.dysplay="none";         
    }
}
