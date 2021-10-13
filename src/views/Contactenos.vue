<template>
  <v-container>
    <v-row>
      <v-col cols="8" offset="2">
        <validation-observer ref="observer" v-slot="{ invalid }">
          <form @submit.prevent="submit" class="align-center">
            <validation-provider
              v-slot="{ errors }"
              name="Nombres"
              rules="required|max:50"
            >
              <v-text-field
                v-model="sName"
                :counter="50"
                :error-messages="errors"
                label="Nombres"
                required
              ></v-text-field>
            </validation-provider>
            <validation-provider
              v-slot="{ errors }"
              name="Celular"
              :rules="{
                required: true,
                digits: 10,
                regex: '^[0-9]',
              }"
            >
              <v-text-field
                v-model="nCelular"
                :counter="10"
                :error-messages="errors"
                label="Celular"
                required
              ></v-text-field>
            </validation-provider>
            <validation-provider
              v-slot="{ errors }"
              name="email"
              rules="required|email"
            >
              <v-text-field
                v-model="sEmail"
                :error-messages="errors"
                label="E-mail"
                required
              ></v-text-field>
            </validation-provider>
            <validation-provider
              v-slot="{ errors }"
              name="comentarios"
              :rules="{
                required: true,
                regex: '^[a-zA-z0-9]',
              }"
            >
              <v-textarea
                v-model="sComent"
                solo
                :error-messages="errors"
                name="comentarios"
                label="Comentarios"
                required
              ></v-textarea>
            </validation-provider>

            <v-btn class="mr-4" type="submit" :disabled="invalid">
              Enviar
            </v-btn>
            <v-btn @click="clear"> clear </v-btn>
          </form>
        </validation-observer>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { required, digits, email, max, regex } from "vee-validate/dist/rules";
import {
  extend,
  ValidationObserver,
  ValidationProvider,
  setInteractionMode,
} from "vee-validate";

setInteractionMode("eager");

extend("digits", {
  ...digits,
  message: "{_field_} necesita tener {length} números. ({_value_})",
});

extend("required", {
  ...required,
  message: "{_field_} no puede ser vacío",
});

extend("max", {
  ...max,
  message: "{_field_} no puede ser mayor a {length} caracteres",
});

extend("regex", {
  ...regex,
  message: "{_field_} {_value_} no cumple con la expresión {regex}",
});

extend("email", {
  ...email,
  message: "Email es invalido",
});

export default {
  components: {
    ValidationProvider,
    ValidationObserver,
  },
  data: () => ({
    sName: "",
    nCelular: "",
    sEmail: "",
    sComent: "",
  }),

  methods: {
    submit() {
      let objInsert = {
        nombres: this.sName,
        celular: this.nCelular,
        email: this.sEmail,
        comentarios: this.sComent,
      };
      this.axios
        .post("/guardarContactenos", objInsert)
        .then((res) => {
          alert("Registro guardado exitosamente");
          this.clear();
        })
        .catch((err) => {
          console.error(err.response);
        });
    },
    clear() {
      this.sName = "";
      this.nCelular = "";
      this.sEmail = "";
      this.sComent = null;
    },
  },
};
</script>

<style>
</style>