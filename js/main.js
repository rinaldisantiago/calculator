let pantalla = document.getElementById("pantalla");
let igual = document.getElementById("teclaIgual");
let del = document.getElementById("del");
let borrar = document.getElementById("borrar");
let teclas = document.getElementsByClassName("tecla");
let operaciones = document.getElementsByClassName("operador");

let operacion = "";
let num1 = "";
let num2 = "";

for (let i = 0; i < teclas.length; i++) {
  teclas[i].addEventListener("click", () => {
    if (operacion === "") {
      num1 += teclas[i].innerText;
    } else {
      num2 += teclas[i].innerText;
    }
    pantalla.innerText += teclas[i].innerText;
  });
}

for (let i = 0; i < operaciones.length; i++) {
  operaciones[i].addEventListener("click", () => {
    switch (operaciones[i].innerText) {
      case "+":
        operacion = "suma";
        break;
      case "-":
        operacion = "resta";
        break;
      case "*":
        operacion = "multiplica";
        break;
      case "/":
        operacion = "divide";
        break;
      default:
        console.log("Operacion no valida");
    }
    pantalla.innerText = "";
  });
}

igual.addEventListener("click", () => {
  num1 = parseFloat(num1);
  num2 = parseFloat(num2);
  switch (operacion) {
    case "suma":
      pantalla.innerText = num1 + num2;
      break;
    case "resta":
      pantalla.innerText = num1 - num2;
      break;
    case "multiplica":
      pantalla.innerText = num1 * num2;
      break;
    case "divide":
      pantalla.innerText = num1 / num2;
      break;
    default:
      console.log("Operacion no valida");
  }
});

/*
del.addEventListener("click", () => {
    if (operacion === "") {
        num1.innerText -= pantalla.innerText;
    } else {
        num2.innerText -= pantalla.innerText;
    }
})
*/

//*Falta que cuando este el resultado que se reinicie los numeros y la operacion
borrar.addEventListener("click", () => {
    if (operacion === "") {
        num1 = "";
    } else {
        num2 = "";
    }
    pantalla.innerText = "";
})