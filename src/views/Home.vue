<template>
  <div class="home">
    <productos />
  </div>
</template>

<script>
import Productos from "../components/Productos.vue";
// @ is an alias to /src

export default {
  name: "Home",
  components: { Productos },
};
</script>
