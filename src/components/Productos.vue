<template>
  <v-container>
    <v-row>
      <v-col cols="4" v-for="(producto, index) in productos" :key="index">
        <v-card class="mx-auto my-12" max-width="374">
          <template slot="progress">
            <v-progress-linear
              color="deep-purple"
              height="10"
              indeterminate
            ></v-progress-linear>
          </template>

          <v-img height="250" :src="producto.imagen"></v-img>

          <v-card-title>{{ producto.nombre }}</v-card-title>

          <v-card-text>
            <v-row align="center" class="mx-0">
              <v-rating
                :value="Math.floor(Math.random() * (5 - 1 + 1)) + 1"
                color="amber"
                dense
                half-increments
                readonly
                size="14"
              ></v-rating>
            </v-row>

            <div class="my-4 text-subtitle-1" v-if="!producto.oferta">
              $ • {{ producto.valorUnitario }}
            </div>
            <div class="my-4 text-subtitle-1" v-else>
              $ • <del>{{ producto.valorUnitario }}</del> - 50% dto.
            </div>

            <div>
              {{ producto.descripcion }}
            </div>
          </v-card-text>

          <v-divider class="mx-4"></v-divider>

          <v-card-title
            >Unidades Existentes:
            {{ Math.floor(Math.random() * (100 - 1 + 1)) + 1 }}</v-card-title
          >

          <v-card-actions>
            <v-btn color="deep-purple lighten-2" text>
              Añadir al carrito
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      productos: [],
      selection: 1,
    };
  },
  created() {
    this.listarProductos();
  },
  methods: {
    listarProductos() {
      this.axios
        .get("/listarProductos")
        .then((res) => {
          this.productos = res.data;
        })
        .catch((err) => {
          console.error(err.response);
        });
    },
  },
};
</script>

<style>
</style>