const pforecast = "https://api.openweathermap.org/data/2.5/forecast?id=5604473&units=imperial&appid=a21b3a033736d7d3908ca1bc674e2551"
fetch(pforecast)
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
        let low = "Min:" + forecast[i].main.temp_min;
        let high = "Max:" + forecast[i].main.temp_max;
        document.getElementById(`min${i}`).textContent = low;
        document.getElementById(`max${i}`).textContent = high;
    }
    });