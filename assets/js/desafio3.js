function verificar() {
    const valor1 = document.querySelector("#digito1").value
    const valor2 = document.querySelector("#digito2").value
    const valor3 = document.querySelector("#digito3").value
    const total = valor1 + valor2 + valor3
    if (total == "911") {
        parrafo = document.querySelector("#mensaje");
        parrafo.innerHTML = "Password 1 correcto"
    }
    else if (total == "714") {
        parrafo = document.querySelector("#mensaje");
        parrafo.innerHTML = "Password 2 correcto"

    }
    else {
        parrafo = document.querySelector("#mensaje");
        parrafo.innerHTML = "Password incorrecto"
    }
}


const button = document.querySelector("#boton");
button.addEventListener("click", verificar)