//tomo los elementos del html
const nombre = document.querySelector("#nombre");
const btnComenzar = document.querySelector("#comenzar");

//Agrego un event listener clic al botòn comenzar
btnComenzar.addEventListener("click", () => {
    if (nombre.value.trim() === "") {
        alert("Por favor, ingresa tu nombre.");
        return;
    }
    localStorage.setItem("nombre", nombre.value);
    localStorage.setItem("puntaje-total", 0);
    localStorage.removeItem("categorias-jugadas");
    location.href = "menu.html";
});

