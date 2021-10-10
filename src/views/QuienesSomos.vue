<template>
  <v-container>
    <v-row>
      <v-col cols="12">
        <v-carousel
          cycle
          height="400"
          hide-delimiter-background
          show-arrows-on-hover
        >
          <v-carousel-item v-for="(item, i) in items" :key="i" :src="item.src">
          </v-carousel-item>
        </v-carousel>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="6">
        <v-card
          class="mx-auto justify-center"
          color="#C5CAE9"
          max-width="700"
          elevation="24"
        >
          <v-card-text class="text-h5 font-weight-bold">
            La misión de Club Store está basada en ofrecer al publico en general
            una gran variedad de productos, tanto de la canasta familiar, como
            ropa para damas, caballeros y niños, accesorios, ocio, videojuegos y
            tecnología, etc. Como se podran dar cuenta, es un sistema libre para
            cualquier tipo de persona que desee comprar o vender productos, lo
            cual hará que todas las partes se beneficien con el uso de la
            herramienta.
          </v-card-text>
        </v-card>
      </v-col>
      <v-col cols="5" offset="1">
        <v-img
          lazy-src="../assets/mision.png"
          max-height="300"
          max-width="500"
          src="../assets/mision.png"
        ></v-img>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="6">
        <v-img
          lazy-src="../assets/vision.png"
          max-height="300"
          max-width="450"
          src="../assets/vision.png"
        ></v-img>
      </v-col>
      <v-col cols="6">
        <v-card
          class="mx-auto justify-center"
          color="#C5CAE9"
          max-width="700"
          elevation="24"
        >
          <v-card-text class="text-h5 font-weight-bold">
            La visión de Club Store se orienta a lograr que en un futuro cercano
            varias marcas registradas logren tener la confianza en nuestra
            plataforma para que se puedan ofrecer sus productos de una forma
            segura a los clientes, los cuales son nuestra principal prioridad,
            además de que tengan la satisfacción de que se pueda vender y
            recibir un producto en el menos tiempo posible y sin la necesidad de
            moverse del sitio donde desea que sea entregado el producto.
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      items: [
        {
          src: "https://image.freepik.com/vector-gratis/banner-amarillo-venta-viernes-negro-espacio-texto_1017-28881.jpg",
        },
        {
          src: "https://image.freepik.com/psd-gratis/plantilla-banner-concepto-cyber-monday_23-2148729517.jpg",
        },
        {
          src: "https://image.freepik.com/vector-gratis/banner-sistema-linea-fuera-linea_107791-2042.jpg",
        },
      ],
    };
  },
};
</script>

<style>
</style>