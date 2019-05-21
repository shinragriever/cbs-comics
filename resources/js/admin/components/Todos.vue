<template>
  <v-card-text>
    <v-list subheader>
      <v-list-tile v-for="todo in todos" :key="todo.id">
        <v-list-tile-content>
          <v-list-tile-title v-html="todo.title"></v-list-tile-title>
        </v-list-tile-content>
      </v-list-tile>
      <v-input></v-input>
    </v-list>
  </v-card-text>
</template>

<script>
import Todo from "../../models/Todo";
export default {
  name: "Todos",

  computed: {
    todos() {
      return Todo.query().all();
    }
  },
  methods: {
    console() {
      console.log(todos);
    }
  }
};
</script>

<style>
</style>
