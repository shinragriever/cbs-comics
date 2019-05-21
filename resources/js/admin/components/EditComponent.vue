<template>
  <v-dialog v-model="dialog" persistent max-width="800px">
    <template v-slot:activator="{ on }">
      <v-icon small class="mr-2" v-on="on">edit</v-icon>
    </template>
    
 
    <v-card>
      <v-card-title>
        <span class="headline primary--text">Edit {{modelName}}: {{id}} {{name}}</span>
      </v-card-title>
      <v-card-text>
        <v-container grid-list-md>
          <v-form ref="form" v-model="valid" lazy-validation class="px-3">
            <v-text-field v-model="name" :counter="255" :rules="nameRules" label="Name*"  required></v-text-field>
          </v-form>
        </v-container>
        <small>*indicates required field</small>
      </v-card-text>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn :disabled="!valid" color="success" @click="submit()">Submit</v-btn>

        

        <v-btn color="warning" @click.stop="cancel">Cancel</v-btn>
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
  name: "EditComponent",
  data() {
    return {
      id: this.item.id,
      name: this.item.name,
      dialog: false,
      valid: true,
      nameRules: [v => !!v || "Name is required"]
        }
            
  },
  props: {
      item: {
          type: Object,
          required: true
      },
      modelName: {
          type: String,
          required: false,  
      }
  },


  methods: {
    submit() {
      if (this.$refs.form.validate()) {
         const updateSubmit = {
          id: this.item.id,
          name: this.name 
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
