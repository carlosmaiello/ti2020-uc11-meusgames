import Vue from "vue";
import axios from "axios";
import { Notify } from "quasar";
import handleDates from "src/services/handleDates";
import router from "src/router";

Vue.prototype.$axios = axios;

const api = axios.create({ baseURL: "https://meusgames-api.herokuapp.com/" });

api.interceptors.response.use(
  function(response) {
    handleDates(response.data);
    return response;
  },
  function(error) {
    if (error.response?.status == 401) {
      // Notify.create({
      //   type: "negative",
      //   message: "É necessário efetuar o login"
      // });
      //router.push("/login");
      return Promise.reject(error);
    }

    return error;
  }
);

Vue.prototype.$api = api;

export { axios, api };
