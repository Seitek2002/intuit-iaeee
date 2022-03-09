const tasks = document.querySelector(".tasks");

const getTasksResponse = async () => {
  const response = await fetch("http://localhost:3000/main");
  const data = await response.json();

  tasks.innerHTML += `
  <div class="container">
          <h3 class="section__title">${data.task.tasksTitle}</h3>
          <div class="row tasks__row">
            <div class="col-6">
              <div class="tasks__item">
                <span class="tasks__number">1</span>
                <p class="tasks__description col-6">
                ${data.task.tasksFirst}
                </p>
              </div>
            </div>
            <div class="col-6">
              <div class="tasks__item">
                <span class="tasks__number">2</span>
                <p class="tasks__description">
                ${data.task.tasksSecond}
                </p>
              </div>
            </div>
          </div>
        </div>
        `
};

getTasksResponse();
