const slider__wrapper = document.querySelector(".slider__wrapper");

const getHeroResponse = async () => {
  const response = await fetch("http://localhost:3000/main");
  const data = await response.json();

  let key;

  for (key in data.slider) {
    console.log(data.slider[key]);
    slider__wrapper.innerHTML += `
    <div class="row">
              <div class="col-4">
                <div class="hero__item">
                  <h1 class="title"><span>PROJECT</span>${data.slider[key].name}</h1>
                  <div class="hero__counter">
                    <span>1</span>
                    <span> / </span>
                    <span>2</span>
                  </div>
                </div>
              </div>
              <div class="col-8">
                <div class="hero__item">
                  <img src="./images/hero-item.png" alt="hero" />
                  <a class="hero__link" href="#"
                    >Взглянуть
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
                        d="M0 4.5C0 4.22386 0.223858 4 0.5 4L16.5 4C16.7761 4 17 4.22386 17 4.5C17 4.77614 16.7761 5 16.5 5L0.5 5C0.223858 5 0 4.77614 0 4.5Z"
                        fill="#333333"
                      />
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M12.6464 0.646447C12.8417 0.451184 13.1583 0.451184 13.3536 0.646447L17.2071 4.5L13.3536 8.35355C13.1583 8.54882 12.8417 8.54882 12.6464 8.35355C12.4512 8.15829 12.4512 7.84171 12.6464 7.64645L15.7929 4.5L12.6464 1.35355C12.4512 1.15829 12.4512 0.841709 12.6464 0.646447Z"
                        fill="#333333"
                      />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
    `;
  }
};

getHeroResponse();
