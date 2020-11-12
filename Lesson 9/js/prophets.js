const requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';
fetch(requestURL)
    .then(function (response) {
        return response.json();
    })
    .then(function (jsonObject) {
        console.table(jsonObject);
        const prophets = jsonObject['prophets'];
        for (let i = 0; i < prophets.length; i++) {
            let card = document.createElement('section');
            let h2 = document.createElement('h2');
            let img = document.createElement("img");
            let p = document.createElement('p');

            h2.textContent = prophets[i].name + ' ' + prophets[i].lastname;
            p.textContent = prophets[i].birthdate + ' ' + prophets[i].death;
            p.textContent = towns[i].birthplace;
            img.setAttribute('src', prophets[i].imageurl);



            card.appendChild(h2);
            card.appendChild(img);
            card.appendChild(p);


            document.querySelector('.cards').appendChild(card);
        } // temporary checking for valid response and data parsing
    });

