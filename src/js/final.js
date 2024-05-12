document.addEventListener('DOMContentLoaded', function() {
    const txtPuntaje = document.querySelector("#puntos");
    const nombre = document.querySelector("#nombre");
    const nombreJugador = document.querySelector("#nombre-jugador");
    const puntajeFinal = document.querySelector("#puntaje-final");
    const totalAcertadas = document.querySelector("#total-acertadas");
    const totalNoAcertadas = document.querySelector("#total-no-acertadas");
    const btnComenzar = document.querySelector("#btn-comenzar");

    nombre.textContent = localStorage.getItem("nombre") || 'Jugador Anónimo';
    nombreJugador.textContent = nombre.textContent;
    txtPuntaje.textContent = parseInt(localStorage.getItem("puntaje-total")) || 0;
    puntajeFinal.textContent = txtPuntaje.textContent + " Puntos";

    const correctas = parseInt(localStorage.getItem("puntaje-total")) / 100 || 0;
    const incorrectas = 30 - correctas; // Asumiendo un total de 30 preguntas
    totalAcertadas.textContent = correctas;
    totalNoAcertadas.textContent = incorrectas;

    btnComenzar.addEventListener("click", () => {
        localStorage.clear();
        location.href = "index.html";
    });

    // Inicialización del gráfico
    mostrarGrafico(correctas, incorrectas);
});

function mostrarGrafico(correctas, incorrectas) {
    const ctx = document.getElementById('premiosChart').getContext('2d');
    const premiosChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ['Acertadas', 'Incorrectas'],
            datasets: [{
                label: 'Resultados del Quiz',
                data: [correctas, incorrectas],
                backgroundColor: [
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 99, 132, 0.2)'
                ],
                borderColor: [
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 99, 132, 1)'
                ],
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });
}
