import { cargarTabla } from "./indexUtils.js";


    window.addEventListener('load', cargarTabla);

// BUSCADOR 

document.addEventListener('DOMContentLoaded', () => {
    const buscador = document.getElementById('buscador');

    buscador.addEventListener('keyup', () => {
        const searchTerm = buscador.value.toLowerCase();
        const cards = document.querySelectorAll('.card-disney');

        cards.forEach(card => {
            const name = card.getAttribute('name').toLowerCase();
            if (name.includes(searchTerm)) {
                card.style.display = 'block'; // Mostrar tarjeta si coincide
            } else {
                card.style.display = 'none'; // Ocultar tarjeta si no coincide
            }
        });
    });
});
