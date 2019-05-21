<template>
  <v-container fill-height fluid grid-list-xl>
    <v-layout justify-center wrap>
      <v-flex md4>
        <v-card hover>
          <v-card-title class="secondary primary--text">Data</v-card-title>
          <v-card-text>
            <v-list>
              <v-list-tile-content>
                <v-list-tile-title>Total Comics: {{totalComics}}</v-list-tile-title>
                <v-list-tile-title>Total Authors: {{totalAuthors}}</v-list-tile-title>
                <v-list-tile-title>Total Publishers: {{totalPublishers}}</v-list-tile-title>
                <v-list-tile-title>Total Series: {{totalSeries}}</v-list-tile-title>
              </v-list-tile-content>
            </v-list>
          </v-card-text>
        </v-card>
      </v-flex>
      <v-flex md8>
        <v-card hover>
          <v-card-title class="secondary primary--text">Todos</v-card-title>
          <Todos></Todos>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>




<script>
import { mapGetters } from "vuex";
import Comic from "../../models/Comic";
import Author from "../../models/Author";
import Todo from "../../models/Todo";
import Publisher from "../../models/Publisher";
import Serie from "../../models/Serie";
import Todos from "../components/Todos";
export default {
  name: "Admin-Dashboard",
  components: {
    Todos
  },
  data: () => ({}),
  computed: {
    totalComics() {
      return Comic.query().count();
    },
    totalAuthors() {
      return Author.query().count();
    },
    totalPublishers() {
      return Publisher.query().count();
    },
    totalSeries() {
      return Serie.query().count();
    }
  },
  mounted() {},
  methods: {}
};
</script>

<style scoped>
</style>
