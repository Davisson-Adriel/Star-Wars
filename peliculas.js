const personajesListaDiv = document.getElementById('personajes-lista');

personajesListaDiv.innerHTML = `
  <div class="loader">
    <div data-glitch="Loading..." class="glitch">Loading...</div>
  </div>
`;

setTimeout(() => {
    obtenerPeliculas();
}, 4000);

let peliculasImg = [
    "./IMG/ep1.jpg", "./IMG/ep2.jpg", "./IMG/ep3.jpg", "./IMG/ep4.jpg", "./IMG/ep5.jpg", "./IMG/ep6.jpg", "./IMG/ep7.jpg"
];

async function obtenerPeliculas() {
    const respuesta = await fetch("https://swapi.py4e.com/api/films/");
    const datos = await respuesta.json();
    const peliculas = datos.results.sort((a, b) => a.episode_id - b.episode_id);

    personajesListaDiv.innerHTML = `
    
    `;

    const general = document.getElementById("general");

    peliculas.forEach((pelicula, index) => {

        const general2=document.createElement("div");
        general2.classList.add("flip-card");

        const now = document.createElement("div");
        now.classList.add("flip-card-inner");


        const front = document.createElement('div');
        front.classList.add("flip-card-front");

        const back = document.createElement("div");
        back.classList.add("flip-card-back");
        now.appendChild(front);
        now.appendChild(back);
        general2.appendChild(now);

        const peliculaImg = peliculasImg[index];

        front.innerHTML = `<img src="${peliculaImg}" alt="${pelicula.title}">`;
        back.innerHTML= `
        <p><strong>Titulo:</strong> ${pelicula.title}</p>
        <p><strong>Episodio:</strong> ${pelicula.episode_id}</p>
        <p><strong>Director:</strong> ${pelicula.director}</p>
        <p><strong>Productor:</strong> ${pelicula.producer}</p>
        <p><strong>Fecha de estreno:</strong> ${pelicula.release_date}</p>

        `;
        back.addEventListener('click', () => {
            document.getElementById('peliculaTitulo').textContent = pelicula.title;
            document.getElementById('peliculaContenido').innerHTML = `
        
        <p><strong>Sinopsis:</strong> ${pelicula.opening_crawl}</p>`;
            new bootstrap.Modal(document.getElementById('modalPelicula')).show();
        });
        personajesListaDiv.appendChild(general2);
       
    });
}
