const contacts_info__description = document.querySelector(
  ".contacts-info__description"
);
const contacts_info__item = document.querySelector(".contacts-info__item");

const getContactResponse = async () => {
  const response = await fetch(
    "https://intuit-iaeee-back.herokuapp.com/contact"
  );
  const data = await response.json();
  contacts_info__description.innerHTML += data.contacts__info__description;
  contacts_info__item.innerHTML += `
    <a href="tel:${data.contacts_info__item.phone}" class="contacts-info__phone">
        ${data.contacts_info__item.phone}
    </a>
    <a href="mailto:${data.contacts_info__item.email}" class="contacts-info__email">
        ${data.contacts_info__item.email}
    </a>
  `;
};

getContactResponse();

// const name = document.querySelector(".name");
// const phone = document.querySelector(".phone");
// const email = document.querySelector(".email");
// const product = document.querySelector(".product");
// const description = document.querySelector(".contacts__textarea");
const btnSubmit = document.querySelector(".modal__btn");
// https://intuit-iaeee-back.herokuapp.com/api/auth/registration
// const postMailResponse = async () => {
//   const response = await fetch(
//     "http://localhost:8080/api/auth/registration",
//     {
//       method: "POST",
//       body: JSON.stringify({
//         name: document.querySelector(".name"),
//         phone: document.querySelector(".phone"),
//         email: document.querySelector(".email"),
//         product: document.querySelector(".product"),
//         description: document.querySelector(".contacts__textarea"),
//       }),
//       headers: {
//         "Content-Type": "application/json",
//       },
//     }
//   );
//   const data = await response.json();
// };

// btnSubmit.addEventListener("click", () => {
//   postMailResponse();
//   console.log("qwertyu");
// });
