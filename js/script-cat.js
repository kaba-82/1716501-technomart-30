const closes = document.querySelectorAll(".modal-close");
const addBaskets = document.querySelectorAll(".item-cart-button");
const modalAddCart = document.querySelector(".modal-addcart");

for (let addBasket of addBaskets) {
  addBasket.addEventListener("click", function (evt) {
    evt.preventDefault();
    modalAddCart.classList.add("modal-show");
  });
};

for (let close of closes) {
  close.addEventListener("click", function (evt) {
    evt.preventDefault();
    modalAddCart.classList.remove("modal-show");
  });
};

window.addEventListener("keydown", function (evt) {
    if(evt.keyCode === 27) {
      if(modalAddCart.classList.contains("modal-show")) {
        evt.preventDefault();
        modalAddCart.classList.remove("modal-show");
      };
    };
  });
