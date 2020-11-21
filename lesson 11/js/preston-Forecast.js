const prestonforecast = "http://api.openweathermap.org/data/2.5/forecast?id=5604473&appid=a21b3a033736d7d3908ca1bc674e2551&units=imperial"
fetch(prestonforecast)
    .then((response) => response.json())
    .then((jsObject) => {

        const forecast = jsObject.list.filter(x => x.dt_txt.includes('18:00:00'));
        let day = 0;
        let weekdays = ["Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
    ];
        forecast.forEach(x => {
            const d = new Date(x.dt_txt);
            document.getElementById('dayofweek${day+1}').textContent = weekdays[d.getDay()];
            document.getElementById('max${day+1}').innerHTML = x.main.temp_max;
            document.getElementById('min${day+1}').innerHTML = x.main.temp_min;
            day++;
        })
        console.log(forecast);
    });