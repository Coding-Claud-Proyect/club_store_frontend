<template>
  <v-app>
    <div id="app">
      <v-container class="justify-center">
        <v-row>
          <v-col cols="12">
            <v-card color="#ECEFF1">
              <v-img
                src="./assets/Club_Store.jpg"
                max-height="125"
                contain
              ></v-img>
            </v-card>
          </v-col>
        </v-row>
        <v-app-bar color="#37474F" dense>
          <v-btn color="#90A4AE" elevation="2" @click="home()">HOME</v-btn>
          <v-btn color="#90A4AE" elevation="2" @click="qSomos()"
            >¿QUIENES SOMOS?</v-btn
          >
          <v-btn color="#90A4AE" elevation="2" @click="contactenos()"
            >CONTACTENOS</v-btn
          >
        </v-app-bar>
      </v-container>
      <v-container>
        <router-view />
      </v-container>
      <v-footer dark padless>
        <v-card class="flex" flat tile>
          <v-card-title class="teal">
            <strong class="subheading"
              >También puedes seguirnos en nuestras redes sociales para mayor
              información</strong
            >
            <v-spacer></v-spacer>
            <v-btn v-for="icon in icons" :key="icon" class="mx-4" dark icon>
              <v-icon size="24px">
                {{ icon }}
              </v-icon>
            </v-btn>
          </v-card-title>

          <v-card-text class="py-2 white--text text-center">
            {{ new Date().getFullYear() }}
            <strong>@Copyrigth - Todos los derechos reservados</strong>
          </v-card-text>
        </v-card>
      </v-footer>
    </div>
  </v-app>
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background-color: #cfd8dc;
}
</style>
<script lang="ts">
export default {
  data: () => ({
    icons: ["mdi-facebook", "mdi-twitter", "mdi-linkedin", "mdi-instagram"],
  }),
  methods: {
    home() {
      this.$router.push("/");
    },
    qSomos() {
      this.$router.push("/quienes_somos");
    },
    contactenos() {
      this.$router.push("/contactenos");
    },
  },
};
</script>