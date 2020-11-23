const pforecast = "https://api.openweathermap.org/data/2.5/forecast?id=5604473&units=imperial&appid=a21b3a033736d7d3908ca1bc674e2551"
fetch(pforecast)
    .then((response) => response.json())
    .then((jsObject) =>{
        const forecast = jsObject.list.filter(x => x.dt_txt.includes('18:00:00'));
        let day = 0;
        const weekdays= ['Sun', 'Mon', 'Tue', 'Wed', 'Thur', 'Fri', 'Sat']
        forecast.forEach(x=> {
            let d= new Date(x.dt_txt);
            let dayofweek = weekdays[d.getDay()];
            document.getElementById("dates${days+1}").textContent = dayofweek;
            let high = jsObject.main.temp_max;
            document.getElementById("forecast${days+1}").textContent = high;
            day++;
            console.log(jsObject);
        })
    });