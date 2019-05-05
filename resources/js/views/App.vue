<template>
  <v-app>
    <admin-navbar></admin-navbar>
    <v-content>
      <router-view></router-view>
    </v-content>
  </v-app>
</template>
<script>
import AdminNavbar from "../admin/views/AdminNavbar";
import { mapGetters } from "vuex";
import Comic from "../models/Comic";
import Author from "../models/Author";

import Serie from "../models/Serie";
import Publisher from "../models/Publisher";
export default {
  name: name,
  components: {
    AdminNavbar
  },
  computed: {
    ...mapGetters({
      comicsLoading: "entities/comics/loading",
      authorsLoading: "entities/authors/loading",
      seriesLoading: "entities/series/loading",
      publisherLoading: "entities/publisher/loading",
      comicsErrors: "entities/comics/errors",
      authorsErrors: "entities/authors/errors",
      seriesErrors: "entities/series/errors",
      publishersErrors: "entities/publishers/errors"
    })
  },
  mounted() {
    Comic.$fetch();
    Author.$fetch();
    Serie.$fetch();
    Publisher.$fetch();
  }
};
</script>
<style lang="scss">
</style>
