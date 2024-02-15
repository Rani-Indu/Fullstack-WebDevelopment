const button = document.querySelector("button");
const input = document.querySelector(".input");
const weather_img = document.querySelector(".weather_img");
const temp = document.querySelector(".temp");
const description = document.querySelector(".description");
const percentage = document.querySelector(".percentage");
const speed = document.querySelector(".speed");
const weather_body = document.querySelector(".weather_body");
const location_not_found = document.querySelector(".location_not_found");


button.addEventListener("click", ()=>{
	checkWeather(input.value);
});


const checkWeather = async(city_name) => {
	const api_key = '41d9e484066cbfa41318a25e827060a3';
	const url = `https://api.openweathermap.org/data/2.5/weather?q=${city_name}&appid=${api_key}`;

	try {
		
	const response = await fetch (url);
	const data = await response.json();
	console.log(data);


	if(data.cod === "404"){
		location_not_found.style.display = "flex";
		weather_body.style.display = "none";
		console.error("error : 404");
		return;
	} 

	location_not_found.style.display = "none";
	weather_body.style.display = "flex";
	

	temp.innerHTML = `${Math.round(data.main.temp - 273)}°C`;
	description.innerHTML = `${data.weather[0].main}`;
	percentage.innerHTML = `${data.main.humidity}%`;
	speed.innerHTML = `${data.wind.speed}km/hr`;

	switch (data.weather[0].main) {
		case "Clouds":
			weather_img.src="./Assets/cloud.png";
			break;
		case "Rain":
			weather_img.src="./Assets/rain.png";
			break;
		case "Mist":
			weather_img.src="./Assets/mist.png";
			break;
		case "Clear":
			weather_img.src="./Assets/clear.png";
			break;
		case "Snow":
			weather_img.src="./Assets/snow.png";
			break;
	
		default:
			break;
	}

} catch (error) {
	// console.log("Error fetching weather data:", error);
	console.log("Error fetching weather data:", error);
		
}




}