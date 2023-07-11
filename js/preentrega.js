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
let botonCarrito = document.getElementById('boton-carrito')
let modalContainer = document.getElementById ('modal-container')
let carrito = []
productos.map(producto => {
  let card = document.createElement('div');
  card.classList.add('card', 'col-md-4', 'mb-4'); 

  card.innerHTML = `
    <div class="card-body, border, bc">
      <h3 class="card-title, p20">${producto.nombre}</h3>
      <img src="${producto.img}" class="card-img-top">
      <h4 class="card-subtitle, p20, center">País de origen: ${producto.categoria}</h4>
      <p class="card-text, p20, center">Precio en pesos: ${producto.precio}</p>
    </div>
  `;

  container.append(card);
  let boton = document.createElement ('button')
  boton.innerText = 'Agregar al carrito'
  card.append(boton)
  boton.addEventListener ('click', () =>{
    carrito.push ({
      id: producto.id,
      nombre: producto.nombre,
      precio: producto.precio,
    })
    console.log (carrito)
  })
});

function mostrarCarrito (){
  modalContainer.style.display = 'flex'
  let modalheader = document.createElement ('div')
  modalheader.innerHTML = `<h1>Carrito</h1>`
  modalContainer.append(modalheader)
  let modalbutton = document.createElement ('p')
  modalbutton.innerText = 'X'
  modalheader.append(modalbutton)
  modalbutton.addEventListener('click', ()=>{
    modalContainer.style.display = 'none'
  })
 
  let containerItems = document.createElement ('div')
  modalContainer.append(containerItems) 
    carrito.map((producto)=>{
    let carrritoItem = document.createElement ('div')
    carrritoItem.innerHTML = `<p>${producto.nombre}</p><p>${producto.precio}</p>`
    containerItems.append(carrritoItem)
  })
 let total = carrito.reduce((acumulador, producto)=>acumulador + producto.precio, 0)
 console.log (total)
 let modalFooter = document.createElement ('div')
 if (carrito.length === 0){
  modalFooter.innerHTML = `<p>Compra algo raton</p>`

 }else {
  modalFooter.innerHTML = `<p>Total</p><p>${total}</p>`
 }
 modalContainer.append(modalFooter)

 }
botonCarrito.addEventListener ('click', mostrarCarrito)