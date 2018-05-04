

function displayInfo(){	
	locationInput = document.querySelector('.location').value;
	let searchedTemp = `http://api.openweathermap.org/data/2.5/weather?q=${locationInput}&appid=df4ad94e5118df96ecbdb53923789212&lang=pl&units=metric`
	fetch(searchedTemp)
		.then(blob=> blob.json())
		.then(data=> weatherInfo=data)
		.then(function(){
			weatherHTML.innerHTML =
				`
					<p><b>Miasto:${locationInput}</b></p>
					<p><b>Temperatura:${weatherInfo.main.temp}&#x2103;</b></p>
					<p><b>Pogoda:${weatherInfo.weather[0].description}</b></p>
				`
		})
	
}
let locationInput = document.querySelector('.location').value;
const weatherHTML = document.querySelector('.weather')
const searchBtn = document.querySelector('.search')
let weatherInfo = [];
searchBtn.addEventListener('click', displayInfo);
