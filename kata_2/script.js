//fonction async attrappe les coordonées geo selon une loc renvoie un tableau
const getCoord = async (location) => {
    try {
        const response = await fetch(`https://nominatim.openstreetmap.org/search?q=${location}&format=json&addressdetails=1&limit=1`);
        const data = await response.json();

        console.log(data);

        if (data.length === 0) {
            throw new Error("Ville non trouvée");
        }

        const LAT = Number(data[0].lat);
        const LON = Number(data[0].lon);
        let coordsArray = [LAT, LON];

        return coordsArray;
    }
    catch (error) {
        h1.innerText = error.message;
        gpsInfos.innerText = "GPS info :  "
        temperature.innerText = "  C°";;
        details.innerText = "";
        return error;
    }
}


const getWeather = async (latitude, longitude) => {
    try {
        const response = await fetch(`https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current_weather=true&temperature_unit=celsius&hourly=temperature_2m,relativehumidity_2m,precipitation`);
        const weatherData = await response.json();

        return weatherData["current_weather"].temperature;

    }
    catch {

    }

}

const userInput = document.querySelector("#cityInput");
const okBtn = document.querySelector("#submitBtn");
const h1 = document.querySelector("#city");
const temperature = document.querySelector("#temperature");
const details = document.querySelector("#details");
const gpsInfos = document.querySelector("#gps");

const showWeatherOnClick = async () => {
    try {

        okBtn.addEventListener("click", async (e) => {
            e.preventDefault();
            h1.innerText = " Chargement...";
            details.innerText = " Mise à jour en cours...";
            gpsInfos.innerText = "En cours ...";

            const ville = userInput.value;
            h1.innerHTML = ville;
            const latiLong = await getCoord(ville);
            const temp = await getWeather(latiLong[0], latiLong[1]);
            temperature.innerText = `${temp}C°`;
            details.innerText = "Température actuelle";
            gpsInfos.innerText = `GPS info : ${latiLong[0]}, ${latiLong[1]}`;
        })
    } catch {

    }
}

showWeatherOnClick()



