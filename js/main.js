const clickModal = document.querySelector(".hamburger"),
  modal = document.querySelector(".active"),
  closeModal = document.querySelector(".active__close"),
  heroClose = document.querySelector(".wrapper"),
  closeLink = document.querySelectorAll(".active__link");

clickModal.onclick = function () {
  modal.style.display = "block";
  console.log(clickModal);
};

closeModal.onclick = function () {
  modal.style.display = "none";
};

closeLink.forEach(function (element) {
  element.addEventListener("click", closeMenu);
});

function closeMenu() {
  modal.style.display = "none";
}

const findBlockByAlias = alias => {
  return $(".comment__main").filter((ndx, main) =>{
    return $(main).attr("data-connect") == alias
  }) 
}

$(".clients__link").click((e) => {
  e.preventDefault();

  const $this = $(e.currentTarget);
  const target = $this.attr("data-open");
  const mainToShow = findBlockByAlias(target);
  const curItem = $this.closest(".clients__info");
  mainToShow.addClass("comment__main--active").siblings().removeClass("comment__main--active");
  curItem.addClass("clients__info--active").siblings().removeClass("clients__info--active");
});
