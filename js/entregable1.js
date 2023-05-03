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

function mensajeError() {
  if (nombre === undefined || escuela === undefined) {
    alert(":-( Error, es necesario agregar todos los datos.");
    console.error(":-( Error, es necesario agregar todos los datos.");
  }
}

function IngresarDatos() {
  nombre = prompt(
    saludo + "\n¿Cómo es tu nombre?\nVoy a ayudarte en tu compra :)"
  );
  escuela = prompt(nombre + ", ¿a qué escuela o impulso pertenecés?");
  materiales = prompt(
    "Empecemos por el primer material que necesitas:\nPueden ser: Acuarelas, Crayones o Ceras para Modelar?"
  );
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
        "Todavía no tenemos esos materiales, por favor elegí entre las posibilidades que tenemos:\nAcuarelas, Crayones o Ceras para Modelar"
      );
  }
}
mensajeError();
IngresarDatos();
definirMaterial();
