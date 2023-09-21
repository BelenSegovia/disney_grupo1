import { obtenerMetrajeDeLS } from "../admin/metrajes/abmUtils.js";

export const cargarTabla = () => {
    const metrajes = obtenerMetrajeDeLS();


    const gridBody = document.querySelector('.grid-tendencias');
    gridBody.innerHTML = '';


    metrajes.forEach((metraje) => {
        crearTarjetaYModal(metraje);
    });
};

export const crearTarjetaYModal = (metraje) => {
    const gridBody = document.querySelector('.grid-tendencias');
    const divCard = document.createElement('div');
    divCard.classList.add("card-disney");
    divCard.getAttribute('name');
    divCard.name = metraje.nombre;


    const cardImagen = document.createElement('div');
    const img = document.createElement('img');
    img.src = metraje.imagen;
    img.alt = metraje.nombre;
    cardImagen.classList.add('item-border');
    img.classList.add('item-image');
    cardImagen.appendChild(img);
    divCard.appendChild(cardImagen);


    divCard.addEventListener('click', (e) => {
        e.preventDefault();
        mostrarModalDetalle(metraje);
    });

    gridBody.appendChild(divCard);
};

export const mostrarModalDetalle = (metraje) => {
    const modal = document.querySelector('.modal');
    const titulo = modal.querySelector('.modal__title');
    const categoria = modal.querySelector('.modal__category');
    const descripcion = modal.querySelector('.modal__paragraph');
    const imgModal = modal.querySelector('.modal__image img');
    const btnCerrar = modal.querySelector('.modal__close');

    titulo.innerText = metraje.nombre;
    categoria.innerText = `Categoría: ${metraje.categoria}`;
    descripcion.innerText = metraje.descripcion;
    imgModal.src = metraje.imagen;
    imgModal.alt = metraje.nombre;


    modal.classList.add('modal--show');


    btnCerrar.addEventListener('click', (e) => {
        e.preventDefault();

        modal.classList.remove('modal--show');
    });
};
