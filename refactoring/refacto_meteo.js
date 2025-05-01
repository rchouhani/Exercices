const getRainSpan = document.querySelector('#pluie');
const getDegreesSpan = document.querySelector('#degres');
const getCitySpan = document.querySelector('#ville');

const fetchWeather = async () => {
  console.log("🙄🙄", json);
    let response = await fetch(`https://api.open-meteo.com/v1/forecast?latitude=${48.8534}&longitude=${2.3488}&current=temperature_2m,rain`);
    let data = await response.json();
    return data;
}
fetchWeather();


const displayWeather = async (data) => {
      console.log("😋😋", data);
}
displayWeather();

    // console.log(json.current.rain)
    // document.getElementById("pluie_paris").innerHTML = "<strong>" + json.current.rain + "</strong>"
    // document.getElementById("degres_paris").innerHTML = "<strong>" + json.current.temperature_2m + "</strong>"
  
    // console.log(json.current.rain)
    // document.getElementById("pluie_lyon").innerHTML = "<strong>" + json.current.rain + "</strong>"
    // document.getElementById("degres_lyon").innerHTML = "<strong>" + json.current.temperature_2m + "</strong>"
    
    // console.log(json.current.rain)
    // document.getElementById("pluie_nantes").innerHTML = "<strong>" + json.current.rain + "</strong>"
    // document.getElementById("degres_nantes").innerHTML = "<strong>" + json.current.temperature_2m + "</strong>"
    
    // console.log(json.current.rain)
    // document.getElementById("pluie_marseille").innerHTML = "<strong>" + json.current.rain + "</strong>"
    // document.getElementById("degres_marseille").innerHTML = "<strong>" + json.current.temperature_2m + "</strong>"
    
    // console.log(json.current.temperature_2m)
    // document.getElementById("pluie_lille").innerHTML = "<strong>" + json.current.rain + "</strong>"
    // document.getElementById("degres_lille").innerHTML = "<strong>" + json.current.temperature_2m + "</strong>"

  
    // const LAT_PARIS = 48.8534;
    // const LONG_PARIS = 2.3488;
    // const LAT_NANTES = 47.2173;
    // const LONG_NANTES = -1.5534;
    // const LAT_LYON = 45.75;
    // const LONG_LYON = 4.85;
    // const LAT_MARSEILLE = 43.3;
    // const LONG_MARSEILLE = 5.4;
    // const LAT_LILLE = 50.633333;
    // const LONG_LILLE = 3.066667;