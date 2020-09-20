<template>
  <v-system-bar :height="height">
    <v-breadcrumbs :items="items" divider=">"/>
  </v-system-bar>
</template>

<script>
export default {
  data: () => ({
    height: 50,
    lightsOut: false,
    window: false,
    items: [
      {
        text: 'Dashboard',
        disabled: false,
        href: 'breadcrumbs_dashboard',
      },
      {
        text: 'Link 1',
        disabled: false,
        href: 'breadcrumbs_link_1',
      },
      {
        text: 'Link 2',
        disabled: true,
        href: 'breadcrumbs_link_2',
      },
    ],
  }),
};
</script>

<style scoped>

</style>
