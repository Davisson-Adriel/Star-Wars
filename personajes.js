const personajesListaDiv = document.getElementById('personajes-lista');

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
    obtenerTodosLosPersonajes();
}, 6000);

async function obtenerTodosLosPersonajes() {

    let nextUrl = 'https://swapi.py4e.com/api/people/';
    const todosLosPersonajes = [];


    while (nextUrl) {
        const respuesta = await fetch(nextUrl);
        const datos = await respuesta.json();
        todosLosPersonajes.push(...datos.results);
        nextUrl = datos.next;
    }

    personajesListaDiv.innerHTML = `
            <input type="text" id="search" placeholder="Buscar personajes..." class="form-control mb-3">
            `;

    document.getElementById('search').addEventListener('input', filtrarPersonajes);

    todosLosPersonajes.forEach(personaje => {
        const personajeDiv = document.createElement('div');
        personajeDiv.classList.add('divdiv');
        const tarjeta = document.createElement("div");
        tarjeta.classList.add("tarjeta");
        personajeDiv.appendChild(tarjeta);
        tarjeta.innerHTML = `
                <h2>${personaje.name}</h2>
                <div class="tarjeta-contenido">
                <p><strong>Altura:</strong> ${personaje.height} cm</p>
                <p><strong>Masa:</strong> ${personaje.mass} kg</p>
                <p><strong>Color de pelo:</strong> ${personaje.hair_color}</p>
                <p><strong>Color de piel:</strong> ${personaje.skin_color}</p>
                <p><strong>Color de ojos:</strong> ${personaje.eye_color}</p>
                <p><strong>Año de nacimiento:</strong> ${personaje.birth_year}</p>
                <p><strong>Género:</strong> ${personaje.gender}</p>
                </div>
            `;
        personajesListaDiv.appendChild(personajeDiv);
    });
}

function filtrarPersonajes() {
    const searchInput = document.getElementById('search');
    const filter = searchInput.value.toLowerCase();
    const personajesDivs = document.querySelectorAll('.divdiv');

    personajesDivs.forEach(div => {
        const nombre = div.querySelector('h2').textContent.toLowerCase();
        if (nombre.includes(filter)) {
            div.style.display = '';
        } else {
            div.style.display = 'none';
        }
    });
}


