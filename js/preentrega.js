let productos = [
  {
    id: 1,
    nombre: "aston martin",
    categoria: "ingles",
    precio: 1500
  },
  {
    id: 2,
    nombre: "ferrari",
    categoria: "italiano",
    precio: 2300
  },
  {
    id: 3,
    nombre: "jaguar",
    categoria: "ingles",
    precio: 10000
  },
  {
    id: 4,
    nombre: "Mercedes benz",
    categoria: "Aleman",
    precio: 200
  }
];

let carrito = [];

function agregarAlCarrito(nombreProducto) {
  if (nombreProducto.toLowerCase() === "salir") {
    return true;
  }

  let productoBuscado = productos.find(p => p.nombre === nombreProducto);

  if (productoBuscado) {
    carrito.push(productoBuscado);
    console.log("Producto agregado al carrito.");
  } else {
    alert("No se encontró el producto.");
  }
}

let pregunta = prompt("¿Desea agregar algún producto al carrito?");
if (pregunta.toLowerCase() === "si") {
  let producto = prompt("¿Qué producto desea agregar?");
  agregarAlCarrito(producto);
} else {
  alert("¡Gracias! Vuelva pronto.");
}