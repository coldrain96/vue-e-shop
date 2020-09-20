<template>
  <v-content>
    <v-container fluid>
      <template>
        <v-card
          :max-height="600"
          :max-width="600"
          style="margin: 250px auto;"
        >
          <v-card-title>Login</v-card-title>
          <v-card-text>
            <form
              @submi.prevent="onSubmit"
            >
          <v-text-field
            v-model="username"
            label="Username"
            counter
          />
              <v-text-field
                v-model="password"
                :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
                :type="show1 ? 'text' : 'password'"
                label="Password"
                hint="At least 8 characters"
                counter
                @click:append="show1 = !show1"
              />
              <v-card-actions>
                <v-btn class="mr-4" type="submit">sign in</v-btn>
                <router-link to="/registration" tag="div" style="margin-left: auto">
                  <v-btn>Register an account</v-btn>
                </router-link>
              </v-card-actions>
            </form>
          </v-card-text>
        </v-card>
      </template>
    </v-container>
  </v-content>
</template>

<script>
import { required, minLength } from 'vuelidate/lib/validators';

export default {
  data: () => ({
    username: '',
    password: '',
    show1: false,
    show2: true,
    show3: false,
    show4: false,
  }),
  validations: {
    username: { required },
    password: { required, minLength: minLength(6) },
  },
  methods: {
    onSubmit() {
      this.$router.push('/ca');
    },
  },
};
</script>

<style scoped>

</style>
