//------------------------------------
//             Categorias
//------------------------------------

export const obtenerCategoriasDeLS = () => {
    return JSON.parse(localStorage.getItem('categorias')) || [];
}

export const agregarCategoriaLS = (categoria) => {
    const categorias = obtenerCategoriasDeLS();
    categorias.push(categoria);
    localStorage.setItem('categorias', JSON.stringify(categorias));
}

export const crearFilaTabla = (categoria, indice) => {
    const tbody = document.getElementById('tbody-categorias');
    const tr = document.createElement('tr');

    //Indice

    const tdIndice = document.createElement('td');
    tdIndice.innerText = indice;
    tr.appendChild(tdIndice);

    //Categoria

    const tdCategoria = document.createElement('td');
    tdCategoria.innerText = categoria;
    tr.appendChild(tdCategoria);

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
        console.log(`Editar ${categoria}`)
    }

    btnEliminar.onclick = () => {
        console.log(`Eliminar ${categoria}`)
    }
    
    tdBotones.appendChild(btnEditar);
    tdBotones.appendChild(btnEliminar);

    tr.appendChild(tdBotones)

    tbody.appendChild(tr);
}

export const cargarTabla = () => {
    const categorias = obtenerCategoriasDeLS();

    //Vaciar tabla

    const tbody = document.getElementById('tbody-categorias');
    tbody.innerHTML = ''

    //Crear tabla

    categorias.forEach((categoria, indice) => {
        crearFilaTabla(categoria, indice)
    });
}