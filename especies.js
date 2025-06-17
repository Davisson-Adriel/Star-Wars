const personajesListaDiv = document.getElementById('personajes-lista');

personajesListaDiv.innerHTML = `
  <div class="loader">
    <div data-glitch="Loading..." class="glitch">Loading...</div>
  </div>
`;

setTimeout(() => {
    obtenerEspecies();
}, 5000);

let especiesImg = [
    "e1.png", "e2.png", "e3.png", "e4.png", "e5.png",
    "e6.png", "e7.png", "e8.png", "e9.png", "e10.png"
];

async function obtenerEspecies() {
    const respuesta = await fetch('https://swapi.py4e.com/api/species/');
    const datos = await respuesta.json();
    const especies = datos.results;

    personajesListaDiv.innerHTML = "";

    especies.forEach((especie, index) => {
        const contenedor = document.createElement('div');
        contenedor.classList.add("divehiculos");

        const tarjeta = document.createElement("div");
        tarjeta.classList.add("tarjeta-vehiculos");
        contenedor.appendChild(tarjeta);

        if (especie.name === "Human"){
            var especieImg = especiesImg[0];
        } else if (especie.name === "Droid") {
            var especieImg = especiesImg[1];
        } else if (especie.name === "Wookiee") {
            var especieImg = especiesImg[2];
        } else if (especie.name === "Rodian") {
            var especieImg = especiesImg[3];
        } else if (especie.name === "Hutt") {
            var especieImg = especiesImg[4];
        } else if (especie.name === "Yoda's species") {
            var especieImg = especiesImg[5];
        } else if (especie.name === "Trandoshan") {
            var especieImg = especiesImg[6];
        } else if (especie.name === "Mon Calamari") {
            var especieImg = especiesImg[7];
        } else if (especie.name === "Ewok") {
            var especieImg = especiesImg[8];
        } else if (especie.name === "Sullustan") {
            var especieImg = especiesImg[9];
        };

        tarjeta.innerHTML = `
      <img src="${especieImg}" alt="${especie.name}">
    `;

        tarjeta.addEventListener('click', () => {
            document.getElementById('especieTitulo').textContent = especie.name;
            document.getElementById('especieContenido').innerHTML = `
        <p><strong>Clasificación:</strong> ${especie.classification}</p>
        <p><strong>Designación:</strong> ${especie.designation}</p>
        <p><strong>Altura promedio:</strong> ${especie.average_height} cm</p>
        <p><strong>Color de piel:</strong> ${especie.skin_colors}</p>
        <p><strong>Color de ojos:</strong> ${especie.eye_colors}</p>
        <p><strong>Color de cabello:</strong> ${especie.hair_colors}</p>
        <p><strong>Esperanza de vida:</strong> ${especie.average_lifespan} años</p>
        <p><strong>Lenguaje:</strong> ${especie.language}</p>
      `;
            new bootstrap.Modal(document.getElementById('modalEspecie')).show();
        });

        personajesListaDiv.appendChild(contenedor);
    });
}
