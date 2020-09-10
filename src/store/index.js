import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

import { dialogs } from './dialogs';
import { example_response } from '../dummy/index';

export default new Vuex.Store({
  state: {
    data: example_response,
    selectedItem: null
  },
  mutations: {
    setSelectedItem(state, item) {
      state.selectedItem = item;
    },
    updateItemStatus(state, updatedItem) {
      const data = state.data.data.map(val => val);
      const item = data.find(item => item.id === updatedItem.id);
      const itemIndex = data.indexOf(item);

      data.splice(itemIndex, 1, updatedItem);
      state.data.data = data;
    }
  },
  actions: {},
  modules: {
    dialogs
  }
});
