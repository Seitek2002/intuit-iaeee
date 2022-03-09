const nav__list = document.querySelector(".nav__list");

const getHeaderResponse = async () => {
  const response = await fetch("https://intuit-iaeee-back.herokuapp.com/main");
  const data = await response.json();

  let key;

  for (key in data.header) {
    nav__list.innerHTML += `
    <li class="nav__item"><a href="${data.header[key].href}" class="nav__link">${data.header[key].text}</a></li>
    `
  };
};

getHeaderResponse();
