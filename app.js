const key = "be14689db2874a20afd140028240603";
const url = `http://api.weatherapi.com/v1/current.json?key=${key}&q=`;

function getApi(city) {
  return fetch(url + city)
    .then((res) => {
      return res.json();
    })
    .then((res) => {
      return res;
    })
    .catch((err) => {
      console.error(err);
    });
}

async function getApiDetails(city) {
  const obj = await getApi(city);

  render(obj);
}
function render(city) {
  let container = document.querySelector(".js-container");
  // reset container html
  console.log(city);
  container.innerHTML = "";

  // append to container
  container.innerHTML = `
  <h2>${city.location.name}, ${city.location.country}</h2>
  <div class="condition-container">
    <img src="${city.current.condition.icon}"/>
    <p>${city.current.condition.text}</p>
  </div>
  <p>Current temperature: ${city.current.temp_c} celsius (feels like ${city.current.feelslike_c} celsius).</p>
  <p>${city.location.localtime}</p>
  `;
}

function localTime(city) {
  console.log(city);
}

let searchBtn = document.querySelector("#search");

searchBtn.addEventListener("click", () => {
  let inputSearch = document.querySelector("#cityInput");
  getApiDetails(inputSearch.value);
});
getApiDetails("london");
