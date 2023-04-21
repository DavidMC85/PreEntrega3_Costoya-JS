// array (const global)
const OPERACIONES = ["+", "-", "*", "/"];
const NOMBRE = localStorage.getItem("Nombre")

let valorVisor = 0;
let numeroA;
let numeroB;
let operacion;
let ahora = new Date();

//poner en 0 el display al refrescar

window.onload = inicio

//saludito

window.onload = function() {
  swal({
    title: "¡Bienvenido a mi calcu!!!",
    text: "Calcule responsablemente!!",
    button: "Aceptar",
  });
}

function inicio() {
  document.getElementById("visor").value = "";
}

//calculos

function boton(tecla) {
  let auxiliar = document.getElementById("visor").value;
  document.getElementById("visor").value = auxiliar + tecla;
  valorVisor = document.getElementById("visor").value = auxiliar + tecla;
}

function btn_suma(caracter) {
  numeroA = valorVisor;
  numeroB = valorVisor;
  operacion = OPERACIONES[0];
  limpar();
}

function btn_resta(caracter) {
  numeroA = valorVisor;
  numeroB = valorVisor;
  operacion = OPERACIONES[1];
  limpar();
}

function btn_multiplicacion(caracter) {
  numeroA = valorVisor;
  numeroB = valorVisor;
  operacion = OPERACIONES[2];
  limpar();
}

function btn_division(caracter) {
  numeroA = valorVisor;
  numeroB = valorVisor;
  operacion = OPERACIONES[3];
  limpar();
}

function reset() {
  document.getElementById("visor").value = "";
  valorVisor = 0;
  operacion = "";
}

function limpar() {
  document.getElementById("visor").value = "";
}

function btn_igual() {
  numeroB = valorVisor;
  resultado();
}


//resultados

function resultado() {
  let total = 0;
  let ultimoTotal = 0;

  if (operacion === "+") {
    total = Number(numeroA) + Number(numeroB);
  } else if (operacion === "-") {
    total = Number(numeroA) - Number(numeroB);
  } else if (operacion === "*") {
    total = Number(numeroA) * Number(numeroB);
  } else if (operacion === "/") {
    total = Number(numeroA) / Number(numeroB);
  }

  ultimoTotal = total;
  reset();
  document.getElementById("visor").value = total;
  valorVisor = ultimoTotal;
}

//boton para salir

document.getElementById("btn_salir").onclick = function () {
  swal({
    title: "¿Estás seguro de que deseas salir de la aplicación?",
    icon: "warning",
    buttons: ["Cancelar", "Sí"],
  }).then(function (confirmado) {
    if (confirmado) {
      location.href = "about:blank";
    } else {
      swal("¡Bien pensado !", {
        icon: "success",
      });
      reset();
    }
  });
}



