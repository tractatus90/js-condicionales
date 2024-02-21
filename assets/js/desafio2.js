function verificar() {
  const valor1 = document.querySelector("#input1").value;
  const valor2 = document.querySelector("#input2").value;
  const valor3 = document.querySelector("#input3").value;
  const total =
    parseInt(valor1) + parseInt(valor2) + parseInt(valor3);
  if (total < 10) {
    parrafo = document.querySelector("#alerta");
    parrafo.innerHTML = "llevas " + total + " stickers";
  } else {
    parrafo = document.querySelector("#alerta");
    parrafo.innerHTML = "llevas demasiados stickers";
  }
}
const button = document.querySelector("#boton");
button.addEventListener("click", verificar);
