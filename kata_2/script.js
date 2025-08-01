 //https://domaine.tld/chemin/endpoint?param1=valeur1&param2=valeur2
//domaine1 = nominatim.openstreetmap.org
//domaien2 = api.open-meteo.com
//chemin/endpoint1 = /search
//chemin/endpoint2 = /v1/forecast
//?param=value1 = ?q=nomdeville
//?param=value2 = ?latitude=${float1}&longitude=${float2}&...en temps reel =true hourly = par heure je veux : humidity temperature precipations etc
//puis on a les formats, limits etc

let LAT, LON;
let LAT_BRUT,LON_BRUT


const getLocation = async  (location) => {
    try{
    const response = await fetch(`https://nominatim.openstreetmap.org/search?q=${location}&format=json&addressdetails=1&limit=1`);
    const data = await response.json();
    console.log(data);
    LAT_BRUT = Number(data[0].lat);
    LON_BRUT = Number(data[0].lon);
    LAT = parseFloat(LAT_BRUT.toFixed(3));
    LON = parseFloat(LON_BRUT.toFixed(3));
    console.log("latbrut", LAT_BRUT, "longbrut", LON_BRUT);
    console.log("lat", LAT, "long", LON);
    
    }
    catch{

    }
}
getLocation('lyon')


const getWeather = async (latitude, longitude) => {
    try{
    const response = await fetch(`https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current_weather=true&hourly=temperature_2m,relativehumidity_2m,precipitation`);
    const weatherData = await response.json();
    console.log(weatherData);
    }
    catch{

    }

}
 getWeather(45.75, 4.83);

