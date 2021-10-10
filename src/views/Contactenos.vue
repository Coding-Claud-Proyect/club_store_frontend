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
              submit
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
  message: "{_field_} needs to be {length} digits. ({_value_})",
});

extend("required", {
  ...required,
  message: "{_field_} can not be empty",
});

extend("max", {
  ...max,
  message: "{_field_} may not be greater than {length} characters",
});

extend("regex", {
  ...regex,
  message: "{_field_} {_value_} does not match {regex}",
});

extend("email", {
  ...email,
  message: "Email must be valid",
});

export default {
  components: {
    ValidationProvider,
    ValidationObserver,
  },
  data: () => ({
    name: "",
    phoneNumber: "",
    email: "",
    select: null,
    items: ["Item 1", "Item 2", "Item 3", "Item 4"],
    checkbox: null,
  }),

  methods: {
    submit() {
      this.$refs.observer.validate();
    },
    clear() {
      this.name = "";
      this.phoneNumber = "";
      this.email = "";
      this.select = null;
      this.checkbox = null;
      this.$refs.observer.reset();
    },
  },
};
</script>

<style>
</style>