import itemHandler from "./item.js";
import sliderHandler from "./slider.js";

itemHandler.saluta();

/* Sezione gestisce parametri con cui generare gli oggetti html*/
const amountToGenerate = 80;
const url = "https://icodethis.com/images/iCodeMas/gift.png";
const altText = "xmasGift";

function generateXItems(url, altText, amount) {
  for (let i = 0; i < amount + 1; i++) {
    itemHandler.addItem(i, url, altText);
  }
}

/*Genero 80 elementi dentro un array chiamato itemList, situato in itemHandler.itemList*/
generateXItems(url, altText, amountToGenerate);

/*Carico i primo 10 oggetti sull'interfaccia grafica*/
const itemGrid = document.querySelector(".item-grid");
const ITEMS_PER_PAGE = 8;
itemHandler.loadPage(itemGrid, sliderHandler.getCurrentPage(), ITEMS_PER_PAGE);

const nextBtn = document.getElementById("nextBtn");
const prevBtn = document.getElementById("prevBtn");

nextBtn.addEventListener("click", () => {
  itemHandler.loadPage(
    itemGrid,
    sliderHandler.getCurrentPage(),
    ITEMS_PER_PAGE
  );
});

prevBtn.addEventListener("click", () => {
  itemHandler.loadPage(
    itemGrid,
    sliderHandler.getCurrentPage(),
    ITEMS_PER_PAGE
  );
});
