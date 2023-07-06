let productos = [
  {
    id: 1,
    nombre: "aston martin",
    categoria: "ingles",
    precio: 1500,
    img: "./img/astonMartin.jfif"
  },
  {
    id: 2,
    nombre: "ferrari",
    categoria: "italiano",
    precio: 2300,
    img: "./img/ferrari.jfif"
  },
  {
    id: 3,
    nombre: "jaguar",
    categoria: "ingles",
    precio: 10000,
    img: "./img/jaguar.jpg"
  },
  {
    id: 4,
    nombre: "Mercedes benz",
    categoria: "Aleman",
    precio: 200,
    img: "./img/mercedesBenz.webp",
  },
  {
    id: 5,
    nombre: "Maserati",
    categoria: "italia",
    precio: 2000,
    img: "./img/maserati.jpg",
  },
  {
    id: 6,
    nombre: "Ford",
    categoria: "Estadounidence",
    precio: 1200,
    img: "./img/ford.jpg",
  },
  {
    id: 7,
    nombre: "jeep",
    categoria: "Estadounidence",
    precio: 2300,
    img: "./img/jeep.jpg",
  },
  {
    id: 8,
    nombre: "Audi",
    categoria: "Aleman",
    precio: 22200,
    img: "./img/audi.webp",
  }

]

productos.map(producto => {
  let card = document.createElement('div');
  card.classList.add('card', 'col-md-4', 'mb-4'); 

  card.innerHTML = `
    <div class="card-body">
      <h3 class="card-title">${producto.nombre}</h3>
      <img src="${producto.img}" class="card-img-top">
      <h4 class="card-subtitle">País de origen: ${producto.categoria}</h4>
      <p class="card-text">Precio en pesos: ${producto.precio}</p>
    </div>
  `;

  container.append(card);
});

