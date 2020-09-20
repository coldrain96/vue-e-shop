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
            >
              <v-text-field
                v-model="name"
                :error-messages="nameErrors"
                :counter="10"
                label="Username/Email"
                required
                @input="$v.name.$touch()"
                @blur="$v.name.$touch()"
              />
              <v-text-field
                v-model="password"
                :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
                :rules="[rules.required, rules.min]"
                :type="show1 ? 'text' : 'password'"
                name="input-10-1"
                label="Password"
                hint="At least 8 characters"
                counter
                @click:append="show1 = !show1"
              />
              <v-card-actions>
                <v-btn class="mr-4" @click="submit">Create account</v-btn>
                <v-btn @click="clear">clear</v-btn>
              </v-card-actions>
            </form>
          </v-card-text>
        </v-card>
      </template>
    </v-container>
  </v-content>
</template>

<script>
export default {
  data: () => ({
    show1: false,
    show2: true,
    show3: false,
    show4: false,
    password: 'Password',
    rules: {
      required: value => !!value || 'Required.',
      min: v => v.length >= 8 || 'Min 8 characters',
      emailMatch: () => ('The email and password you entered don\'t match'),
    },
  }),
};
</script>

<style scoped>

</style>
