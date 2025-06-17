const personajesListaDiv = document.getElementById('personajes-lista');

personajesListaDiv.innerHTML = `
<div class="loader">
   <div data-glitch="Loading..." class="glitch">Loading...</div>
</div>
`;

setTimeout(() => {
    obtenerTodasLasNaves();
}, 6000);

let navesimg = [

    "../IMG/n1.png",
    "../IMG/n2.png",
    "../IMG/n3.png",
    "../IMG/n4.png",
    "../IMG/n5.png",
    "../IMG/n6.png",
    "../IMG/n7.png",
    "../IMG/n8.png",
    "../IMG/n9.png",
    "../IMG/n10.png"
];

async function obtenerTodasLasNaves() {
    let nextUrl = 'https://swapi.py4e.com/api/starships/';
    const todasLasNaves = [];

        const respuesta = await fetch(nextUrl);
        const datos = await respuesta.json();
        todasLasNaves.push(...datos.results);
        

    personajesListaDiv.innerHTML = `
        <input type="text" id="search" placeholder="Buscar naves..." class="form-control mb-3">
    `;

    document.getElementById('search').addEventListener('input', filtrarNaves);

    todasLasNaves.forEach(nave => {
        const naveDiv = document.createElement('div');
        naveDiv.classList.add("divnaves");
        const tarjeta = document.createElement("div");
        tarjeta.classList.add("tarjeta-naves");
        naveDiv.appendChild(tarjeta);

        if (nave.name === "CR90 corvette") {
            var navefoto = navesimg[0];
        } else if (nave.name === "Star Destroyer") {
            var navefoto = navesimg[1];
        } else if (nave.name === "Sentinel-class landing craft") {
            var navefoto = navesimg[2];
        } else if (nave.name === "Death Star") {
            var navefoto = navesimg[3];
        } else if (nave.name === "Millennium Falcon") {
            var navefoto = navesimg[4];
        } else if (nave.name === "Y-wing") {
            var navefoto = navesimg[5];
        } else if (nave.name === "X-wing") {
            var navefoto = navesimg[6];
        } else if (nave.name === "Executor") {
            var navefoto = navesimg[7];
        } else if (nave.name === "Rebel transport") {
            var navefoto = navesimg[8];
        } else if (nave.name === "TIE Advanced x1") {
            var navefoto = navesimg[9];
        };

        tarjeta.innerHTML = `
            <img src="${navefoto}">
            <div class="contenido-naves">
                <h2>${nave.name}</h2>
                <p><strong>Modelo:</strong> ${nave.model}</p>
                <p><strong>Fabricante:</strong> ${nave.manufacturer}</p>
                <p><strong>Velocidad atmosférica:</strong> ${nave.max_atmosphering_speed}</p>
                <p><strong>Clase de nave:</strong> ${nave.starship_class}</p>
            </div>
        `;
        personajesListaDiv.appendChild(naveDiv);
    });
}

function filtrarNaves() {
    const searchInput = document.getElementById('search');
    const filter = searchInput.value.toLowerCase();
    const naveDivs = document.querySelectorAll('.divnaves');

    naveDivs.forEach(div => {
        const nombre = div.querySelector('h2').textContent.toLowerCase();
        if (nombre.includes(filter)) {
            div.style.display = '';
        } else {
            div.style.display = 'none';
        }
    });
}
