import { eliminarMetraje } from "./abm.js";


export const obtenerMetrajeDeLS = () => {
    return JSON.parse(localStorage.getItem('metrajes')) || [];
}

export const agregarMetraje = (nuevoMetraje) => {
    const metrajes = obtenerMetrajeDeLS();
    metrajes.push(nuevoMetraje);

    localStorage.setItem('metrajes', JSON.stringify(metrajes));
}

export const crearFilaTabla = (metraje, indice) => {
    const tbody = document.getElementById('tbody-metrajes');
    const tr = document.createElement('tr');

    //Indice

    const tdIndice = document.createElement('td');
    tdIndice.innerText = indice;
    tr.appendChild(tdIndice);

    //Imagen

    const tdImagen = document.createElement('td');
    const img = document.createElement('img');
    img.src = metraje.imagen;
    img.alt = metraje.nombre;
    img.classList.add('imagen-tabla');
    tdImagen.appendChild(img);
    tr.appendChild(tdImagen);

    //Nombre

    const tdNombre = document.createElement('td');
    tdNombre.innerText = metraje.nombre;
    tr.appendChild(tdNombre);

    //Tipo

    const tdTipo = document.createElement('td');
    tdTipo.innerText = metraje.tipo;
    tr.appendChild(tdTipo);

    //Categoria
    const tdCategoria = document.createElement('td');
    tdCategoria.innerText = metraje.categoria;
    tr.appendChild(tdCategoria);

    //Descripcion
    const tdDescripcion = document.createElement('td');
    tdDescripcion.innerText = metraje.descripcion;
    tr.appendChild(tdDescripcion);

    //Botones
    const tdBotones = document.createElement('td');
    const btnEditar = document.createElement('button');
    const btnEliminar = document.createElement('button');

    tdBotones.classList.add('d-flex', 'gap')
    btnEditar.type = "button"
    btnEliminar.type = "button"
    btnEditar.classList.add('btn', 'btn-warning', 'btn-sm', 'me-2');
    btnEliminar.classList.add('btn', 'btn-danger', 'btn-sm');
    btnEditar.innerText = "Editar";
    btnEliminar.innerText = "Eliminar";


    btnEditar.onclick = () => {
        console.log(`Editar ${metraje.id}`)
    }

    btnEliminar.onclick = () => {
        eliminarMetraje(metraje.id)
    }
    
    tdBotones.appendChild(btnEditar);
    tdBotones.appendChild(btnEliminar);

    tr.appendChild(tdBotones)

    tbody.appendChild(tr);
}

export const cargarTabla = () => {
    const metrajes = obtenerMetrajeDeLS();

    //Vaciar tabla

    const tbody = document.getElementById('tbody-metrajes');
    tbody.innerHTML = '';

    //Crear tabla

    metrajes.forEach((metraje, indice) => {
        crearFilaTabla(metraje, indice)
    });
}

export const cargarSelectCategorias = (categoria, indice) => {
    const selectCategorias = document.getElementById('select-categorias');
  
    const option = document.createElement('option');
  
    option.innerText = categoria;
    option.value = indice;
  
    selectCategorias.appendChild(option);
  };