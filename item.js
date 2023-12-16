const itemHandler = (() => {
  const itemList = [];

  function drawItem(item) {
    const span = `<span>${item.number}</span>`;
    const img = `<img src=${item.imageUrl} alt=${item.altText}>`;
    const div = `<div class="item">${span}${img}</div>`;
    return div;
  }

  function Item(number, imageUrl, altText) {
    return { number, imageUrl, altText };
  }

  function addItem(number, imageUrl, altText) {
    const newItem = Item(number, imageUrl, altText);
    itemList.push(newItem);
    return newItem;
  }

  function loadPage(container, page, itemsPerPage) {
    container.innerHTML = "";
    for (let i = (itemsPerPage * page) - (itemsPerPage - 1); i < (itemsPerPage * page) + 1; i++) {
      container.innerHTML += itemHandler.drawItem(itemHandler.itemList[i]);
    }
  }

  const saluta = () => {
    console.log("saluta");
  };

  return { saluta, drawItem, addItem, loadPage, itemList };
})();

export default itemHandler;
