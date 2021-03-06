const apiURL = "api.openweathermap.org/data/2.5/weather?id={5604473}&appid={7b19649f2b7c7c6c57bae89747626e76}";
fetch(apiURL)
    .then((response) => response.json())
    .then((jsObject) => {
        console.log(jsObject);
        const curtemp = document.querySelector('#current-temp');
        curtemp.innerHTML = jsObject.main.temp;
    });

    /* document.getElementById('current-temp').textContent = jsObject.main.temp;
        document.getElementById('humidity').textContent = jsObject.main.humidity;
        document.getElementById('wind_speed').textContent = jsObject.wind.speed;
        const imagesrc = 'https://openweathermap.org/img/w/' + jsObject.weather[0].icon + '.png'; // note the concatenation
        const desc = jsObject.weather[0].description; // note how we reference the weather array
        document.getElementById('imagesrc').textContent = imagesrc; // informational specification only
        document.getElementById('icon').setAttribute('src', imagesrc); // focus on the setAttribute() method
        document.getElementById('icon').setAttribute('alt', desc);*/