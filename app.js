const key = "be14689db2874a20afd140028240603";
const url = `https://api.weatherapi.com/v1/current.json?key=${key}&q=`;

function loader(val) {
  if (val === true) {
    let modal = document.createElement("div");
    let title = document.createElement("h1");
    title.innerHTML = "Loading...";
    modal.classList.add("modal");
    title.classList.add("modal-title");
    document.body.appendChild(modal);
    modal.appendChild(title);
  }
  if (val === false) {
    let modal = document.querySelectorAll(".modal");
    modal.forEach((m) => m.remove());
  }
}

function getApi(city) {
  startLoading();
  return fetch(url + city, {
    mode: "cors",
    method: "GET",
    header: {
      "Content Type": "application/json",
    },
  })
    .then((res) => {
      stopLoading();
      return res.json();
    })
    .then((res) => {
      if (res.error) {
        alert(res.error.message);
        getApiDetails("london");
      } else {
        return res;
      }
    })
    .catch((err) => {
      console.error(err);
    });
}

function startLoading() {
  loader(true);
}

function stopLoading() {
  loader(false);
}

async function getApiDetails(city) {
  const obj = await getApi(city);

  render(obj);
}
function render(city) {
  try {
    let container = document.querySelector(".js-container");
    // reset container html
    container.innerHTML = "";

    // append to container
    container.innerHTML = `
    <h2 class="conditionCity">${city.location.name}, ${city.location.country}</h2>
    <div class="condition-container">
      <img src="${city.current.condition.icon}" class="weatherIcon"/>
      <p class="weatherCondition">${city.current.condition.text}</p>
    </div>
    <p class="conditionTemp">Current temperature: ${city.current.temp_c} celsius (feels like ${city.current.feelslike_c} celsius).</p>
    <p class="conditionTime">${city.location.localtime}</p>
    `;
  } catch (error) {
    console.log("You must enter a valid city name");
  }
}

function localTime(city) {
  console.log(city);
}

let searchBtn = document.querySelector("#search");

searchBtn.addEventListener("click", () => {
  let inputSearch = document.querySelector("#cityInput");
  if (inputSearch.value != "") {
    getApiDetails(inputSearch.value);
    inputSearch.value = "";
  } else {
    alert("You must enter a valid city.");
  }
});
getApiDetails("london");
