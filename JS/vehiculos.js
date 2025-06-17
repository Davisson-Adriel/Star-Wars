const personajesListaDiv = document.getElementById('personajes-lista');

personajesListaDiv.innerHTML = `
  <div class="loader">
    <div data-glitch="Loading..." class="glitch">Loading...</div>
  </div>
`;

setTimeout(() => {
    obtenerVehiculos();
}, 5000);

let vehiculosImg = [
    "../IMG/v1.png",
    "../IMG/v2.png",
    "../IMG/v3.png",
    "../IMG/v4.png",
    "../IMG/v5.png",
    "../IMG/v6.png",
    "../IMG/v7.png",
    "../IMG/v8.png",
    "../IMG/v9.png",
    "../IMG/v10.png",
    "../IMG/v11.png",
    "../IMG/v12.png",
    "../IMG/v13.png",
    "../IMG/v14.png",
    "../IMG/v15.png",
    "../IMG/v16.png",
    "../IMG/v17.png",
    "../IMG/v18.png",
    "../IMG/v19.png",
    "../IMG/v20.png",
    "../IMG/v21.png",
    "../IMG/v22.png",
    "../IMG/v23.png",
    "../IMG/v24.png",
    "../IMG/v25.png",
    "../IMG/v26.png",
    "../IMG/v27.png",
    "../IMG/v28.png",
    "../IMG/v29.png",
    "../IMG/v30.png",
    "../IMG/v31.png",
    "../IMG/v32.png",
    "../IMG/v33.png",
    "../IMG/v34.png",
    "../IMG/v35.png",
    "../IMG/v36.png",
    "../IMG/v37.png",
    "../IMG/v38.png",
    "../IMG/v39.png",
    "../IMG/v40.png"
];

