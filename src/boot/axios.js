import Vue from 'vue'
import axios from 'axios'
import router from 'src/router'

Vue.prototype.$axios = axios

const api = axios.create({ baseURL: 'https://meusgames-api.herokuapp.com/' })

Vue.prototype.$api = api

// api.interceptors.response.use(
//     function (response) {
//         // Resposta com sucesso
//         return response;
//     }, 
//     function (error) {
//         console.log(error);
//         // Resposta com erro
//         if (error.response?.status == 401) {
//             //router.push('/login');
//             //return Promise.reject(error);
//         }

//         return error;
//     }    
// );

export { axios, api }
