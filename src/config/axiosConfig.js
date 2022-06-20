import axios from 'axios'


export const axiosConfig= axios.create({
    baseURL: process.env.REACT_APP_BASE_URL
});

axiosConfig.interceptors.response.use(// intecerptor del axios para verificar las sessiones 
    response => {
        return response;
    },
    error => {
        if(error && error.response && (error.response.status === 401 || error.response.status === 403)){
            window.location.pathname = '/'; // esto redirecciona a la raiz 
        }
        return Promise.reject(error);
    });