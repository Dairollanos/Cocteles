<template>
  <v-app>
    <v-container>
      <v-row class="justify-center"
        ><v-col cols="12"
          ><v-card elevation="5" outlined shaped id="titulo"
            ><h1 class="text-center">
              COCTELES <v-icon x-large>mdi-glass-cocktail</v-icon>
            </h1></v-card
          >
        </v-col></v-row
      ><v-card elevation="3" outlined shaped tile id="cuerpo"
        ><v-row class="justify-center"
          ><v-col cols="10"><recetas-form /></v-col
        ></v-row>
        <v-row class="justify-center"
          ><v-col cols="10"><recetas-card /></v-col></v-row
      ></v-card>
    </v-container>
  </v-app>
</template>

<script>
import RecetasCard from "./components/RecetasCard.vue";
import RecetasForm from "./components/RecetasForm.vue";
export default {
  name: "App",

  components: { RecetasForm, RecetasCard },
};
</script>
<style>
#app {
  background-image: url("https://www.elegantthemes.com/blog/wp-content/uploads/2013/09/bg-9-full.jpg");
}
h1 {
  font-size: 45px;
}
#titulo {
  background-color: #b0bec5;
}
#cuerpo {
  background-color: #eeeeee;
  margin-top: 20px;
  opacity: 0.8;
}
</style>
