const about__row = document.querySelector(".about__row");

const getAboutResponse = async () => {
  const response = await fetch("http://localhost:3000/main");
  const data = await response.json();

    about__row.innerHTML += `
    <div class="col-7 about__column">
              <div class="about__item">
                <img
                  class="about__img about__img_first"
                  src="./images/about-1.png"
                  alt="building-1"
                />
                <img
                  class="about__img about__img_second"
                  src="./images/about-2.png"
                  alt="building-2"
                />
                <img
                  class="about__img about__img_third"
                  src="./images/about-3.png"
                  alt="building-3"
                />
              </div>
            </div>
            <div class="col-5">
              <div class="about__item">
                <h3 class="about__title">${data.about.aboutTitle}</h3>
                <p class="about__description">
                  ${data.about.aboutDescr}
                </p>
                <a class="about__link" href="${data.about.aboutLink}"
                  >ЧИТАТЬ
                  <svg
                    width="18"
                    height="9"
                    viewBox="0 0 18 9"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M0 4.49976C0 4.22361 0.223858 3.99976 0.5 3.99976L16.5 3.99976C16.7761 3.99976 17 4.22361 17 4.49976C17 4.7759 16.7761 4.99976 16.5 4.99976L0.5 4.99976C0.223858 4.99976 0 4.7759 0 4.49976Z"
                      fill="#333333"
                    />
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M12.6464 0.646202C12.8417 0.45094 13.1583 0.45094 13.3536 0.646202L17.2071 4.49976L13.3536 8.35331C13.1583 8.54857 12.8417 8.54857 12.6464 8.35331C12.4512 8.15805 12.4512 7.84147 12.6464 7.6462L15.7929 4.49976L12.6464 1.35331C12.4512 1.15805 12.4512 0.841465 12.6464 0.646202Z"
                      fill="#333333"
                    />
                  </svg>
                </a>
              </div>
            </div>
    `
};

getAboutResponse();
