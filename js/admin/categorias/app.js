import { cargarTabla } from "./abmUtils.js";
import { validateCategoria } from "../validators.js";
import { añadirCategoria } from "./abm.js";

window.addEventListener('load', cargarTabla);

const campoCategoria = document.getElementById("input-categoria");
const formCategoria = document.getElementById('form-categoria');



campoCategoria.addEventListener('blur', (e) => {
    const value = e.target.value
    validateCategoria(value, campoCategoria)
    
})

formCategoria.addEventListener('submit', (e) => {
    e.preventDefault();

    let categoria = campoCategoria.value;

    if(validateCategoria(categoria, campoCategoria)){
        
        //Crear categoria
        añadirCategoria(categoria);

        //Recargar tabla
        cargarTabla();

        //Vaciar campos
        formCategoria.reset();

        //Resetear clases
        campoCategoria.classList.remove('is-valid', 'is-invalid')

    }
});

