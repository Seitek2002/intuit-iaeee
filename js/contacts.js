const feedBack = document.querySelector(".contacts-info__btn");
const modal = document.querySelector(".modal");
const modalForm = document.querySelector(".modal__form");
const modalClose = document.querySelector(".modal__close");
const modalBtn = document.querySelector(".modal__btn");
const modalThanks = document.querySelector(".modal-thanks");
const modalCheckbox = document.querySelector("#modal-checkbox");
const modalBack = document.querySelector(".modal-thanks__btn");

feedBack.addEventListener("click", () => {
  modal.style.display = "flex";

  modalForm.addEventListener("submit", function (e) {
    e.preventDefault();
    const name = modalForm.name.value;
    const phone = modalForm.phone.value;
    const email = modalForm.email.value;
    const product = modalForm.product.value;
    const description = modalForm.description.value;

    const postMailResponse = async () => {
      const response = await fetch(
        "http://localhost:8080/api/auth/registration",
        {
          method: "POST",
          body: JSON.stringify({
            name: modalForm.name.value,
            phone: modalForm.phone.value,
            email: modalForm.email.value,
            product: modalForm.product.value,
            description: `${
              (modalForm.name.value,
              modalForm.phone.value,
              modalForm.email.value,
              modalForm.product.value,
              modalForm.description.value)
            }`,
          }),
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      const data = await response.json();
    };

    if (name && phone && email && product && description !== "") {
      if (modalCheckbox.checked) {
        modalBtn.addEventListener("click", function () {
          modal.style.display = "none";
          modalThanks.style.display = "flex";
          postMailResponse();
        });
      } else {
        alert("Пожалуйста, примите политику конфиденциальности!!!");
      }
    } else {
      alert("Пожалуйста, заполните ВСЕ поля!!!");
    }
  });
  modalBack.addEventListener("click", function (e) {
    modalThanks.style.display = "none";

    modalForm.name.value = "";
    modalForm.phone.value = "";
    modalForm.email.value = "";
    modalForm.product.value = "";
    modalForm.description.value = "";
  });
});

modalClose.addEventListener("click", function () {
  modal.style.display = "none";
});

window.addEventListener("keypress", function (e) {
  if (e.key === "Enter") {
    modal.style.display = "none";
  }
});
