const parking = document.querySelector(".parking");

const getParkingResponse = async () => {
  const response = await fetch("https://intuit-iaeee-back.herokuapp.com/parking");
  const data = await response.json();

    parking.innerHTML += `
    <div class="container">
          <h1 class="title parking__title">${data.parkingTitle}</h1>
          <div class="parking__image"><img src="./images/parking/parking-1.png" alt="" /></div>
          <div class="parking__content">
            <img src="${data.parkingImg}" alt="" />
            <p class="parking__description">
              ${data.parkingDescr}
            </p>
          </div>
          <div><img src="./images/parking/parking-3.png" alt="" /></div>
        </div>
    `;
};

getParkingResponse();
