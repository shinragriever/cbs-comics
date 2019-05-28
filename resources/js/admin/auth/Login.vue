<template>
  <v-layout class="mt-3">
    <v-flex xs12 sm6 offset-sm3>
      <v-card>
        <v-img src="s-l1600.jpg" aspect-ratio="2.75"></v-img>

        <v-card-title primary-title>
          
            <h3 class="headline mb-0">Login</h3>
            </v-card-title>
            <v-card-text>
              <v-form v-model="valid">
                <v-text-field v-model="email" :rules="emailRules" label="E-mail" required></v-text-field>

                <v-text-field
                  :type="hidePassword ? 'password' : 'text'"
                  :append-icon="hidePassword ? 'visibility_off' : 'visibility'"
                  name="password"
                  label="Password"
                  id="password"
                  :rules="[rules.required]"
                  v-model="password"
                  :error="error"
                  @click:append="hidePassword = !hidePassword"
                />
              </v-form>
            </div>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn block color="primary" @click="login" :loading="loading">Login</v-btn>
            </v-card-actions>
          </div>
        </v-card-text>
      </v-card>
    </v-flex>
  </v-layout>
</template>
<script>
export default {
  name: "Login",
  data() {
    return {
      loading: false,
      userEmail: "admin@yopmail.com",
      password: "123456",
      hidePassword: true,
      error: false,
      showResult: false,
      result: "",
      rules: {
        required: value => !!value || "Required."
      }
    };
  }
};
</script>