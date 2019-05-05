<template>
  <v-data-table :headers="tableheaders" :items="props.table" v-slot:items="table">
    <td>{{ table.item.id }}</td>
    <td class="text-xs-right">{{ table.item.name }}</td>
    <td class="justify-center layout px-0">
      <v-icon small class="mr-2" @click="editItem(table.item)">edit</v-icon>
      <v-icon small @click="deleteItem(table.item)">delete</v-icon>
    </td>
  </v-data-table>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
  props: {
    tableheaders: Object,
    table: Object,
    mapGetter: String,
    fetchFunction: Function,
    mapAction: String
  },
  computed: mapGetters([props.mapGetter]),
  created() {
    this.props.fetchFunction();
  },
  methods: mapActions([props.mapAction])
};
</script>

<style>
</style>
