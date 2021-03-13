<template>
  <v-row class="justify-center">
    <v-col cols="4" v-for="coctel in cocteles" :key="coctel.id">
      <v-card class="mx-auto" max-width="400" id="carta">
        <v-img
          class="white--text align-end"
          height="300px"
          :src="coctel.strDrinkThumb"
        >
          <v-card-title>{{ coctel.strDrink }}</v-card-title>
        </v-img>

        <v-card-subtitle class="pb-1">
          {{ coctel.strAlcoholic }}
        </v-card-subtitle>

        <v-card-text class="text--primary">
          <div>{{ coctel.strIngredient1 }}</div>
          <div>{{ coctel.strIngredient2 }}</div>
          <div>{{ coctel.strIngredient3 }}</div>
          <div>{{ coctel.strIngredient4 }}</div>
          <div>{{ coctel.strIngredient5 }}</div>
          <div>{{ coctel.strIngredient6 }}</div>
          <div>{{ coctel.strIngredient7 }}</div>
          <div>{{ coctel.strIngredient8 }}</div>
          <div>{{ coctel.strIngredient9 }}</div>
        </v-card-text>
      </v-card></v-col
    ><v-col cols="10"
      ><h2 class="text-center" v-if="cocteles.length == 0">
        <v-icon x-large>mdi-magnify</v-icon> Busca tu coctel favorito
        <v-icon x-large>mdi-glass-mug-variant</v-icon>
      </h2></v-col
    >
  </v-row>
</template>

<script>
import { mapState } from "vuex";
export default {
  computed: {
    ...mapState(["cocteles"]),
  },
};
</script>

<style scoped>
h2 {
  text-transform: uppercase;
  font-style: italic;
  font-weight: 900;
}
#carta {
  opacity: initial;
}
</style>
