











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