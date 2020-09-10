<template>
  <div id="app">
    <div class="main-wrapper">
      <events-table :data="response" @selected-item="onSelectedItem" />
      <event-details :item="selectedItem" />
    </div>
  </div>
</template>

<script>
import EventsTable from '@/components/EventsTable';
const EventDetails = () => import('@/components/EventDetails.vue'); // Lazy loaded

export default {
  name: 'App',

  components: {
    EventsTable,
    EventDetails
  },

  computed: {
    response() {
      return this.$store.state.data;
    },
    selectedItem: {
      get() {
        return this.$store.state.selectedItem;
      },
      set(item) {
        this.$store.commit('setSelectedItem', item);
      }
    }
  },

  methods: {
    onSelectedItem(item) {
      if (this.selectedItem === null || this.selectedItem.id !== item.id) {
        this.selectedItem = item;
      } else {
        this.selectedItem = null;
      }
    }
  }
};
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;600;700;800&display=swap');

body {
  font-family: 'Open Sans', sans-serif;
}

#app {
  --color-1: #ebecef;
  --color-2: #172c49;
  --color-3: #e9cf30;
  --color-4: #fff;
  --color-5: #00000014;
  --color-6: rgba(233, 208, 48, 0.1);
  --color-7: #3ba935;
  --color-8: #454f63;
  --color-9: #8997b2;
  --color-10: #d92323;

  width: 100%;
  min-height: 100vh;
  background-color: var(--color-1);
  padding-bottom: 20px;
}
.main-wrapper {
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: minmax(320px, 550px);
  justify-content: center;
  column-gap: 20px;
  padding: 20px;
}
@media (min-width: 768px) {
  .main-wrapper {
    grid-template-columns: minmax(320px, 700px);
  }
}
@media (min-width: 1024px) {
  .main-wrapper {
    grid-template-columns: 1fr 40%;
    padding: 0;
  }
}
@media (min-width: 1360px) {
  .main-wrapper {
    grid-template-columns: 1fr 30%;
    max-width: 1620px;
    margin: 0 auto;
  }
}
</style>
