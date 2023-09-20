import { cargarTabla } from "./indexUtils.js";

window.addEventListener('load', cargarTabla);

const cards = document.querySelectorAll('.card-disney');

cards.forEach(card => {
  card.addEventListener('click', () => {
    console.log('Hola en la consola');
  });
});
