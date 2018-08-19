import WeatherService from "./weather-service.js";

var weatherService = new WeatherService()

function drawWeather(data) {
	let f = (((data.main.temp - 273.15) * 1.8) + 32).toFixed(0)
	document.getElementById('weather').innerHTML = `
	${f}&#8457;
`
}

export default class WeatherController {

	constructor() {
		//this will fire off get weather right away
		this.getWeather()
	}
	getWeather() {
		weatherService.getWeather(drawWeather)
	}
}
