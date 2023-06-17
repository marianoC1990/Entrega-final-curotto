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

function agregarAlCarrito() {
  let nombreProducto = prompt("Ingrese el nombre del producto que desea agregar al carrito (o escriba 'salir' para salir):");

  if (nombreProducto.toLowerCase() === "salir") {
    return true; ma
  }

  carrito.push(nombreProducto);
  console.log("Producto agregado al carrito.");
}


function iniciarCompra() {
  let salir = false;
  while (!salir) {
    let opcion = prompt("Seleccione una opción: \n1. Agregar producto al carrito \n2. Ver contenido del carrito \n3. Salir");

    switch (opcion) {
      case "1":
        salir = agregarAlCarrito();
        break;
      case "2":
        console.log("Contenido del carrito:");
        if (carrito.length === 0) {
          console.log("El carrito está vacío.");
        } else {
          carrito.forEach(nombreProducto => {
            console.log("- " + nombreProducto);
          });
        }
        break;
      case "3":
        console.log("Gracias por utilizar el carrito de compra.");
        salir = true;
        break;
      default:
        console.log("Opción inválida. Intente nuevamente.");
    }
  }
}