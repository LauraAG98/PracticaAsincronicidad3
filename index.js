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