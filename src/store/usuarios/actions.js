/*
export function someAction (context) {
}
*/

import { axios } from "src/boot/axios";

export function logar({ commit }, { username, password }) {
    return axios.post("/login/", { username, password }).then(r => {
        commit("setToken", r.data.token);
    });
}
