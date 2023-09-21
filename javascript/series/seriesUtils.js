import { obtenerMetrajeDeLS } from "../admin/metrajes/abmUtils.js";

export const crearGrid = (metraje) => {
    const gridBody = document.querySelector('.grid-tendencias');
    const divCard = document.createElement('div');
    divCard.classList.add("card-disney");

    //Imagen

    const cardImagen = document.createElement('div');
    const img = document.createElement('img');
    img.src = metraje.imagen;
    img.alt = metraje.nombre;
    cardImagen.classList.add('item-border')
    img.classList.add('item-image');
    cardImagen.appendChild(img);
    divCard.appendChild(cardImagen);

    

    gridBody.appendChild(divCard);
}

export const cargarTabla = () => {
    const metrajes = obtenerMetrajeDeLS();
    const series = metrajes.filter(metraje => metraje.tipo === "Serie");
    console.log(series)
    //Vaciar tabla

    const gridBody = document.querySelector('.grid-tendencias');
    gridBody.innerHTML = '';

    //Crear tabla

    series.forEach((metraje) => {
        crearGrid(metraje)
    });
}