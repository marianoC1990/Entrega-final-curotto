let username = ('mariano')
let mensaje = "Calcula el Precio de tu auto segun tu estatura"
function identificarme(){
    username = prompt('Ingresa tu nombre de usuario')
    if(username.trim() !=='') {
      alert('Bienvenido ' + username)
      }
      else{
        alert('error')
      }
      
   }
   function calcularElPrecioDelAuto() {
    for (var i = 0; i < 3; i++) {
      var numero1 = prompt("Ingresa el monto del auto:");
      var numero2 = prompt("Ingresa tu altura en CM:");
  
      numero1 = parseFloat(numero1);
      numero2 = parseFloat(numero2);
  
      if (isNaN(numero1) || isNaN(numero2)) {
        alert("Ingresa números válidos.");
        return "No entendimos.";
      }
  
      var resultado = numero1 * numero2;
      alert("El Precio de tu auto es $: " + resultado);
    }
  }
 