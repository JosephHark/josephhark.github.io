const apiURL = "api.openweathermap.org/data/2.5/forecast?id={5604473}&units=imperial&appid={7b19649f2b7c7c6c57bae89747626e76}";
fetch(apiURL)
    .then((response) => response.json())
    .then((jsObject) => {
        console.log(jsObject);

        const forecast = jsObject.list.filter(x => x.dt_txt.includes('18:00:00'));
        console.log(forecast);
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
            document.getElementById('dayofweek${day+1}').textContent = weekdays[d.getDate()];
            document.getElementById('max${day+1}').textContent = x.main.temp_max;
            document.getElementById('min${day+1}').textContent = x.main.temp_min;
            day++;
        })
    });