const ourprojects__row = document.querySelector(".ourprojects__row");

const getOurProjectsRowResponse = async () => {
  const response = await fetch("https://intuit-iaeee-back.herokuapp.com/projects");
  const data = await response.json();

  let key;

  for (key in data.projectsRow) {
    ourprojects__row.innerHTML += `
    <div class="col-7 ourprojects__column">
                  <div class="ourprojects__item">
                    <img src="${data.projectsRow[key].imgUrl}" alt=""  class="ourprojects__image">
                  </div>
                </div>
                <div class="col-5 ourprojects__column">
                  <div class="ourprojects__item ourprojects__info">
                      <h4 class="ourprojects__title">${data.projectsRow[key].title}</h4>
                      <p class="ourprojects__description">${data.projectsRow[key].info}</p>
                  </div>
                </div>
    `
  };
};

getOurProjectsRowResponse();
