// Tomamos los elementos HTML
const txtPuntaje = document.querySelector("#puntos");
const nombreJugador = document.querySelector("#nombre-jugador");

// Actualizar la UI con los datos del jugador
function actualizarDatosJugador() {
    const nombre = localStorage.getItem("nombre") || 'Jugador';
    nombreJugador.textContent = nombre;
    const puntajeTotal = localStorage.getItem("puntaje-total") || '0';
    txtPuntaje.textContent = puntajeTotal;
}

// Función para agregar eventos a las categorías
function agregarEventosACategorias() {
    const categorias = document.querySelectorAll(".categoria");
    categorias.forEach(categoria => {
        categoria.addEventListener("click", function() {
            const categoriaId = this.id;
            localStorage.setItem("categoria-actual", categoriaId);
            window.location.href = "juego.html";
        });
    });
}

// Inicializar la página
function init() {
    actualizarDatosJugador();
    agregarEventosACategorias();
}

init();
