import Vue from "vue";
import axios from "axios";

Vue.prototype.$axios = axios;

const api = axios.create({ baseURL: "https://meusgames-api.herokuapp.com/" });

api.interceptors.response.use(
  function(response) {
    handleDates(response.data);
    return response;
  },
  function(error) {
    if (error.response?.status == 401) {
      Notify.create({
        type: "negative",
        message: "É necessário efetuar o login"
      });
      router.push("/login/entrar");
      return Promise.reject(error);
    }

    return error;
  }
);

Vue.prototype.$api = api;

export { axios, api };
