<template>
  <!-- Sizes your content based upon application components -->
  <v-content>
    <Header/>
    <Breadcrumb/>
    <!-- Provides the application the proper gutter -->
    <v-container fluid>
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
