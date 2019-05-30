<template>
  <v-dialog v-model="dialog" persistent max-width="800px">
    <template v-slot:activator="{ on }">
      <v-btn color="primary" v-on="on" right>Create Comic</v-btn>
    </template>
    <v-card>
      <v-card-title>
        <span class="headline primary--text">Create Comic</span>
      </v-card-title>
      <v-card-text>
        <v-container grid-list-md>
          <v-form ref="form" v-model="valid" lazy-validation class="px-3">
            <v-text-field
              v-model="title"
              :counter="255"
              :rules="titleRules"
              label="Title*"
              required
            ></v-text-field>
            <v-textarea
              v-model="description"
              label="Description*"
              :rules="descriptionRules"
              required
            ></v-textarea>
            <v-layout row>
              <v-flex xs6 order-lg2>
                <v-select
                  v-model="author_id"
                  label="Author*"
                  :items="getAuthors"
                  :rules="authorRules"
                  item-text="name"
                  item-value="id"
                  required
                ></v-select>
              </v-flex>
              <v-flex xs6>
                <v-select
                  v-model="serie_id"
                  label="Series*"
                  :items="getSeries"
                  :rules="serieRules"
                  item-text="name"
                  item-value="id"
                  required
                ></v-select>
              </v-flex>
            </v-layout>
            <v-layout row>
              <v-flex xs6 order-lg2>
                <v-select
                  v-model="publisher_id"
                  label="Publisher*"
                  :items="getPublishers"
                  :rules="publisherRules"
                  item-text="name"
                  item-value="id"
                  required
                ></v-select>
              </v-flex>
              <v-flex xs6>
                <v-text-field
                  v-model="publishyear"
                  :counter="4"
                  :rules="publishRules"
                  label="Publish Year*"
                  required
                ></v-text-field>
              </v-flex>
            </v-layout>
            <v-layout row>
              <v-flex xs6>
                <v-text-field v-model="stock" :rules="stockRules" label="Stock*" required></v-text-field>
              </v-flex>
              <v-flex xs6>
                <v-text-field v-model="price" :rules="priceRules" label="Price*" required></v-text-field>
              </v-flex>
            </v-layout>
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
import Comic from "../../models/Comic";
import Author from "../../models/Author";

import Serie from "../../models/Serie";
import Publisher from "../../models/Publisher";
export default {
  name: "ComicCreateComponent",
  data() {
    return {
      newComic: {},
      comic: {},
      dialog: false,
      title: "",
      description: "",
      author: "",
      serie: "",
      publisher: "",
      publishyear: "",
      publisher_id: "",
      author_id: "",
      serie_id: "",
      stock: "",
      price: "",
      valid: true,
       titleRules: [
        v => !!v || "Name is required",
        v => (v && v.length <= 255) || "Name must be less than 255 characters"
      ],
      descriptionRules: [v => !!v || "Description is required"],
      authorRules: [v => !!v || "Author is required"],
      serieRules: [v => !!v || "Serie is required"],
      publisherRules: [v => !!v || "Publisher Year is required"],      
      priceRules: [v => !!v || "Price is required"],
      publishRules: [v => !!v || "Publisher Year is required"], 
      stockRules: [v => !!v || "Stock is required"],
      
     
    };
  },
  computed: {
    ...mapGetters({
      comicsLoading: "entities/comics/loading",
      authorsLoading: "entities/authors/loading",
      seriesLoading: "entities/series/loading",
      publishersLoading: "entities/publishers/loading",
      comicsErrors: "entities/comics/errors",
      authorsErrors: "entities/authors/errors",
      seriesErrors: "entities/series/errors",
      publishersErrors: "entities/publishers/errors"
    }),
    getAuthors() {
      return Author.query().all();
    },
    getSeries() {
      return Serie.query().all();
    },
    getPublishers() {
      return Publisher.query().all();
    }
  },
  created() {},
  methods: {
    submit() {
      console.log("test");
      console.log(this.publisher_id);
      if (this.$refs.form.validate()) {
        
        const newComic = {
          title: this.title,
          description: this.description,
          publishyear: this.publishyear,
          publisher_id: this.publisher_id,
          author_id: this.author_id,
          serie_id: this.serie_id,
          stock: this.stock,
          price: this.price,
          
        };
        console.log(newComic);
        Comic.$create({ data: newComic });
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
