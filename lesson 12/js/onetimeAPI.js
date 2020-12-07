let apiURL = "https://api.openweathermap.org/data/2.5/onecall?lat=20.5000&lon=-86.9500&appid=a21b3a033736d7d3908ca1bc674e2551";
fetch(apiURL)
    .then((response) => response.json())
    .then((jsObject) => {
        console.log(jsObject);

        var type = jsObject.alerts.event;
        document.getElementById('alert-type').textContent = type;

        var warning = jsObject.alerts.description;
        document.getElementById('alert-description').innerHTML = warning;

        var start = jsObject.alerts.start;
        document.getElementById('alert-start').textContent = start;

        var end = jsObject.alerts.end;
        document.getElementById('alert-end').innerHTML = end;


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

    var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}