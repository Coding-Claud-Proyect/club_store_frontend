<template>
  <v-card class="overflow-hidden">
    <v-app-bar
      absolute
      dark
      shrink-on-scroll
      prominent
      fade-img-on-scroll
      scroll-target="#scrolling-techniques-4"
    >
      <v-col cols="12">
        <v-card>
          <v-img
            src="./assets/Club_Store.jpg"
            max-height="125"
            contain
            class="grey lighten-3"
          ></v-img>
        </v-card>
      </v-col>
      <template v-slot:extension>
        <v-tabs align-with-title>
          <v-tab>Home</v-tab>
          <v-tab>Oferta del Día</v-tab>
          <v-tab>Articulos</v-tab>
          <v-tab>¿Quienes Somos?</v-tab>
          <v-tab>Contactenos</v-tab>
        </v-tabs>
      </template>
    </v-app-bar>
    <!-- <v-main>
      <HelloWorld />
    </v-main> -->
    <v-sheet
      id="scrolling-techniques-4"
      class="overflow-y-auto"
      max-height="600"
    >
      <v-container style="height: 100%"></v-container>
    </v-sheet>
  </v-card>
</template>

<script>
import HelloWorld from "./components/HelloWorld";

export default {
  name: "App",

  components: {
    HelloWorld,
  },

  data: () => ({}),
};
</script>
