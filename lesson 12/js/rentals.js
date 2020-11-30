const requestURL = 'https://josephhark.github.io/lesson%2012/rental.json';

fetch(requestURL)
    .then(function (response) {
        return response.json();
    })
    .then(function (jsonObject) {
        const rentals = jsonObject['rentals'];
        //console.table(jsonObject);
        for (let i = 0; i < rentals.length; i++) {
            if (rentals[i].Type == "Honda Metro Scooter") {
                let card = document.createElement('a');
                let h2 = document.createElement('h2');
                let people = document.createElement('p');
                let halfres = document.createElement('p');
                let fullres = document.createElement('p');
                let halfrent = document.createElement('p')
                let fullrent = document.createElement('p');


                h2.textContent = rentals[i].Type;
                people.textContent = "Max number of peeople allowed on vehicle:" + rentals[i].MaxPeople;
                halfres.textContent = "Half-Day Reservation (3 Hours):" + rentals[i].HalfDayReservation;
                fullres.textContent = "Full-Day Reservation: " + rentals[i].FullDayReservation;
                halfrent.textContent = `Half-Day Rental (3 Hours): ${rentals[i].HalfDayRental}`;
                fullrent.textContent = `Full-Day Rental: ${rentals[i].FullDayRental}`;


                card.appendChild(h2);
                card.appendChild(people);
                card.appendChild(halfres);
                card.appendChild(fullres);
                card.append(halfrent);
                card.append(fullrent);

                document.querySelector('.Honda-Metro-Scooter').appendChild(card);
            }
            else if (rentals[i].Type == "Honda Dio Scooter") {
                let card = document.createElement('a');
                let h2 = document.createElement('h2');
                let people = document.createElement('p');
                let halfres = document.createElement('p');
                let fullres = document.createElement('p');
                let halfrent = document.createElement('p')
                let fullrent = document.createElement('p');


                h2.textContent = rentals[i].Type;
                people.textContent = "Max number of peeople allowed on vehicle:" + rentals[i].MaxPeople;
                halfres.textContent = "Half-Day Reservation (3 Hours):" + rentals[i].HalfDayReservation;
                fullres.textContent = "Full-Day Reservation: " + rentals[i].FullDayReservation;
                halfrent.textContent = `Half-Day Rental (3 Hours): ${rentals[i].HalfDayRental}`;
                fullrent.textContent = `Full-Day Rental: ${rentals[i].FullDayRental}`;


                card.appendChild(h2);
                card.appendChild(people);
                card.appendChild(halfres);
                card.appendChild(fullres);
                card.append(halfrent);
                card.append(fullrent);

                document.querySelector('.Honda-Dio-Scooter').appendChild(card);
            }
            else if (rentals[i].Type == "Honda PCX150 Scooter") {
                let card = document.createElement('a');
                let h2 = document.createElement('h2');
                let people = document.createElement('p');
                let halfres = document.createElement('p');
                let fullres = document.createElement('p');
                let halfrent = document.createElement('p')
                let fullrent = document.createElement('p');


                h2.textContent = rentals[i].Type;
                people.textContent = "Max number of peeople allowed on vehicle:" + rentals[i].MaxPeople;
                halfres.textContent = "Half-Day Reservation (3 Hours):" + rentals[i].HalfDayReservation;
                fullres.textContent = "Full-Day Reservation: " + rentals[i].FullDayReservation;
                halfrent.textContent = `Half-Day Rental (3 Hours): ${rentals[i].HalfDayRental}`;
                fullrent.textContent = `Full-Day Rental: ${rentals[i].FullDayRental}`;


                card.appendChild(h2);
                card.appendChild(people);
                card.appendChild(halfres);
                card.appendChild(fullres);
                card.append(halfrent);
                card.append(fullrent);

                document.querySelector('.Honda-PCX150-Scooter').appendChild(card);
            }
            else if (rentals[i].Type == "Honda Pioneer ATV") {
                let card = document.createElement('a');
                let h2 = document.createElement('h2');
                let people = document.createElement('p');
                let halfres = document.createElement('p');
                let fullres = document.createElement('p');
                let halfrent = document.createElement('p')
                let fullrent = document.createElement('p');


                h2.textContent = rentals[i].Type;
                people.textContent = "Max number of peeople allowed on vehicle:" + rentals[i].MaxPeople;
                halfres.textContent = "Half-Day Reservation (3 Hours):" + rentals[i].HalfDayReservation;
                fullres.textContent = "Full-Day Reservation: " + rentals[i].FullDayReservation;
                halfrent.textContent = `Half-Day Rental (3 Hours): ${rentals[i].HalfDayRental}`;
                fullrent.textContent = `Full-Day Rental: ${rentals[i].FullDayRental}`;


                card.appendChild(h2);
                card.appendChild(people);
                card.appendChild(halfres);
                card.appendChild(fullres);
                card.append(halfrent);
                card.append(fullrent);

                document.querySelector('.Honda-Pioneer-ATV').appendChild(card);
            }
            else if (rentals[i].Type == "Jeep Wrangler - 4 door") {
                let card = document.createElement('a');
                let h2 = document.createElement('h2');
                let people = document.createElement('p');
                let halfres = document.createElement('p');
                let fullres = document.createElement('p');
                let halfrent = document.createElement('p')
                let fullrent = document.createElement('p');


                h2.textContent = rentals[i].Type;
                people.textContent = "Max number of peeople allowed on vehicle:" + rentals[i].MaxPeople;
                halfres.textContent = "Half-Day Reservation (3 Hours):" + rentals[i].HalfDayReservation;
                fullres.textContent = "Full-Day Reservation: " + rentals[i].FullDayReservation;
                halfrent.textContent = `Half-Day Rental (3 Hours): ${rentals[i].HalfDayRental}`;
                fullrent.textContent = `Full-Day Rental: ${rentals[i].FullDayRental}`;


                card.appendChild(h2);
                card.appendChild(people);
                card.appendChild(halfres);
                card.appendChild(fullres);
                card.append(halfrent);
                card.append(fullrent);

                document.querySelector('.Jeep-Wrangler-4-door').appendChild(card);
            }
            else if (rentals[i].Type == "Jeep Wrangler - 2 door") {
                let card = document.createElement('a');
                let h2 = document.createElement('h2');
                let people = document.createElement('p');
                let halfres = document.createElement('p');
                let fullres = document.createElement('p');
                let halfrent = document.createElement('p')
                let fullrent = document.createElement('p');


                h2.textContent = rentals[i].Type;
                people.textContent = "Max number of peeople allowed on vehicle:" + rentals[i].MaxPeople;
                halfres.textContent = "Half-Day Reservation (3 Hours):" + rentals[i].HalfDayReservation;
                fullres.textContent = "Full-Day Reservation: " + rentals[i].FullDayReservation;
                halfrent.textContent = `Half-Day Rental (3 Hours): ${rentals[i].HalfDayRental}`;
                fullrent.textContent = `Full-Day Rental: ${rentals[i].FullDayRental}`;


                card.appendChild(h2);
                card.appendChild(people);
                card.appendChild(halfres);
                card.appendChild(fullres);
                card.append(halfrent);
                card.append(fullrent);

                document.querySelector('.Jeep-Wrangler-2-door').appendChild(card);
            }
        }
    });