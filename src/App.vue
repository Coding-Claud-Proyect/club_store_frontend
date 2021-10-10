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
          <v-btn color="#90A4AE" elevation="2" @click="ofertas()"
            >OFERTAS</v-btn
          >
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
  methods: {
    home() {
      this.$router.push("/");
    },
    ofertas() {
      this.$router.push("/ofertas");
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