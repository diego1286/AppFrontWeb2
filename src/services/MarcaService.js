
import { axiosConfig } from "../config/axiosConfig";

export const obtenerTodasMarcas = () => {
    return axiosConfig.get(
        '/marcas'
    );
}


export const guardarMarcas=(marca)=>{
    return axiosConfig.post('/estados', marca)// estado es el body que recibe el metodo del formulario del front 
};// se crea el metodo para guardar los estadops en el axios config para pasarlos a la bd 


export const editarPorIdMarcas = (id, marca) => {
    return axiosConfig.put('/marcas/'+id, marca);
  }
  