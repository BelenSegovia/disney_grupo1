import { agregarCategoriaLS } from "./abmUtils.js";

export const añadirCategoria = (categoria) => {

    agregarCategoriaLS(categoria);

    swal.fire({
        title: "Exito",
        text: "Categoria agregada exitosamente",
        icon: "success",
    })
}