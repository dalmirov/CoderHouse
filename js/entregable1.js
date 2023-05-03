console.log("funciona");

let momentoDelDia = new Date();
let hora = momentoDelDia.getHours();
let saludo;

switch (true) {
  case hora >= 5 && hora < 12:
    saludo = "Buenos días";
    break;
  case hora >= 12 && hora < 19:
    saludo = "Buenas tardes";
    break;
  case hora >= 19 || hora < 5:
    saludo = "Buenas noches";
    break;
}

let nombre, escuela, materiales;

function IngresarDatos() {
  do {
    nombre = prompt(
      saludo + "\n¿Cómo es tu nombre?\nVoy a ayudarte en tu compra :)"
    );
  } while (nombre === "" || nombre === null);

  do {
    escuela = prompt(nombre + ", ¿a qué escuela o impulso pertenecés?");
  } while (escuela === "" || escuela === null);

  materiales = prompt(
    "Empecemos por el primer material que necesitas:\nPueden ser: Acuarelas, Crayones o Ceras para Modelar?"
  );
}

function mensajeError() {
  if (nombre === undefined || escuela === undefined) {
    alert(":-( Error, es necesario agregar todos los datos.");
    console.error(":-( Error, es necesario agregar todos los datos.");
    return true;
  }
  return false;
}

function definirMaterial() {
  switch (materiales) {
    case "Acuarelas":
      confirm("Empecemos con las Acuarelas! Buena elección.");
      break;
    case "Crayones":
      confirm("Empecemos con los Crayones! Buena elección.");
      break;
    case "Ceras para Modelar":
      confirm("Empecemos con las Ceras para Modelar! Buena elección.");
      break;
    default:
      alert(
        "Por favor elegí entre las posibilidades que tenemos:\nAcuarelas, Crayones o Ceras para Modelar"
      );
  }
}

IngresarDatos();
while (mensajeError()) {
  IngresarDatos();
}
definirMaterial();