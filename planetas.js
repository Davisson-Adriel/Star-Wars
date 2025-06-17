const personajesListaDiv = document.getElementById('personajes-lista');

const planetImages = [
    "./IMG/planeta1.png",
    "./IMG/planeta2.png",
    "./IMG/planeta3.png",
    "./IMG/planeta4.png",
    "./IMG/planeta5.png",
    "./IMG/planeta6.png"

];

personajesListaDiv.innerHTML = `

<section class="container2">
  <section class="loader">
    <article style="--rot: 0" class="sphere sphere1">
      <div class="item" style="--rot-y: 1"></div>
      <div class="item" style="--rot-y: 2"></div>
      <div class="item" style="--rot-y: 3"></div>
      <div class="item" style="--rot-y: 4"></div>
      <div class="item" style="--rot-y: 5"></div>
      <div class="item" style="--rot-y: 6"></div>
      <div class="item" style="--rot-y: 7"></div>
      <div class="item" style="--rot-y: 8"></div>
      <div class="item" style="--rot-y: 9"></div>
    </article>
    <article style="--rot: 1" class="sphere sphere2">
      <div class="item" style="--rot-y: 1"></div>
      <div class="item" style="--rot-y: 2"></div>
      <div class="item" style="--rot-y: 3"></div>
      <div class="item" style="--rot-y: 4"></div>
      <div class="item" style="--rot-y: 5"></div>
      <div class="item" style="--rot-y: 6"></div>
      <div class="item" style="--rot-y: 7"></div>
      <div class="item" style="--rot-y: 8"></div>
      <div class="item" style="--rot-y: 9"></div>
    </article>
    <article style="--rot: 2" class="sphere sphere3">
      <div class="item" style="--rot-y: 1"></div>
      <div class="item" style="--rot-y: 2"></div>
      <div class="item" style="--rot-y: 3"></div>
      <div class="item" style="--rot-y: 4"></div>
      <div class="item" style="--rot-y: 5"></div>
      <div class="item" style="--rot-y: 6"></div>
      <div class="item" style="--rot-y: 7"></div>
      <div class="item" style="--rot-y: 8"></div>
      <div class="item" style="--rot-y: 9"></div>
    </article>
    <article style="--rot: 3" class="sphere sphere4">
      <div class="item" style="--rot-y: 1"></div>
      <div class="item" style="--rot-y: 2"></div>
      <div class="item" style="--rot-y: 3"></div>
      <div class="item" style="--rot-y: 4"></div>
      <div class="item" style="--rot-y: 5"></div>
      <div class="item" style="--rot-y: 6"></div>
      <div class="item" style="--rot-y: 7"></div>
      <div class="item" style="--rot-y: 8"></div>
      <div class="item" style="--rot-y: 9"></div>
    </article>
    <article style="--rot: 4" class="sphere sphere5">
      <div class="item" style="--rot-y: 1"></div>
      <div class="item" style="--rot-y: 2"></div>
      <div class="item" style="--rot-y: 3"></div>
      <div class="item" style="--rot-y: 4"></div>
      <div class="item" style="--rot-y: 5"></div>
      <div class="item" style="--rot-y: 6"></div>
      <div class="item" style="--rot-y: 7"></div>
      <div class="item" style="--rot-y: 8"></div>
      <div class="item" style="--rot-y: 9"></div>
    </article>
    <article style="--rot: 5" class="sphere sphere6">
      <div class="item" style="--rot-y: 1"></div>
      <div class="item" style="--rot-y: 2"></div>
      <div class="item" style="--rot-y: 3"></div>
      <div class="item" style="--rot-y: 4"></div>
      <div class="item" style="--rot-y: 5"></div>
      <div class="item" style="--rot-y: 6"></div>
      <div class="item" style="--rot-y: 7"></div>
      <div class="item" style="--rot-y: 8"></div>
      <div class="item" style="--rot-y: 9"></div>
    </article>
    <article style="--rot: 6" class="sphere sphere7">
      <div class="item" style="--rot-y: 1"></div>
      <div class="item" style="--rot-y: 2"></div>
      <div class="item" style="--rot-y: 3"></div>
      <div class="item" style="--rot-y: 4"></div>
      <div class="item" style="--rot-y: 5"></div>
      <div class="item" style="--rot-y: 6"></div>
      <div class="item" style="--rot-y: 7"></div>
      <div class="item" style="--rot-y: 8"></div>
      <div class="item" style="--rot-y: 9"></div>
    </article>
    <article style="--rot: 7" class="sphere sphere8">
      <div class="item" style="--rot-y: 1"></div>
      <div class="item" style="--rot-y: 2"></div>
      <div class="item" style="--rot-y: 3"></div>
      <div class="item" style="--rot-y: 4"></div>
      <div class="item" style="--rot-y: 5"></div>
      <div class="item" style="--rot-y: 6"></div>
      <div class="item" style="--rot-y: 7"></div>
      <div class="item" style="--rot-y: 8"></div>
      <div class="item" style="--rot-y: 9"></div>
    </article>
    <article style="--rot: 8" class="sphere sphere9">
      <div class="item" style="--rot-y: 1"></div>
      <div class="item" style="--rot-y: 2"></div>
      <div class="item" style="--rot-y: 3"></div>
      <div class="item" style="--rot-y: 4"></div>
      <div class="item" style="--rot-y: 5"></div>
      <div class="item" style="--rot-y: 6"></div>
      <div class="item" style="--rot-y: 7"></div>
      <div class="item" style="--rot-y: 8"></div>
      <div class="item" style="--rot-y: 9"></div>
    </article>
  </section>
</section>

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
