<template>
  <div>
    <v-container grid-list-xl>
      <v-layout row>
        <v-toolbar flat class="white">
          <v-toolbar-title class="primary--text">{{ this.title }}</v-toolbar-title>
          <v-spacer></v-spacer>
        </v-toolbar>
      </v-layout>

      <v-layout row wrap>
        <v-flex md4 hover>
          <v-card hover>
            <v-card-title>Author</v-card-title>
            <v-data-table
              :headers="headers"
              :items="allAuthors"
              v-slot:items="props"
              class="table-overflow-hidden"
            >
              <td>{{ props.item.id }}</td>
              <td class="text-xs-right">{{ props.item.name }}</td>
              <td class="justify-center layout px-0">
                <v-icon small class="mr-2" @click="editItem(props.item)">edit</v-icon>
                <v-icon small @click="deleteItem(props.item)">delete</v-icon>
              </td>
            </v-data-table>
          </v-card>
        </v-flex>
        <v-flex md4 hover>
          <v-card hover>
            <v-card-title>Series</v-card-title>
            <v-data-table :headers="headers" :items="allSeries" v-slot:items="props">
              <td>{{ props.item.id }}</td>
              <td class="text-xs-right">{{ props.item.name }}</td>
              <td class="justify-center layout px-0">
                <v-icon small class="mr-2" @click="editItem(props.item)">edit</v-icon>
                <v-icon small @click="deleteItem(props.item)">delete</v-icon>
              </td>
            </v-data-table>
          </v-card>
        </v-flex>
        <v-flex md4 hover>
          <v-card hover>
            <v-card-title>Publisher</v-card-title>
            <v-data-table :headers="headers" :items="allPublishers" v-slot:items="props">
              <td>{{ props.item.id }}</td>
              <td class="text-xs-right">{{ props.item.name }}</td>
              <td class="justify-center layout px-0">
                <v-icon small class="mr-2" @click="editItem(props.item)">edit</v-icon>
                <v-icon small @click="deleteItem(props.item)">delete</v-icon>
              </td>
            </v-data-table>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>
<script>
import axios from "axios";
import { mapGetters, mapActions } from "vuex";
import Comic from "../../models/Comic";
import Author from "../../models/Author";

import Serie from "../../models/Serie";
import Publisher from "../../models/Publisher";
export default {
  name: "AdminTables",
  components: {},
  data() {
    return {
      title: "Admin Tables",
      dialog: false,
      error: null,
      meta: null,
      response: "",
      comics: [],

      headers: [
        { text: "Id", value: "id" },
        { text: "name", value: "title" },
        { text: "Actions", value: "name", sortable: false }
      ]
    };
  },
  computed: {
    allAuthors() {
      return Author.query().all();
    },
    allSeries() {
      return Serie.query().all();
    },
    allPublishers() {
      return Publisher.query().all();
    }
  }
};
</script>
    

<style lang="scss" scoped>
</style>
