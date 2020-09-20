<template>
  <v-content>
    <Header/>
<!--    <Breadcrumb/>-->
    <v-container class="shop" fluid>
      <aside class="filters">
        <ul
          class="filters-list"
        >
          <li :to="filter.url"
              v-for="filter in itemsArr"
              :key="filter.id"
          >
            {{ filter.type }}
          </li>
        </ul>
      </aside>
      <aside class="items">

        <v-card
          class="item-card"
          max-width="270"
          v-for="item of itemsArr"
          :key="item.id"
        >
          <v-img
            class="img"
            contain
            :alt="item.name"
            :src="item.img"
          >
          </v-img>
          <v-card-title class="title">
            {{item.name}} \ {{ item.color }}
          </v-card-title>
          <v-card-text class="description">
            <div class="price">{{item.price}}</div>
            <router-link class="cart" to="#">
              <v-btn>
                <v-icon class="icon">mdi-cart</v-icon>
                Add to cart
              </v-btn>
            </router-link>
          </v-card-text>
        </v-card>

      </aside>
    </v-container>
  </v-content>
</template>

<script>
import Header from '@/components/Header.vue';
// import Breadcrumb from '@/components/Breadcrumb.vue';
// import items from '@/store/items';

export default {
  components: {
    Header,
  },
  data: () => ({
    // itemsArr: items.items,
  }),
  mounted() {
    // function typeFiltering(itemsArr) {
    //   const filters = itemsArr.type;
    //   const uniq = filters.reduce((a, b) => {
    //     if (a.indexOf(b) < 0) a.push(b);
    //     return a;
    //   }, []);
    // }
    // typeFiltering();
  },
};
</script>

<style src="@/assets/scss/shop-category.scss" lang="scss" scoped/>
