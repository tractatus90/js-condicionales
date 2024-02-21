
function borde() {
imagen = document.querySelector("#imagen")
if (imagen.style.border == "")
    imagen.style.border = "solid 2px red";
else {
    imagen.style.border ="";
}
}


const imagenClick = document.querySelector("#imagen");
imagenClick.addEventListener("click", borde);
