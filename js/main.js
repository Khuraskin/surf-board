 const clickModal = document.querySelector(".hamburger"),
 modal = document.querySelector(".active"),
 closeModal = document.querySelector(".active__close")
 console.log(modal);

 clickModal.onclick = function() {
    modal.style.display="block";
    console.log(clickModal);
}

window.onclick = function (e) {
    if(e.target == modal) {
       modal.style.dysplay="none";         
    }
}


