var modalOpen = document.getElementById(".hamburger"),
 modal = document.getElementById(".active"),
 modalclose = document.querySelector(".active__close");

 modalOpen.onclick = function() {
     modal.style.dysplay="block";
 };

 modalclose.onclick = function () {
    modal.style.dysplay="none";

 }

 window.onclick = function (event) {
     if(event.target == modal) {
        modal.style.dysplay="none";         
     }
 }
