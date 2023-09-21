import { obtenerCategoriasDeLS } from "./categorias/abmUtils.js";

export const validateNombre = (value, campo) => {
    //Minimo nombre
    if(value.trim().length <= 2) {
        campo.classList.remove('is-valid');
        campo.classList.add('is-invalid');
        return false;
    } 

    //Maximo nombre
    if(value.trim().length >= 100) {
        campo.classList.remove('is-valid');
        campo.classList.add('is-invalid');
        return false;
    }

    campo.classList.remove('is-invalid');
    campo.classList.add('is-valid');
    return true;
}

export const validateDescripcion = (value, campo) => {
    //Minimo descripcion
    if(value.trim().length <= 30) {
        campo.classList.remove('is-valid');
        campo.classList.add('is-invalid');
        return false;
    } 

    //Maximo descripcion
    if(value.trim().length >= 300) {
        campo.classList.remove('is-valid');
        campo.classList.add('is-invalid');
        return false;
    }

    campo.classList.remove('is-invalid');
    campo.classList.add('is-valid');
    return true;
}

export const validateImagen = (value, campo) => {
    //Cantidad de digitos menor a 4
    if(value.trim().length < 4) {
        campo.classList.remove('is-valid');
        campo.classList.add('is-invalid');
        return false;
    } 

    //Cantidad de digitos mayor a 300
    if(value.trim().length > 600) {
        campo.classList.remove('is-valid');
        campo.classList.add('is-invalid');
        return false;
    }

    const regex = /^(https?|ftp):\/\/[^\s/$.?#].[^\s]*$/;

    if(!regex.test(value)){
        campo.classList.remove('is-valid');
        campo.classList.add('is-invalid');
        return false;
    }

    campo.classList.remove('is-invalid');
    campo.classList.add('is-valid');
    return true;
}

export const validateTipo = (value, campo) => {
    //Si es pelicula/serie
    if(Number(value) === 0) {
        campo.classList.remove('is-valid');
        campo.classList.add('is-invalid');
        return false;
    } 

    campo.classList.remove('is-invalid');
    campo.classList.add('is-valid');
    return true;
}

export const validateCategoria = (value, campo) => {
    // Si el campo está vacío o es solo un signo #, marca como inválido
    if (value.trim() === "" || value.trim() === "#") {
        campo.classList.remove('is-valid');
        campo.classList.add('is-invalid');
        return false;
    }

    // Obtén las categorías existentes
    const categorias = obtenerCategoriasDeLS();

    // Verifica si la categoría ya existe (comparando en mayúsculas y minúsculas)
    const categoriaExistente = categorias.find(c => c.toLowerCase() === value.toLowerCase());

    if (categoriaExistente) {
        campo.classList.remove('is-valid');
        campo.classList.add('is-invalid');
        return false;
    }

    campo.classList.remove('is-invalid');
    campo.classList.add('is-valid');
    return true;
}
