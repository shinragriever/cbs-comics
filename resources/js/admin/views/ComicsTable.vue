<template>
  <v-container>
    <v-toolbar flat class="white">
      <v-toolbar-title class="primary--text">Comics</v-toolbar-title>

      <v-spacer></v-spacer>
      <comic-create-component></comic-create-component>
    </v-toolbar>

    <v-data-table
      :headers="headers"
      :items="comics"
      v-slot:items="comic"
      expand
      :pagination.sync="pagination"
    >
      <td>{{ comic.item.id }}</td>
      <td class="text-xs-right">{{ comic.item.title }}</td>
      <td class="text-xs-right">{{ comic.item.author.name}}</td>
      <td class="text-xs-right">{{ comic.item.serie.name}}</td>
      <td class="text-xs-right">{{ comic.item.publisher.name}}</td>
      <td class="text-xs-right">{{ comic.item.publishyear}}</td>
      <td class="text-xs-right">{{ comic.item.price}}</td>
      <td class="text-xs-right">{{ comic.item.stock}}</td>
      <td class="justify-center layout px-0">
        <v-icon small class="mr-2" @click="editComic(comic.item.id)">edit</v-icon>
        <v-icon small @click="deleteItem(comic.item.id)">delete</v-icon>
      </td>
    </v-data-table>
  </v-container>
</template>
<script>
import axios from "axios";
import { mapGetters, mapActions } from "vuex";
import Comic from "../../models/Comic";
import Author from "../../models/Author";

import Serie from "../../models/Serie";
import Publisher from "../../models/Publisher";
import ComicCreateComponent from "../components/ComicCreateComponent";
export default {
  name: "Comics",
  components: {
    ComicCreateComponent
  },
  data() {
    return {
      dialog: false,
      error: null,
      meta: null,
      response: "",

      pagination: {
        rowsPerPage: 10
      },
      headers: [
        { text: "Id", value: "id" },
        { text: "Title", value: "title" },
        { text: "Author", value: "author" },
        { text: "Series", value: "serie" },
        { text: "Publisher", value: "publisher" },
        { text: "Publish Year", value: "publishyear" },
        { text: "Price", value: "price" },
        { text: "Stock", value: "stock" },
        { text: "Actions", value: "name", sortable: false }
      ]
    };
  },
  computed: {
    comics() {
      return Comic.query()
        .withAll()
        .all();
    }
  },
  mounted() {},

  methods: {
    editComic() {
      console.log(test);
    }
  },

  mounted() {
    // this.$store.dispatch("getComics");
    // axios
    //   .get("/api/comics")
    //   .then(response => {
    //     this.comics = response.data;
    //   })
    //   .catch(error => {
    //     console.log(error);
    //   });
  }
};
</script>
    


<style>
</style>
