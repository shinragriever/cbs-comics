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
        <v-btn :disabled="!valid" color="success" @click="submit()">Submit</v-btn>

        

        <v-btn color="warning" @click.stop="dialog = false">Cancel</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>

import Comic from "../../models/Comic";
import Author from "../../models/Author";

import Serie from "../../models/Serie";
import Publisher from "../../models/Publisher";
export default {
  name: "ComicCreateComponent",
  data() {
    return {
      
      dialog: false,
      id: this.item.id,
      title: this.item.title,
      description: this.item.description,
      publishyear: this.item.publishyear,
      publisher_id: this.item.publisher_id,
      author_id: this.item.author_id,
      serie_id: this.item.serie_id,
      stock: this.item.stock,
      price: this.item.price,
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
 

  props: {
      item: {
          type: Object,
          required: true
      },
      modelName: {
          type: String,
          required: false,  
      },
  
  },

  computed: {
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
  methods: {
    submit() {
      if (this.$refs.form.validate()) {
         const updateSubmit = {
          id: this.item.id,
          title: this.title,
          description: this.description,
          publishyear: this.publishyear,
          publisher_id: this.publisher_id,
          author_id: this.author_id,
          serie_id: this.serie_id,
          stock: this.stock,
          price: this.price,
        };
        
          this.$emit("update", updateSubmit);
        
       
        this.dialog = false;
      };
      },
    
   
    resetValidation() {
      this.$refs.form.resetValidation();
    },
      cancel() {
      
      this.dialog = false;
    }
  },
  
  mounted() {}
};
</script>

<style>
</style>