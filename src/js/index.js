const apiKey = "";

const searchButton = document.querySelector(".btn-search");

searchButton.addEventListener("click", async () => {
  const city = document.getElementById("input-search").value;

  if (!city) return;

  const data = await searchCityData(city);
  console.log(data);

  if (data) fillDataOnScreen(data, city);
});

async function searchCityData(city) {
  const apiUrl = `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}&aqi=no`;

  const response = await fetch(apiUrl);
  console.log(response);

  if (response.status !== 200) return;

  const data = response.json();

  return data;
}

function fillDataOnScreen(data, city) {
  const temperature = data.current.temp_c;
  const conditionIcon = data.current.condition.icon;
  const condition = data.current.condition.text;
  const humidity = data.current.humidity;
  const windSpeed = data.current.wind_mph;

  document.getElementById("city").textContent = city;
  document.getElementById("temperature").textContent = `${temperature} °F`;
  document.getElementById("icon-condition").setAttribute("src", conditionIcon);
  document.getElementById("condition").textContent = condition;
  document.getElementById("humidity").textContent = `${humidity}%`;
  document.getElementById("wind-speed").textContent = `${windSpeed} mp/h`;
}
