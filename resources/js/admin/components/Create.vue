<template>
  <v-dialog v-model="dialog" persistent max-width="800px">
    <template v-slot:activator="{ on }">
      <v-btn color="primary" v-on="on" right>Create {{modelName}}</v-btn>
    </template>
    <v-card>
      <v-card-title>
        <span class="headline primary--text">Create {{modelName}}</span>
      </v-card-title>
      <v-card-text>
        <v-container grid-list-md>
          <v-form ref="form" v-model="valid" lazy-validation class="px-3">
            <v-text-field v-model="name" :counter="255" :rules="nameRules" label="Name*" required></v-text-field>
          </v-form>
        </v-container>
        <small>*indicates required field</small>
      </v-card-text>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn :disabled="!valid" color="success" @click="submit()">Submit</v-btn>

        <v-btn color="error" @click="reset">Reset Form</v-btn>

        <v-btn color="warning" @click.stop="cancel">Cancel</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "Create",
  props: {
    modelName: {
      type: String,
      required: false
    }
  },
  data() {
    return {
      dialog: false,
      name: "",
      valid: true,
      nameRules: [v => !!v || "Name is required"]
    };
  },
  computed: {},
  created() {},
  methods: {
    submit() {
      if (this.$refs.form.validate()) {
        const newSubmit = {
          name: this.name
        };
        this.$emit("create", newSubmit);

        this.dialog = false;
        this.$refs.form.reset();
      }
    },
    reset() {
      this.$refs.form.reset();
    },
    resetValidation() {
      this.$refs.form.resetValidation();
    },
    cancel() {
      this.$refs.form.reset();
      this.dialog = false;
    }
  },
  mounted() {}
};
</script>

<style>
</style>
