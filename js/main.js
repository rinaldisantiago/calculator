let teclas = document.getElementsByClassName("tecla");
let pantalla = document.getElementById("pantalla");
let igual = document.getElementById("teclaIgual");

for (let i = 0; i < teclas.length; i++) {
    teclas[i].addEventListener("click", () => {
        pantalla.innerText += teclas[i].innerText;
    })
}