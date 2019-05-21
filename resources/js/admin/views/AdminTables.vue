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
            <v-card-title>
              Author
              <v-spacer></v-spacer>
              <Create :modelName="author" @create="authorCreate"></Create>
            </v-card-title>
            <v-data-table
              :headers="headers"
              :items="allAuthors"
              v-slot:items="props"
              class="table-overflow-hidden"
            >
              <td>{{ props.item.id }}</td>
              <td class="text-xs-right">{{ props.item.name }}</td>
              <td class="justify-center layout px-0">
                <EditComponent :modelName="author" :item="props.item"  @update="authorEdit"></EditComponent>
                <v-icon small @click="deleteItem(props.item)">delete</v-icon>
              </td>
            </v-data-table>
          </v-card>
        </v-flex>
        <v-flex md4 hover>
          <v-card hover>
            <v-card-title>
              Series
              <v-spacer></v-spacer>
              <Create :modelName="serie" @create="serieCreate"></Create>
            </v-card-title>
            <v-data-table :headers="headers" :items="allSeries" v-slot:items="props">
              <td>{{ props.item.id }}</td>
              <td class="text-xs-right">{{ props.item.name }}</td>
              <td class="justify-center layout px-0">
                <EditComponent :modelName="serie" :item="props.item"  @update="serieEdit"></EditComponent>
                <v-icon small @click="deleteItem(props.item)">delete</v-icon>
              </td>
            </v-data-table>
          </v-card>
        </v-flex>
        <v-flex md4 hover>
          <v-card hover>
            <v-card-title>
              Publisher
              <v-spacer></v-spacer>
              <Create :modelName="publisher" @create="publisherCreate"></Create>
            </v-card-title>
            <v-data-table :headers="headers" :items="allPublishers" v-slot:items="props">
              <td>{{ props.item.id }}</td>
              <td class="text-xs-right">{{ props.item.name }}</td>
              <td class="justify-center layout px-0">
                <EditComponent :modelName="publisher" :item="props.item" @update="publisherEdit"></EditComponent>
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
import Author from "../../models/Author";
import Serie from "../../models/Serie";
import Publisher from "../../models/Publisher";
import Create from "../components/Create";
import EditComponent from "../components/EditComponent";
export default {
  name: "AdminTables",
  components: {
    Create, EditComponent
  },
  data() {
    return {
      title: "Admin Tables",
      response: "",
      author: "Author",
      serie: "Serie",
      publisher: "Publisher",

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
  },
  methods: {
    authorCreate(data) {
      Author.$create({data});
    },
    serieCreate(data) {
      Serie.$create({data});
    },
    publisherCreate(data) {
      Publisher.$create({data});
    },
    authorEdit(data){
     Author.$update({params: {id:data.id},  data: {name: data.name} });
    },
    serieEdit(data){
      Serie.$update({params: {id:data.id},  data: {name: data.name} });
    },
    publisherEdit(data){ 
      Publisher.$update({params: {id:data.id},  data: {name: data.name} });
    },
  }
};
</script>
    

<style lang="scss" scoped>
</style>
