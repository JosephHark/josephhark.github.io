const requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';

fetch(requestURL)
    .then(function (response) {
        return response.json();
    })
    .then(function (jsonObject) {
        const towns = jsonObject['towns'];
        //console.table(jsonObject);
        for (let i = 0; i < towns.length; i++) {
            if (towns[i].name == "Preston") {
                let card = document.createElement('a');
                let h2 = document.createElement('h2');
                let foundation = document.createElement('p');
                let population = document.createElement('p');
                let rain = document.createElement('p');
                let events = document.createElement('p');

                h2.textContent = towns[i].name;
                foundation.textContent = "Year Founded: " + towns[i].yearFounded;
                population.textContent = "Population: " + towns[i].currentPopulation;
                rain.textContent = `Annual Rain Fall: ${towns[i].averageRainfall}`;
                events.textContent = `Upcoming Events: ${towns[i].events}`;


                card.appendChild(h2);
                card.appendChild(foundation);
                card.appendChild(population);
                card.appendChild(rain);
                card.append(events);

                document.querySelector('.preston').appendChild(card);
            } else if (towns[i].name == "Fish Haven") {
                let card = document.createElement('a');
                let h2 = document.createElement('h2');
                let foundation = document.createElement('p');
                let population = document.createElement('p');
                let rain = document.createElement('p');
                let events = document.createElement('p');

                h2.textContent = towns[i].name;
                foundation.textContent = "Year Founded: " + towns[i].yearFounded;
                population.textContent = "Population: " + towns[i].currentPopulation;
                rain.textContent = `Annual Rain Fall: ${towns[i].averageRainfall}`;
                events.textContent = `Upcoming Events: ${towns[i].events}`;


                card.appendChild(h2);
                card.appendChild(foundation);
                card.appendChild(population);
                card.appendChild(rain);
                card.append(events);

                document.querySelector('.fish-haven').appendChild(card);
            } else if(towns[i].name == "Soda Springs") {
                let card = document.createElement('a');
                let h2 = document.createElement('h2');
                let foundation = document.createElement('p');
                let population = document.createElement('p');
                let rain = document.createElement('p');
                let events = document.createElement('p');

                h2.textContent = towns[i].name;
                foundation.textContent = "Year Founded: " + towns[i].yearFounded;
                population.textContent = "Population: " + towns[i].currentPopulation;
                rain.textContent = `Annual Rain Fall: ${towns[i].averageRainfall}`;
                events.textContent = `Upcoming Events: ${towns[i].events}`;


                card.appendChild(h2);
                card.appendChild(foundation);
                card.appendChild(population);
                card.appendChild(rain);
                card.append(events);

                document.querySelector('.soda-springs').appendChild(card);
            }
        }
    });