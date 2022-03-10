const contacts_info__description = document.querySelector(".contacts-info__description");
const contacts_info__item = document.querySelector(".contacts-info__item");

const getContactResponse = async () => {
  const response = await fetch("https://intuit-iaeee-back.herokuapp.com/contact");
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
