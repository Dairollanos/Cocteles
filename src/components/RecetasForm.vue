<template>
  <v-container>
    <v-row class="justify-center"
      ><v-col>
        <form @submit.prevent="consultar">
          <v-select
            :items="items"
            label="INDICE"
            v-model="indice"
            @change="BuscarIndice"
          ></v-select>
          <v-radio-group v-model="tipo" row mandatory id="radio">
            <v-radio label="Nombre Coctel" value="nombre"></v-radio>
            <v-radio label="Ingrediente Coctel" value="ingrediente"></v-radio>
          </v-radio-group>
          <v-text-field
            filled
            v-model="input"
            append-icon="mdi-glass-flute"
          ></v-text-field></form></v-col
    ></v-row>
    <v-row class="justify-end"
      ><v-btn depressed color="success" @click="aleatorio" id="boton">
        Coctel aleatorio
      </v-btn></v-row
    >
  </v-container>
</template>

<script>
import { mapActions } from "vuex";
export default {
  data() {
    return {
      items: "abcdefghijklmnopqrstuvwxyz".split(""),
    };
  },
  computed: {
    tipo: {
      get() {
        return this.$store.getters.Tipo;
      },
      set(value) {
        this.$store.commit("ActualizarTipo", value);
      },
    },
    input: {
      get() {
        return this.$store.getters.Input;
      },
      set(value) {
        this.$store.commit("ActualizarInput", value);
      },
    },
    input: {
      get() {
        return this.$store.getters.Input;
      },
      set(value) {
        this.$store.commit("ActualizarInput", value);
      },
    },
    indice: {
      get() {
        return this.$store.getters.Indice;
      },
      set(value) {
        this.$store.commit("ActualizarIndice", value);
      },
    },
  },
  methods: {
    ...mapActions(["consultar", "aleatorio", "BuscarIndice"]),
  },
};
</script>

<style>
#radio,
#boton {
  font-weight: 900;
  text-transform: uppercase;
}
</style>
