<template>
  <v-app-bar app>

    <v-chip
      :label="true"
      :link="true"
    >
      <router-link tag="li" to="/categories">Categories</router-link>
    </v-chip>

    <v-chip
      :label="true"
      :link="true"
    >
      <router-link tag="li" to="/login">Login</router-link>
    </v-chip>

    <v-chip
      :label="true"
      :link="true"
    >
      <router-link tag="li" to="/logout">Logout</router-link>
    </v-chip>

    <v-chip
      :label="true"
      :link="true"
    >
      <v-icon style="margin-right: 5px">mdi-account-circle</v-icon>
      <router-link tag="li" to="/profile">user</router-link>
    </v-chip>

    <v-chip
      :label="true"
      :link="true"
    >
      <router-link tag="li" to="/register">Register </router-link>
    </v-chip>

    <v-chip
      :label="true"
      :link="true"
    >
      <router-link tag="li" to="/cart">
        <v-icon style="margin-right: 5px">mdi-cart</v-icon>
      </router-link>
    </v-chip>
  </v-app-bar>
</template>

<script>

export default {
  data: () => ({
  }),
  components: {
  },
};
</script>

<style lang="scss" scoped>
li {
  list-style-type: none;
}
.v-chip {
    margin: 5px 5px;
}
</style>
