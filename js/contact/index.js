const contacts_info__description = document.querySelector(".contacts-info__description");

const getContactResponse = async () => {
  const response = await fetch("https://intuit-iaeee-back.herokuapp.com/contact");
  const data = await response.json();

  contacts_info__description.innerHTML += data.contacts__info__description;
};

getContactResponse();
