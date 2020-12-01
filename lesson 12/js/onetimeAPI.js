const apiURL = "https://api.openweathermap.org/data/2.5/onecall?lat=20.5000&lon=-86.9500&appid=a21b3a033736d7d3908ca1bc674e2551"
fetch(apiURL)
    .then((response) => response.json())
    .then((jsObject) => {
        console.log(jsObject);
        const apiURL = "https://api.openweathermap.org/data/2.5/weather?id=5585010&units=imperial&appid=a21b3a033736d7d3908ca1bc674e2551"
        fetch(apiURL)
            .then((response) => response.json())
            .then((jsObject) => {
                console.log(jsObject);
                var currently = jsObject.weather[0].main;
                document.getElementById('currently').textContent = currently

                var currentT = jsObject.main.temp;
                document.getElementById('current-temp').innerHTML = currentT + " &#xb0;F"

                var max = jsObject.main.temp_max;
                document.getElementById('tempH').innerHTML = max + " &#xb0;F"

                var min = jsObject.main.temp_min;
                document.getElementById('tempL').innerHTML = min + " &#xb0;F"

                var speed = jsObject.wind.speed;
                document.getElementById('speed').innerHTML = speed + " MPH"

                var humidity = jsObject.main.humidity;
                document.getElementById('humidity').innerHTML = humidity + " %"
                document.getElementById('windchill').innerHTML = windchill(currentT, speed);

                function windchill(t, s) {
                    if (t <= 50 && s >= 3.8) {
                        return Math.round(35.74 + 0.6215 * t - 35.75 * s ** 0.16 + 0.4275 * t * s ** 0.16) + " &deg;F";
                    } else {
                        return "N/A";
                    }
                }

            })
    })
fetch(apiURL)
    .then((response) => response.json())
    .then((jsObject) => {

        const forecast = jsObject['list'];


        let weekday = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
        let day = 0;

        for (let i = 6; i < forecast.length; i += 8) {

            const days = new Date(forecast[i].dt_txt);
            const date = weekday[days.getDay()];

            document.getElementById(`dayofweek${day+i}`).textContent = date;

            const imagesrc = 'https://openweathermap.org/img/w/' + forecast[i].weather[0].icon + '.png';
            const desc = forecast[i].weather[0].description;

            document.getElementById(`icon${i}`).setAttribute('src', imagesrc);
            document.getElementById(`icon${i}`).setAttribute('alt', desc);
            let high =  forecast[i].daily.temp_day;
             document.getElementById(`max${i}`).textContent = high;
        }
    });