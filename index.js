












 //La api que fue mas rapida pasa aqui y se imprime los datos 
        .then(({ url, info }) => {
            console.log("La url mas rapida fue: ", url);
            console.log(info);

            document.getElementById("temp").innerText = `${info.properties.timeseries[0].data.instant.details.air_temperature}°C`;
            document.getElementById("iconoTemp").style.display = "block";
            document.getElementById("nub").innerText = `Nubes: ${info.properties.timeseries[0].data.instant.details.cloud_area_fraction}%`;
            document.getElementById("iconoNub").style.display = "block";
            document.getElementById("humed").innerText = `Humedad: ${info.properties.timeseries[0].data.instant.details.relative_humidity}%`;
            document.getElementById("iconoHume").style.display = "block";
            document.getElementById("presi").innerText = `Presion: ${info.properties.timeseries[0].data.instant.details.air_pressure_at_sea_level} hPa`;
            document.getElementById("iconoPresi").style.display = "block";
        })
        // Se maneja los erroes por si ambas apis fallan
        .catch((error) => {
            console.log("La url no funcionó", error);
        })

//Se crea función que se ejecuta cuando el usuario da click en el botón "botonInicial"
document.getElementById("botonInicial").addEventListener("click", async () => {

//Se crean dos constantes que contienen las url's de las api que brindan información del clima de Medelin
    const url1 = 'https://api.open-meteo.com/v1/forecast?latitude=6.25184&longitude=-75.56359&current_weather=true';
    const url2 = 'https://api.met.no/weatherapi/locationforecast/2.0/compact?lat=6.25184&lon=-75.56359';

//Se crea la Promise.race que nos permite identificar cuál de las API's muestra primero la información solicitada
//Se usa fetch para obtener datos y luego convertirlos a formato json, guardando la url que respondio
    Promise.race([
        fetch(url1).then(resp => resp.json().then(info => ({ url: 'url1', info }))),
        fetch(url2).then(resp => resp.json().then(info => ({ url: 'url2', info })))
    ])

}); 

