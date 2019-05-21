<template>
  <v-dialog v-model="dialog" persistent max-width="800px">
    <template v-slot:activator="{ on }">
      <v-icon small class="mr-2" v-on="on">edit</v-icon>
    </template>
    <v-card>
      <v-card-title>
        <span class="headline primary--text">Edit Comic</span>
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
                  item-text="name"
                  item-value="id"
                ></v-select>
              </v-flex>
              <v-flex xs6>
                <v-select
                  v-model="serie_id"
                  label="Series*"
                  :items="getSeries"
                  item-text="name"
                  item-value="id"
                ></v-select>
              </v-flex>
            </v-layout>
            <v-layout row>
              <v-flex xs6 order-lg2>
                <v-select
                  v-model="publisher_id"
                  label="Publisher*"
                  :items="getPublishers"
                  item-text="name"
                  item-value="id"
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
        <v-btn :disabled="!valid" color="success" @click="submit(comic)">Submit</v-btn>

        <v-btn color="error" @click="reset">Reset Form</v-btn>

        <v-btn color="warning" @click.stop="dialog = false">Cancel</v-btn>
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
      comic: {
        id: comic.id,
        title: comic.title,
        description: comic.description,
        author: comic.author.name,
        serie: comic.serie.name,
        publisher: comic.publisher.name,
        publishyear: comic.publishyear,
        publisher_id: comic.publisher_id,
        author_id: comic.author_id,
        serie_id: comic.serie_id,
        stock: comic.stock,
        price: comic.price
      },
      dialog: false,

      valid: true,
      priceRules: [v => !!v || "Price is required"],
      stockRules: [v => !!v || "Stock is required"],
      publishRules: [v => !!v || "Publisher Year is required"],
      descriptionRules: [v => !!v || "Description is required"],
      titleRules: [
        v => !!v || "Name is required",
        v => (v && v.length <= 255) || "Name must be less than 255 characters"
      ]
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
      if (this.$refs.form.validate()) {
        const newComic = {
          title: this.title,
          description: this.description,
          publishyear: this.publishyear,
          publisher_id: this.publisher_id,
          author_id: this.author_id,
          serie_id: this.serie_id,
          stock: this.stock,
          price: this.price
        };
        console.log(newComic);
        Comic.$update({ data: newComic });
        this.dialog = false;
        this.$refs.form.reset();
      }
    },
    reset() {
      this.$refs.form.reset();
    },
    resetValidation() {
      this.$refs.form.resetValidation();
    }
  },
  mounted() {}
};
</script>

<style>
</style>
