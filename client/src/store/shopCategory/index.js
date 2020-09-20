// import items from '@/store/items';

export default {
  state: {
    itemsArr: [],
  },
  getters: {
    allItems(state) {
      return state.itemsArr;
    },
  },
  mutations: {
    // itemsArrUpdated(state) {
    //   state.itemsArr = items.items;
    // },
  },
  actions: {
  },
  modules: {
  },
};
