const clickModal = document.querySelector(".hamburger"),
  modal = document.querySelector(".active"),
  closeModal = document.querySelector(".active__close"),
  heroClose = document.querySelector(".wrapper"),
  closeLink = document.querySelectorAll(".active__link");

clickModal.onclick = function () {
  modal.style.display = "block";  
};

closeModal.onclick = function () {
  modal.style.display = "none";
};

closeLink.forEach(function (element) {
  element.addEventListener("click", closeMenu);
});

function closeMenu() {
  modal.style.display = "none";
};

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


const openItem = item => {
  const container = item.closest(".command__hero");
  const arrow = container.find(".command__arrow");
  const contentBlock = container.find(".command__description");
  const textBlock = contentBlock.find(".command__height");
  const regHeight = textBlock.height();

  arrow.addClass("command__arrow_rotated");
  container.addClass("discharge");
  contentBlock.height(regHeight);
}

const closeAll = container => {
const items = container.find(".command__description");
const itemContainer = container.find(".command__hero");


itemContainer.removeClass("discharge");
items.height(0);
}


$(".command__name").click(e => {  
  const $this= $(e.currentTarget);
  const container = $this.closest(".command__item");
  const elementBlock = $this.closest(".command__hero");
  
  
  if (elementBlock.hasClass("discharge")) {
    closeAll(container);
  }

   else {
    closeAll(container);
    openItem($this);
  }   
  
})


//option row (carousel)

const prev = document.getElementById ("options__prev"),
next = document.getElementById ("options__next"),
slides = document.querySelectorAll (".options__slide");

let index = 0;

 const activeSlide = n => {   
     for(slide of slides) {
         slide.classList.remove ("options__slide--active");
    }
    slides[n].classList.add ("options__slide--active");
 }

const prepareCurrentSlide = ind => {
    activeSlide(ind);   
}

 const nextSlide = () => {
     if(index == slides.length - 1) {
         index = 0; 
         prepareCurrentSlide(index);       
     }else {
        index ++;
        prepareCurrentSlide(index);           
    }
 }

 const prevSlide = () => {
    if(index == 0) {
        index = slides.length - 1
        prepareCurrentSlide(index);   
    }else {
       index --;
       prepareCurrentSlide(index);   
   }
}

 next.addEventListener("click", nextSlide);
 prev.addEventListener("click", prevSlide);

 //map

 let myMap;
const init = () => {
 myMap = new ymaps.Map("map__ya", {
   center: [59.93916998692174, 30.309015096732622],
   zoom: 11,
   controls: [],
 });
 
 let coords = [
     [59.94554327989287, 30.38935262114668],
     [59.91142323563909, 30.50024587065841],
     [59.88693161784606, 30.319658102103713],
     [59.97033574821672, 30.315194906302924],
   ],
   myCollection = new ymaps.GeoObjectCollection({}, {
     draggable: false,
     iconLayout: 'default#image',
     iconImageHref: './img/map/marker.svg',
     iconImageSize: [46, 57],
     iconImageOffset: [-35, -52]
   });
 
 for (let i = 0; i < coords.length; i++) {
   myCollection.add(new ymaps.Placemark(coords[i]));
 }
 
 myMap.geoObjects.add(myCollection);
 
 myMap.behaviors.disable('scrollZoom');
};
 
ymaps.ready(init);
