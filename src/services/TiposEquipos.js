import { axiosConfig } from "../config/axiosConfig"

export const obtenerTodosEquipos = () => {
  return axiosConfig.get(
      '/tiposEquipos'
  );
}