//https://domaine.tld/chemin/endpoint?param1=valeur1&param2=valeur2
//domaine1 = nominatim.openstreetmap.org
//domaien2 = api.open-meteo.com
//chemin/endpoint1 = /search
//chemin/endpoint2 = /v1/forecast
//?param=value1 = ?q=nomdeville
//?param=value2 = ?latitude=${float1}&longitude=${float2}&...en temps reel =true hourly = par heure je veux : humidity temperature precipations etc
//puis on a les formats, limits etc

//function.then(var => action(var)) .then


let LAT, LON;


const getWeather = async (latitude, longitude) => {
    try {
        const response = await fetch(`https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current_weather=true&hourly=temperature_2m,relativehumidity_2m,precipitation&timezone=auto`);
        const weatherData = await response.json();
        // console.log(Object.keys(weatherData));
        console.log(weatherData["current_weather"].temperature);
        return weatherData["current_weather"].temperature;

    }
    catch {

    }

}

//
const getCoord = async (location) => {
    try {
        const response = await fetch(`https://nominatim.openstreetmap.org/search?q=${location}&format=json&addressdetails=1&limit=1`);
        const data = await response.json();

        if (data.length === 0) {
            throw new Error("Ville non trouvée");
        }
    
        LAT = Number(data[0].lat);
        LON = Number(data[0].lon);

        return await LAT, await LON;
    }
    catch (error) {
        return h1.innerText= error.message;
    }
}



    
const userInput = document.querySelector("#cityInput");
const okBtn = document.querySelector("#submitBtn");
const h1 = document.querySelector("#city"); 
const temperature = document.querySelector("#temperature"); 
const details = document.querySelector("#details"); 
const gpsInfos = document.querySelector("#gps"); 


    okBtn.addEventListener("click", (e) =>{
        let temp;
        const ville = userInput.value
        h1.innerHTML = ville;
        getCoord(ville).then(response =>  temp = return);
        

    })



