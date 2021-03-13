import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    cocteles: [],
    tipo: "",
    input: "",
    indice: "",
  },
  getters: {
    Tipo: (state) => state.tipo,
    Input: (state) => state.input,
    Indice: (state) => state.indice,
  },
  mutations: {
    FijarCocteles(state, cocteles) {
      state.cocteles = cocteles;
      state.cocteles = state.cocteles.drinks;
      state.input = "";
      console.log(state.cocteles);
    },
    ActualizarTipo(state, valor) {
      state.tipo = valor;
    },
    ActualizarInput(state, valor) {
      state.input = valor;
    },
    ActualizarIndice(state, valor) {
      state.indice = valor;
    },
  },
  actions: {
    async consultar({ commit, state }) {
      if (state.tipo === "nombre") {
        const res = await fetch(
          `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${state.input}`
        );
        const jsonrespuesta = await res.json();

        commit("FijarCocteles", jsonrespuesta);
      } else {
        const res = await fetch(
          `https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${state.input}`
        );
        const jsonrespuesta = await res.json();

        commit("FijarCocteles", jsonrespuesta);
      }
    },
    async aleatorio({ commit, state }) {
      const res = await fetch(
        `https://www.thecocktaildb.com/api/json/v1/1/random.php`
      );
      const jsonrespuesta = await res.json();

      commit("FijarCocteles", jsonrespuesta);
    },
    async BuscarIndice({ commit, state }) {
      const res = await fetch(
        `https://www.thecocktaildb.com/api/json/v1/1/search.php?f=${state.indice}`
      );
      const jsonrespuesta = await res.json();

      commit("FijarCocteles", jsonrespuesta);
    },
  },
  modules: {},
});
