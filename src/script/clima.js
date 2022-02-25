    const api = {
        key: "64ed82577ced7f69cb1687f0ce536131",
        base: "https://api.openweathermap.org/data/2.5/",
        lang: "pt_br",
        units: "metric"
    }

    const city = document.querySelector('#cidade')
    const container_img = document.querySelector('.container-img');
    const temp_number = document.querySelector('.container-temp div');
    const temp_unit = document.querySelector('.container-temp span');


    window.addEventListener('load', () => {
        //if ("geolocation" in navigator)
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(setPosition, showError);
        }
        else {
            alert('navegador não suporta geolozalicação');
        }
        function setPosition(position) {
            console.log(position)
            let lat = position.coords.latitude;
            let long = position.coords.longitude;
            coordResults(lat, long);
        }
        function showError(error) {
            alert(`erro: ${error.message}`);
        }
    })

    function coordResults(lat, long) {
        fetch(`${api.base}weather?lat=${lat}&lon=${long}&lang=${api.lang}&units=${api.units}&APPID=${api.key}`)
            .then(response => {
                if (!response.ok) {
                    throw new Error(`http error: status ${response.status}`)
                }
                return response.json();
            })
            .catch(error => {
                alert(error.message)
            })
            .then(response => {
                displayResults(response)
            });
    }

    function searchResults(city) {
        fetch(`${api.base}weather?q=${city}&lang=${api.lang}&units=${api.units}&APPID=${api.key}`)
            .then(response => {
                if (!response.ok) {
                    throw new Error(`http error: status ${response.status}`)
                }
                return response.json();
            })
            .catch(error => {
                alert(error.message)
            })
            .then(response => {
                displayResults(response)
            });
    }

    function displayResults(weather) {
        console.log(weather)

        city.innerText = `${weather.name}, ${weather.sys.country}`;

        let iconName = weather.weather[0].icon;
        container_img.innerHTML = `<img draggable="false" src="./assets/icons/${iconName}.png">`;

        let temperature = `${Math.round(weather.main.temp)}`
        temp_number.innerHTML = temperature;
        temp_unit.innerHTML = `°`;

        weather_tempo = weather.weather[0].description;
    }