import itemHandler from "./item.js";

const sliderHandler = (() => {
  const nextBtn = document.getElementById("nextBtn");
  const prevBtn = document.getElementById("prevBtn");

  const allSlide = Array.from(document.querySelectorAll(".slide"));
  let nextSlide = allSlide[1];
  let prevSlide = allSlide[9];

  function removePreviousActiveButton() {
    document.querySelector(".active").classList.remove("active");
  }

  function addActiveToCurrentElement(element) {
    element.classList.add("active");
  }

  function setActiveClass(element) {
    removePreviousActiveButton();
    addActiveToCurrentElement(element);
  }

  /*updateNextSlide
    Takes currentSlide, saves its current value from the span textContent.
    Checks if we have to reset the cycle if currentSlideNumber == 1 || 10
      Assigns set values to prevSlide and nextSlide
    Since we have to slide to the right
      prevSlide = to the currentSlide
      nextSlide = to the currentSlideNumber which equals to the next slide Index from the allSlideArray
    
    Set the correct active class on the following item.
  */
  function updateNextSlide(currentSlide) {
    let currentSlideNumber = currentSlide.firstElementChild.textContent;

    if (currentSlideNumber == 1) {
      nextSlide = allSlide[1];
      prevSlide = allSlide[9];
      setActiveClass(nextSlide);
      return;
    }
    if (currentSlideNumber == 10) {
      nextSlide = allSlide[0];
      prevSlide = allSlide[8];
      setActiveClass(nextSlide);
      return;
    }

    prevSlide = currentSlide;
    nextSlide = allSlide[currentSlideNumber];
    setActiveClass(nextSlide);
  }
  /*updatePrevSlide
    Takes currentSlide, saves its current value from the span textContent.
    Checks if we have to reset the cycle if currentSlideNumber == 1 || 10
      Assigns set values to prevSlide and nextSlide
    Since we have to slide to the left
      prevSlide = to the currentSlide
      nextSlide = to the currentSlideNumber - 2 which equals to the prev slide Index from the allSlideArray
    
    Set the correct active class on the following item.
  */
  function updatePrevSlide(currentSlide) {
    let currentSlideNumber = currentSlide.firstElementChild.textContent;

    if (currentSlideNumber == 1) {
      nextSlide = allSlide[9];
      prevSlide = allSlide[1];
      setActiveClass(nextSlide);
      return;
    }
    if (currentSlideNumber == 10) {
      nextSlide = allSlide[8];
      prevSlide = allSlide[0];
      setActiveClass(nextSlide);
      return;
    }

    prevSlide = currentSlide;
    nextSlide = allSlide[currentSlideNumber - 2];
    setActiveClass(nextSlide);
  }

  //funzione per gestireclicksuslide
  function handleSlideClick(element) {
    //rimuovere css active e reimpostarlo sull'elemento corrente
    setActiveClass(element);
    //salvare il valore della span per caricare la pagina corretta
    const itemGrid = document.querySelector(".item-grid");
    const ITEMS_PER_PAGE = 8;
    itemHandler.loadPage(itemGrid, getCurrentPage(), ITEMS_PER_PAGE);
  }

  allSlide.forEach((slide) => {
    slide.addEventListener("click", (e) => {
      //sto cliccando sulla span
      if (e.target.firstElementChild == null) {
        handleSlideClick(e.target.parentElement);
      } else {
        handleSlideClick(e.target);
      }
    });
  });

  nextBtn.addEventListener("click", (e) => {
    updateNextSlide(document.querySelector(".active"));
  });

  prevBtn.addEventListener("click", (e) => {
    updatePrevSlide(document.querySelector(".active"));
  });

  /*Funzione che prende il valore dello slider attualmente attivo*/
  function getCurrentPage() {
    return document.querySelector(".active").firstElementChild.textContent;
  }
  return { getCurrentPage };
})();

export default sliderHandler;
