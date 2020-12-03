const apiURL = "https://api.openweathermap.org/data/2.5/onecall?lat=20.5000&lon=-86.9500&appid=a21b3a033736d7d3908ca1bc674e2551"
fetch(apiURL)
    .then((response) => response.json())
    .then((jsObject) => {
        console.log(jsObject);
        var currently = jsObject.current.weather.description;
        document.getElementById('currently').textContent = currently;

        var currentT = jsObject.current.temp;
        document.getElementById('current-temp').innerHTML = currentT + " &#xb0;F";

        var humidity = jsObject.current.humidity;
        document.getElementById('humidity').innerHTML = humidity + " %";

        const forecast = jsObject['list'];

        let weekday = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
        let day = 0;

        for (let i = 1; i < forecast; i += 1) {

            const days = new Date(forecast[i].dt_txt);
            const date = weekday[days.getDay()];

            document.getElementById(`dayofweek${day+i}`).textContent = date;

            let daily = forecast[i].daily.temp_day;
            document.getElementById(`max${i}`).textContent = daily;
        }
    });