async function obtenerVehiculos() {
    let nextUrl = 'https://swapi.py4e.com/api/vehicles/';
    const todosLosVehiculos = [];


    while (nextUrl) {
        const respuesta = await fetch(nextUrl);
        const datos = await respuesta.json();
        todosLosVehiculos.push(...datos.results);
        nextUrl = datos.next;
    };

    personajesListaDiv.innerHTML = "";

    todosLosVehiculos.forEach((vehiculo, index) => {
        const contenedor = document.createElement('div');
        contenedor.classList.add("divehiculos");

        const tarjeta = document.createElement("div");
        tarjeta.classList.add("tarjeta-vehiculos");
        contenedor.appendChild(tarjeta);

        if (vehiculo.name === "Sand Crawler") {
            var vehiculoImg = vehiculosImg[0];
        } else if (vehiculo.name === "T-16 skyhopper") {
            var vehiculoImg = vehiculosImg[1];
        } else if (vehiculo.name === "X-34 landspeeder") {
            var vehiculoImg = vehiculosImg[2];
        } else if (vehiculo.name === "TIE/LN starfighter") {
            var vehiculoImg = vehiculosImg[3];
        } else if (vehiculo.name === "AT-AT") {
            var vehiculoImg = vehiculosImg[4];
        } else if (vehiculo.name === "Snowspeeder") {
            var vehiculoImg = vehiculosImg[5];
        } else if (vehiculo.name === "TIE bomber") {
            var vehiculoImg = vehiculosImg[6];
        } else if (vehiculo.name === "AT-ST") {
            var vehiculoImg = vehiculosImg[7];
        } else if (vehiculo.name === "Storm IV Twin-Pod cloud car") {
            var vehiculoImg = vehiculosImg[8];
        } else if (vehiculo.name === "Sail barge") {
            var vehiculoImg = vehiculosImg[9];
        } else if (vehiculo.name === "Bantha-II cargo skiff") {
            var vehiculoImg = vehiculosImg[10];
        } else if (vehiculo.name === "AT-TE") {
            var vehiculoImg = vehiculosImg[11];
        } else if (vehiculo.name === "TIE/IN interceptor") {
            var vehiculoImg = vehiculosImg[12];
        } else if (vehiculo.name === "Imperial Speeder Bike") {
            var vehiculoImg = vehiculosImg[13];
        } else if (vehiculo.name === "Vulture Droid") {
            var vehiculoImg = vehiculosImg[14];
        } else if (vehiculo.name === "Multi-Troop Transport") {
            var vehiculoImg = vehiculosImg[15];
        } else if (vehiculo.name === "Armored Assault Tank") {
            var vehiculoImg = vehiculosImg[16];
        } else if (vehiculo.name === "Single Trooper Aerial Platform") {
            var vehiculoImg = vehiculosImg[17];
        } else if (vehiculo.name === "C-9979 landing craft") {
            var vehiculoImg = vehiculosImg[18];
        } else if (vehiculo.name === "Tribubble bongo") {
            var vehiculoImg = vehiculosImg[19];
        } else if (vehiculo.name === "Sith speeder") {
            var vehiculoImg = vehiculosImg[20];
        } else if (vehiculo.name === "Zephyr-G swoop bike") {
            var vehiculoImg = vehiculosImg[21];
        } else if (vehiculo.name === "Koro-2 Exodrive airspeeder") {
            var vehiculoImg = vehiculosImg[22];
        } else if (vehiculo.name === "XJ-6 airspeeder") {
            var vehiculoImg = vehiculosImg[23];
        } else if (vehiculo.name === "LAAT/i") {
            var vehiculoImg = vehiculosImg[24];
        } else if (vehiculo.name === "LAAT/c") {
            var vehiculoImg = vehiculosImg[25];
        } else if (vehiculo.name === "AT-T3") {
            var vehiculoImg = vehiculosImg[26];
        } else if (vehiculo.name === "SPHA") {
            var vehiculoImg = vehiculosImg[27];
        } else if (vehiculo.name === "Flitknot speeder") {
            var vehiculoImg = vehiculosImg[28];
        } else if (vehiculo.name === "Neimoidian shuttle") {
            var vehiculoImg = vehiculosImg[29];
        } else if (vehiculo.name === "Geonosian starfighter") {
            var vehiculoImg = vehiculosImg[30];
        } else if (vehiculo.name === "Tsmeu-6 personal wheel bike") {
            var vehiculoImg = vehiculosImg[31];
        } else if (vehiculo.name === "Emergency Firespeeder") {
            var vehiculoImg = vehiculosImg[32];
        } else if (vehiculo.name === "Droid tri-fighter") {
            var vehiculoImg = vehiculosImg[33];
        } else if (vehiculo.name === "Oevvaor jet catamaran") {
            var vehiculoImg = vehiculosImg[34];
        } else if (vehiculo.name === "Raddaugh Gnasp fluttercraft") {
            var vehiculoImg = vehiculosImg[35];
        } else if (vehiculo.name === "Clone turbo tank") {
            var vehiculoImg = vehiculosImg[36];
        } else if (vehiculo.name === "Corporate Alliance tank droid") {
            var vehiculoImg = vehiculosImg[37];
        } else if (vehiculo.name === "Droid gunship") {
            var vehiculoImg = vehiculosImg[38];
        } else if (vehiculo.name === "AT-RT") {
            var vehiculoImg = vehiculosImg[39];
        }

        tarjeta.innerHTML = `
      <img src="${vehiculoImg}" alt="${vehiculo.name}">
      
    `;

        tarjeta.addEventListener('click', () => {
            document.getElementById('vehiculoTitulo').textContent = vehiculo.name;
            document.getElementById('vehiculoContenido').innerHTML = `
        <p><strong>Modelo:</strong> ${vehiculo.model}</p>
        <p><strong>Fabricante:</strong> ${vehiculo.manufacturer}</p>
        <p><strong>Velocidad:</strong> ${vehiculo.max_atmosphering_speed}</p>
        <p><strong>Clase:</strong> ${vehiculo.vehicle_class}</p>
        <p><strong>Capacidad de carga:</strong> ${vehiculo.cargo_capacity} kg</p>
        <p><strong>Pasajeros:</strong> ${vehiculo.passengers}</p>
        <p><strong>Precio:</strong> ${vehiculo.cost_in_credits} créditos</p>
        <p><strong>Longitud:</strong> ${vehiculo.length} m</p>
        <p><strong>Consumo de combustible:</strong> ${vehiculo.consumables}</p>
        <p><strong>Pilotos:</strong> ${vehiculo.pilots.length > 0 ? vehiculo.pilots.join(', ') : 'N/A'}</p>
      `;
            new bootstrap.Modal(document.getElementById('modalVehiculo')).show();
        });

        personajesListaDiv.appendChild(contenedor);
    });
}

