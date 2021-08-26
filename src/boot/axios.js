import Vue from "vue";
import axios from "axios";

Vue.prototype.$axios = axios;

const api = axios.create({ baseURL: "https://meusgames-api.herokuapp.com/" });

api.defaults.validateStatus = status => {
  return status >= 200 && status < 300;
};

Vue.prototype.$api = api;

export { axios, api };
