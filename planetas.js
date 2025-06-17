const personajesListaDiv = document.getElementById('personajes-lista');

const planetImages = [
    "planeta1.png",
    "planeta2.png",
    "planeta3.png",
    "planeta4.png",
    "planeta5.png",
    "planeta6.png"

];

personajesListaDiv.innerHTML = `
<div aria-label="Orange and tan hamster running in a metal wheel" role="img" class="wheel-and-hamster">
	<div class="wheel"></div>
	<div class="hamster">
		<div class="hamster__body">
			<div class="hamster__head">
				<div class="hamster__ear"></div>
				<div class="hamster__eye"></div>
				<div class="hamster__nose"></div>
			</div>
			<div class="hamster__limb hamster__limb--fr"></div>
			<div class="hamster__limb hamster__limb--fl"></div>
			<div class="hamster__limb hamster__limb--br"></div>
			<div class="hamster__limb hamster__limb--bl"></div>
			<div class="hamster__tail"></div>
		</div>
	</div>
	<div class="spoke"></div>
</div>
`;

setTimeout(() => {
    obtenerTodosLosPlanetas();
}, 6000);

async function obtenerTodosLosPlanetas() {
    let nextUrl = 'https://swapi.py4e.com/api/planets/';
    const todosLosPlanetas = [];

    while (nextUrl) {
        const respuesta = await fetch(nextUrl);
        const datos = await respuesta.json();
        todosLosPlanetas.push(...datos.results);
        nextUrl = datos.next;
    }

    personajesListaDiv.innerHTML = `
        <input type="text" id="search" placeholder="Buscar planetas..." class="form-control mb-3">
    `;

    document.getElementById('search').addEventListener('input', filtrarPlanetas);

    todosLosPlanetas.forEach(planeta => {
        const planetaDiv = document.createElement('div');
        planetaDiv.classList.add('planeta-container');

        const randomImage = planetImages[Math.floor(Math.random() * planetImages.length)];

        planetaDiv.innerHTML = `
        <div class="planeta-card">
        <h2 class="planeta-nombre">${planeta.name}</h2>    
        <img src="${randomImage}" class="planeta-img" alt="${planeta.name}">
            <div class="planeta-info">
                <p><strong>Clima:</strong> ${planeta.climate}</p>
                <p><strong>Terreno:</strong> ${planeta.terrain}</p>
                <p><strong>Gravedad:</strong> ${planeta.gravity}</p>
                <p><strong>Población:</strong> ${planeta.population}</p>
            </div>
        </div>
    `;

        personajesListaDiv.appendChild(planetaDiv);
    });
}

function filtrarPlanetas() {
    const searchInput = document.getElementById('search');
    const filter = searchInput.value.toLowerCase();
    const planetasDivs = document.querySelectorAll('.planeta-card');

    planetasDivs.forEach(div => {
        const nombre = div.querySelector('h2').textContent.toLowerCase();
        if (nombre.includes(filter)) {
            div.style.display = '';
        } else {
            div.style.display = 'none';
        }
    });
}
