const select = document.getElementById("select");
const contenedor = document.getElementById("contenedor");
const modal = document.getElementById("modal");
const horizontal = document.getElementById("horizontal");

fetch("https://rickandmortyapi.com/api/character")
  .then((r) => r.json())
  .then((r) => createCards(r.results, ""));

select.addEventListener("change", (e) => {
  contenedor.innerHTML = "";
  fetch("https://rickandmortyapi.com/api/character")
    .then((r) => r.json())
    .then((r) => createCards(r.results, e.target.value));
});

const cerrarModal = () => {
  select.style.opacity = "1";
  modal.style.display = "none";
};

const getInfoPersonaje = (personaje) => {
  select.style.opacity = "0";
  modal.style.display = "flex";
  const { name, image, id, gender, species, status } = personaje;

  horizontal.innerHTML = `
  
  <div class="card h mb-3" style="max-width: 540px;"><span id="x" onclick="cerrarModal()">x</span>
  <div class="row g-0">
    <div class="col-md-4">
      <img src="${image}" class="img-fluid rounded-start" alt="...">
    </div>
    <div class="col-md-8">
      <div class="card-body">
        <h5 class="card-title ">${name}</h5>
        <p class="card-text m-0">ID: ${id}</p>
        <p class="card-text m-0">Gender: ${gender}</p>
        <p class="card-text m-0">Species: ${species}</p>
        <p class="card-text m-0"><small class="text-muted">Status: ${status}</small></p>
      </div>
    </div>
  </div>
</div>`;
};

const getPersonaje = (id) => {
  fetch(`https://rickandmortyapi.com/api/character/${id}`)
    .then((r) => r.json())
    .then((r) => getInfoPersonaje(r));
};

const createCards = (personajes, genero) => {
  for (const personaje of personajes) {
    const { name, image, id, gender, species, status } = personaje;
    switch (genero) {
      case "":
        contenedor.innerHTML += `<div class="col p-0 mb-3 d-flex justify-content-evenly ">
        <div class="card" style="width: 18rem;">
  <img src="${image}" class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">${name}</h5>
    <p class="card-text">ID: ${id}</p>
    <p class="card-text">Species: ${species}</p>
    <p class="card-text">Status: ${status}</p>
    <a  class="btn btn-primary" onclick="getPersonaje(${id})">More Info</a>
  </div>
</div></div>`;

        break;
      case "hombre":
        if (gender === "Male") {
          contenedor.innerHTML += `<div class="col p-0 mb-3 d-flex justify-content-evenly ">
            <div class="card" style="width: 18rem;">
      <img src="${image}" class="card-img-top" alt="...">
      <div class="card-body">
        <h5 class="card-title">${name}</h5>
        <p class="card-text">ID: ${id}</p>
        <p class="card-text">Species: ${species}</p>
        <p class="card-text">Status: ${status}</p>
        <a class="btn btn-primary" onclick="getPersonaje(${id})">More Info</a>
      </div>
    </div></div>`;
        }
        break;
      case "mujer":
        if (gender === "Female") {
          contenedor.innerHTML += `<div class="col p-0 mb-3 d-flex justify-content-evenly ">
            <div class="card" style="width: 18rem;">
      <img src="${image}" class="card-img-top" alt="...">
      <div class="card-body">
        <h5 class="card-title">${name}</h5>
        <p class="card-text">ID: ${id}</p>
        <p class="card-text">Species: ${species}</p>
        <p class="card-text">Status: ${status}</p>
        <a  class="btn btn-primary" onclick="getPersonaje(${id})">More Info</a>
      </div>
    </div></div>`;
        }
        break;
      case "desconocido":
        if (gender === "unknown") {
          contenedor.innerHTML += `<div class="col p-0 mb-3 d-flex justify-content-evenly ">
            <div class="card" style="width: 18rem;">
      <img src="${image}" class="card-img-top" alt="...">
      <div class="card-body">
        <h5 class="card-title">${name}</h5>
        <p class="card-text">ID: ${id}</p>
        <p class="card-text">Species: ${species}</p>
        <p class="card-text">Status: ${status}</p>
        <a  class="btn btn-primary" onclick="getPersonaje(${id})">More Info</a>
      </div>
    </div></div>`;
        }
        break;
    }
  }
};
