import { obtenerMetrajeDeLS } from "../admin/metrajes/abmUtils.js";

export const cargarTabla = () => {
    const metrajes = obtenerMetrajeDeLS();

    // Vaciar tabla
    const gridBody = document.querySelector('.grid-tendencias');
    gridBody.innerHTML = '';

    // Crear tarjetas y modales para cada metraje
    metrajes.forEach((metraje) => {
        crearTarjetaYModal(metraje);
    });
};

export const crearTarjetaYModal = (metraje) => {
    const gridBody = document.querySelector('.grid-tendencias');
    const divCard = document.createElement('div');
    divCard.classList.add("card-disney");

    // Imagen en la tarjeta
    const cardImagen = document.createElement('div');
    const img = document.createElement('img');
    img.src = metraje.imagen;
    img.alt = metraje.nombre;
    cardImagen.classList.add('item-border')
    img.classList.add('item-image');
    cardImagen.appendChild(img);
    divCard.appendChild(cardImagen);

    // Evento clic en la tarjeta
    divCard.addEventListener('click', (e) => {
        e.preventDefault();
        mostrarModalDetalle(metraje);
    });

    gridBody.appendChild(divCard);
};

export const mostrarModalDetalle = (metraje) => {
    const modal = document.querySelector('.modal');
    const titulo = modal.querySelector('.modal__title');
    const descripcion = modal.querySelector('.modal__paragraph');
    const imgModal = modal.querySelector('.modal__image img');
    const btnCerrar = modal.querySelector('.modal__close');

    titulo.innerText = metraje.nombre;
    descripcion.innerText = metraje.descripcion;
    imgModal.src = metraje.imagen;
    imgModal.alt = metraje.nombre;

    // Mostrar modal
    modal.classList.add('modal--show');

    // Evento clic en el botón de cierre del modal
    btnCerrar.addEventListener('click', (e) => {
        e.preventDefault();
        // Ocultar modal
        modal.classList.remove('modal--show');
    });
};
