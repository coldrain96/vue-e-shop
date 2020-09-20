<template>
  <v-content>
    <Header/>
    <Breadcrumb/>
    <v-container fluid>
      <v-card></v-card>
    </v-container>
  </v-content>
</template>

<script>
import Header from '@/components/Header.vue';
import Breadcrumb from '@/components/Breadcrumb.vue';

export default {
  components: {
    Header,
    Breadcrumb,
  },
};
</script>

<style scoped>

</style>
