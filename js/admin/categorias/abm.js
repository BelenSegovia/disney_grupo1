import { agregarCategoriaLS, cargarTabla, obtenerCategoriasDeLS } from "./abmUtils.js";

export const añadirCategoria = (categoria) => {

    agregarCategoriaLS(categoria);

    swal.fire({
        title: "Exito",
        text: "Categoria agregada exitosamente",
        icon: "success",
    })
}

export const editarCategoria = () => {};

export const eliminarCategoria = (categoria) => {
    swal.fire({
        title: "¿Estas seguro?",
        text: "Esta opcion no será reversible",
        icon: "warning",
        showCancelButton: true,
        cancelButtonText: 'Cancelar',
        confirmButtonText: 'Si, eliminar'
    }).then((action)=>{
        if(action.isConfirmed){
           const categorias = obtenerCategoriasDeLS();
           
           const listaFiltrada = categorias.filter((item)=>item !== categoria);
           
           localStorage.setItem('categorias', JSON.stringify(listaFiltrada));

           swal.fire({
            title: "Exito",
            text: "La categoria se eliminó exitosamente",
            icon: "success"
            });

            cargarTabla()

        } 
    })
}



