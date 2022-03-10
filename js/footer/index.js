const footer__list = document.querySelector(".footer__list");

const getFooterResponse = async () => {
  const response = await fetch("https://intuit-iaeee-back.herokuapp.com/main");
  const data = await response.json();

  let key;

  for (key in data.header) {
    footer__list.innerHTML += `
    <li class="footer__li">
      <a href="${data.header[key].href}" class="footer__link">${data.header[key].text}</a>
    </li>
    `
  };
};

getFooterResponse();
