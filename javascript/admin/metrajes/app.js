
import { validateCategoria, validateDescripcion, validateImagen, validateNombre, validateTipo } from "../validators.js";
import { añadirMetraje } from "./abm.js";
import { obtenerCategoriasDeLS } from "../categorias/abmUtils.js"
import { cargarSelectCategorias, cargarTabla } from "./abmUtils.js";


window.addEventListener('load', cargarTabla);

const categorias = obtenerCategoriasDeLS();

categorias.forEach((categoria, indice) => {
    cargarSelectCategorias(categoria, indice);
  });

const campoNombre = document.getElementById('input-nombre');
const campoTipo = document.getElementById('input-tipo');
const campoImagen = document.getElementById('input-imagen');
const campoDescripcion = document.getElementById('input-descripcion');
const campoCategoria = document.getElementById('select-categorias')
const form = document.getElementById('form');

campoNombre.addEventListener('blur', (e) => {
    const value = e.target.value;
    validateNombre(value, campoNombre)
})

campoTipo.addEventListener('blur', (e) => {
    const value = e.target.value;
    validateTipo(value, campoTipo)
})

campoImagen.addEventListener('blur', (e) => {
    const value = e.target.value;
    validateImagen(value, campoImagen)
})

campoDescripcion.addEventListener('blur', (e) => {
    const value = e.target.value;
    validateDescripcion(value, campoDescripcion)
})

campoCategoria.addEventListener('blur', (e) => {
    const value = e.target.value;
    validateCategoria(value, campoCategoria)
})


form.addEventListener('submit', (e) => {
    e.preventDefault()

    let nombre = campoNombre.value;
    let tipo = campoTipo.value;
    let imagen = campoImagen.value;
    let descripcion = campoDescripcion.value;
    let categoria = campoCategoria.value

    if(
        validateNombre(nombre, campoNombre) && 
        validateTipo(tipo, campoTipo) && 
        validateImagen(imagen, campoImagen) && 
        validateDescripcion(descripcion, campoDescripcion) &&
        validateCategoria(categoria, campoCategoria)){
            //Crear categoria
        añadirMetraje(nombre, descripcion, tipo, categoria, imagen);

        //Recargar tabla
        cargarTabla();

        //Vaciar campos
        form.reset();

        //Resetear clases
        campoCategoria.classList.remove('is-valid', 'is-invalid');
        campoNombre.classList.remove('is-valid', 'is-invalid')
        campoImagen.classList.remove('is-valid', 'is-invalid')
        campoDescripcion.classList.remove('is-valid', 'is-invalid')
        campoTipo.classList.remove('is-valid', 'is-invalid')

        }
})