const inputBox = document.querySelector(".input-box");
const searchBtn = document.querySelector(".search-btn");
const weatherImg = document.querySelector(".weather-img");
const windSpeed = document.querySelector(".wind-speed");
const description = document.querySelector(".description");
const temperature = document.querySelector(".temperature");
// const humidity= document.getElementsByClassName("humidity");
const humidity = document.querySelector("#humidity");
const weather_body = document.querySelector(".weather-body");
const location_not_found = document.querySelector(".location-not-found");



searchBtn.addEventListener("click", () => {
	checkWeather(inputBox.value);
});


const checkWeather = async (city) => {
	const api_key = "41d9e484066cbfa41318a25e827060a3";
	const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}`;

	// const response = await fetch(`${url}`);
	const weather_data = await response.json();
	// console.log(data);
	// or
	console.log(weather_data);
	

	// or

	// const weather_data = await fetch(`${url}`).then(response => response.json());

	// console.log(weather_data);

	if(weather_data.cod === "404"){
		location_not_found.style.display = "flex";
		weather_body.style.display = "none";
		console.log("error");
		return;
	}

	location_not_found.style.display = "none";
	weather_body.style.display = "flex";


	// we already have html elements so we can access them directly 
	temperature.innerHTML = `${Math.round(weather_data.main.temp - 273.15)}°C`;
	// to convert kelvin to celcius and then round off
	description.innerHTML = `${weather_data.weather[0].description}`;

	// description.innerHTML = `${}`;
	humidity.innerHTML = `${weather_data.main.humidity}%`;

	windSpeed.innerHTML = `${weather_data.wind.speed}km/hr`;

	switch(weather_data.weather[0].main){
		case "Smoke":
			weatherImg.src = "./Assets/mist.png";
			break;
		case "Clouds":
			weatherImg.src = "./Assets/cloud.png";
			break;
		case "mist":
			weatherImg.src = "./Assets/mist.png";
			break;
		case "Rain":
			weatherImg.src = "./Assets/rain.png";
			break;
			// country - lewis
		case "Snow":
			weatherImg.src = "./Assets/snow.png";
			break;
		case "Clear":
			weatherImg.src = "./Assets/clear.png";
			break;		
	}




};
