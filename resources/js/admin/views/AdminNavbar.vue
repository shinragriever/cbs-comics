<template>
  <nav>
    <v-toolbar flat app class="secondary">
      <v-toolbar-side-icon @click="drawer = !drawer" class="primary--text"></v-toolbar-side-icon>
      <v-toolbar-title class="text-uppercase primary--text">
        <span class="font-weight-light">Comic Book Store</span>
        <span>Admin</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>

      <!-- dropdown menu -->
      <v-menu offset-y class="hidden-sm-and-down">
        <v-btn flat slot="activator" class="primary--text">
          <v-icon left>expand_more</v-icon>
          <span>Menu</span>
        </v-btn>
        <v-list>
          <v-list-tile v-for="link in links" :key="link.text" router :to="link.route">
            <v-list-tile-title>{{ link.text }}</v-list-tile-title>
          </v-list-tile>
        </v-list>
      </v-menu>

      <v-btn flat color="primary">
        <span>Sign Out</span>
        <v-icon right>exit_to_app</v-icon>
      </v-btn>
    </v-toolbar>

    <v-navigation-drawer app v-model="drawer" class="primary">
      <v-layout column align-center>
        <v-flex class="mt-5">
          <v-avatar size="100">
            <img class="text-lg-center" src="/avatarmudking2.png">
          </v-avatar>
          <p class="white--text subheading mt-1">Thomas Bousson</p>
          <p class="primary--text text-center">Administrator</p>
        </v-flex>
        <v-flex class="mt-4 mb-3">
          <!-- <Popup/> -->
        </v-flex>
      </v-layout>
      <v-list>
        <v-list-tile v-for="link in links" :key="link.text" router :to="link.route">
          <v-list-tile-action>
            <v-icon class="white--text">{{ link.icon }}</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title class="white--text">{{ link.text }}</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
  </nav>
</template>

<script>
export default {
  name: "AdminNavbar",
  data() {
    return {
      drawer: false,
      links: [
        { icon: "dashboard", text: "Dashboard", route: "/admin" },

        { icon: "table_chart", text: "Tables", route: "/admin/tables" },
        { icon: "table_chart", text: "comics", route: "/admin/tables/comics" },
        { icon: "person", text: "Profile", route: "/profile" },
        { icon: "person", text: "Login", route: "/login" }
      ]
    };
  }
};
</script>

<style>
</style>