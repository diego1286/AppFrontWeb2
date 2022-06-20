
import { axiosConfig } from "../config/axiosConfig";

export const obtenerTodos = () => {
    return axiosConfig.get(
        '/estados'
    );
}


export const guardar=(estado)=>{
    return axiosConfig.post('/estados', estado)// estado es el body que recibe el metodo del formulario del front 
};// se crea el metodo para guardar los estadops en el axios config para pasarlos a la bd 


export const editarPorId = (id, estado) => {
    return axiosConfig.put('/estados/'+id, estado);
  }
  