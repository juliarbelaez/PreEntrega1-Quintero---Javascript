let montoPrestamo = parseInt(prompt("Ingrese monto a prestar"));
let numeroCuotas = parseInt(prompt("Ingrese número de cuotas"));
let tasaInteres = parseInt(prompt("Eliga tasa de interés: 3%, 6% o 9%"));

let resultado = 0;

function calculo(montoPrestamo, numeroCuotas, tasa) {
  resultado = (montoPrestamo * tasa) / numeroCuotas;
  resultado = resultado.toFixed();
  alert("Tus pagos serían de " + numeroCuotas + " cuotas por " + resultado);

  console.log("cuotas " + numeroCuotas);
  mensajeFinal = "";
  for (let i = 1; i <= numeroCuotas; i++) {
    mensaje = "Cuota n°" + i + ": " + resultado + "\n";
    mensajeFinal = mensajeFinal + mensaje;
  }
  console.log(mensajeFinal);
}

switch (tasaInteres) {
  case 3:
    calculo(montoPrestamo, numeroCuotas, 1.3);
    break;
  case 6:
    calculo(montoPrestamo, numeroCuotas, 1.6);
    break;
  case 9:
    calculo(montoPrestamo, numeroCuotas, 1.9);
    break;
}
