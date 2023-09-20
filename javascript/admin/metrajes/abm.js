import { Metraje } from "./Metraje.js"
import { agregarMetraje, obtenerMetrajeDeLS, cargarTabla } from "./abmUtils.js";

export const añadirMetraje = (nombre, descripcion, tipo, categoria, imagen) => {
    const nuevoMetraje = new Metraje(nombre, descripcion, tipo, categoria, imagen);

    agregarMetraje(nuevoMetraje);

    swal.fire({
        title: "Exito",
        text: "Metraje agregado exitosamente",
        icon: "success"
    })
};

export const eliminarMetraje = (id) => {
    swal.fire({
        title: "¿Estas seguro?",
        text: "Esta opcion no será reversible",
        icon: "warning",
        showCancelButton: true,
        cancelButtonText: 'Cancelar',
        confirmButtonText: 'Si, eliminar'
    }).then((action)=>{
        if(action.isConfirmed){
           const metrajes = obtenerMetrajeDeLS();
           
           const listaFiltrada = metrajes.filter((item)=>item.id !== id);
           
           localStorage.setItem('metrajes', JSON.stringify(listaFiltrada));

           swal.fire({
            title: "Exito",
            text: "El metraje se eliminó exitosamente",
            icon: "success"
            });

            cargarTabla()

        } 
    })
}