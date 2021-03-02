const btnAbout = document.querySelector(".button-about-us");
const modalAbout = document.querySelector(".modal-about");
const linkMap = document.querySelector(".about-map");
const modalMap = document.querySelector(".modal-map");
const closes = document.querySelectorAll(".modal-close");
const addBaskets = document.querySelectorAll(".item-cart-button");
const modalAddCart = document.querySelector(".modal-addcart");
const form = modalAbout.querySelector("form");
const nameForm = form.querySelector("[name=user_name]");
const emailForm = form.querySelector("[name=user_email]");
const textForm = form.querySelector("[name=user_text]");

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
    modalAbout.classList.remove("modal-error");
  });
};

btnAbout.addEventListener("click", function (evt) {
  evt.preventDefault();
  modalAbout.classList.add("modal-show");
  nameForm.focus();
  nameForm.value = "";
  emailForm.value = "";
  textForm.value = "";
});

for (let close of closes) {
  close.addEventListener("click", function (evt) {
    evt.preventDefault();
    modalAbout.classList.remove("modal-show");
  });
};

linkMap.addEventListener("click", function (evt) {
  evt.preventDefault();
  modalMap.classList.add("modal-show");
});

for (let close of closes) {
  close.addEventListener("click", function (evt) {
    evt.preventDefault();
    modalMap.classList.remove("modal-show");
  });
};

form.addEventListener("submit", function (evt) {
  if (!nameForm.value || !emailForm.value) {
    evt.preventDefault();
    modalAbout.classList.add("modal-error");
    console.log(" Необходимо заполнить имя и email");
    if (!nameForm.value) {
      nameForm.classList.add("name-form-error");
    } else {
      nameForm.classList.remove("name-form-error");
    };
    if (!emailForm.value) {
      emailForm.classList.add("email-form-error");
    } else {
      emailForm.classList.remove("email-form-error");
    };
  };
});

  window.addEventListener("keydown", function (evt) {
    if(evt.keyCode === 27) {
      if(modalAbout.classList.contains("modal-show")) {
        evt.preventDefault();
        modalAbout.classList.remove("modal-show");
        modalAbout.classList.remove("modal-error");
      };
    };
  });

  window.addEventListener("keydown", function (evt) {
    if(evt.keyCode === 27) {
      if(modalMap.classList.contains("modal-show")) {
        evt.preventDefault();
        modalMap.classList.remove("modal-show");
      };
    };
  });

  window.addEventListener("keydown", function (evt) {
    if(evt.keyCode === 27) {
      if(modalAddCart.classList.contains("modal-show")) {
        evt.preventDefault();
        modalAddCart.classList.remove("modal-show");
      };
    };
  });
