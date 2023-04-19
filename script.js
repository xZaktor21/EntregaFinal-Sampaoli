alert("Bienvenidos a CoderSwap!! El precio actual de la CoderCoin es de $0,27.");

//datos iniciales
let usuario = prompt("Por favor, ingrese un nombre de usuario:");
let saldo = 12000;
let transacciones = [];

alert("Saludos " + usuario + "!");

let accion;

//interaccion
while (true) {
  accion = prompt("¿Quiere realizar alguna accion? Si o no.");

  if (accion == "no") {
    alert("Gracias vuelva pronto.");
    break;
  } else if (accion == "si") {
    let info = prompt("Consultar saldo, simular staking, realizar una transacción o filtrar transacciones");

    if (info == "consultar saldo") {
      alert("Su saldo es de " + saldo + " CoderCoins. Es decir: $" + saldo * 0.27 + " dolares");
    } else if (info == "simular staking") {
      let dias;

      while (true) {
        dias = prompt("Elija la cantidad de dias: 30,45,60,180,365.");

        if (dias == "30" || dias == "45" || dias == "60" || dias == "180" || dias == "365") {
          roi(dias);
          break;
        } else {
          alert("Opcion no valida.");
        }
      }
    } else if (info == "realizar una transaccion") {
      let tipo;
      let cantidad;

      while (true) {
        tipo = prompt("¿Quiere compra o venta de CoderCoins?");
        if (tipo == "compra" || tipo == "venta") {
          cantidad = parseInt(prompt("¿Cuántas CoderCoins quiere " + tipo + "?"));
          if (!isNaN(cantidad)) {
            transaccion = { 
              tipo: tipo,
              cantidad: cantidad,
              fecha: new Date().toLocaleString()
            };
            transacciones.push(transaccion);
            if (tipo == "compra") {
              saldo += cantidad;
              alert("Ha comprado " + cantidad + " CoderCoins.");
            } else {
              saldo -= cantidad;
              alert("Ha vendido " + cantidad + " CoderCoins.");
            }
            break;
          } else {
            alert("Debe ingresar una cantidad numérica.");
          }
        } else {
          alert("Opción no válida.");
        }
      }
    } else if (info == "filtrar transacciones") {
        if (transacciones.length === 0) {
          alert("No hay transacciones registradas.");
        } else {
          let transaccionesFiltradas = filtrarTransacciones(transacciones);
          console.log(transaccionesFiltradas);
        }
    } else {
      alert("Opcion no valida.");
    }
  } else {
    alert("Opcion no valida.");
  }
}

//funcion para calcular ganancia
function roi(dias) {
  switch (dias) {
    case "30":
      alert("Usted tendria " + saldo * 1.02 + " CoderCoins al finalizar.");
      break;
    case "45":
      alert("Usted tendria " + saldo * 1.035 + " CoderCoins al finalizar.");
      break;
    case "60":
      alert("Usted tendria " + saldo * 1.06 + " CoderCoins al finalizar.");
      break;
    case "180":
      alert("Usted tendria " + saldo * 1.13 + " CoderCoins al finalizar.");
      break;
    case "365":
      alert("Usted tendria " + saldo * 1.37 + " CoderCoins al finalizar.");
      break;
    default:
      alert("Opcion no valida.");
      break;
  }
}

//funcion para filtrar transacciones
function filtrarTransacciones() {
    let tipoBusqueda = prompt("Ingrese el tipo de transaccion a buscar (compra o venta):");
    let transaccionesFiltradas = transacciones.filter(function(transaccion) {
      return transaccion.tipo == tipoBusqueda;
    });
    
    if (transaccionesFiltradas.length == 0) {
      alert("No se encontraron transacciones de " + tipoBusqueda);
    } else {
      alert("Transacciones de " + tipoBusqueda + ":");
      transaccionesFiltradas.forEach(function(transaccion) {
        alert("Cantidad: " + transaccion.cantidad + " - Fecha: " + transaccion.fecha);
      });
    }
  }
  
