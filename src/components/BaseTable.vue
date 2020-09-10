<template>
  <div class="base-table">
    <div class="table-header">
      <h2 class="table-title">{{ title }}</h2>
    </div>
    <div class="table-body">
      <slot name="table-body" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'BaseTable',

  props: {
    title: {
      type: String,
      default: 'Title',
      description: 'Title of the table'
    }
  },

  data() {
    return {
      itemRowCount: 4
    };
  },

  mounted() {
    const rowSize = 100 / this.itemRowCount;

    this.$el.style.setProperty('--row-size', rowSize + '%');
  }
};
</script>

<style>
.base-table {
  --row-size: 100%;

  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
}
.base-table .table-header {
  padding: 25px;
}
.base-table .table-header .table-title {
  font-size: 30px;
  font-weight: bold;
  color: var(--color-2);
}
.base-table .table-body {
  width: 100%;
  display: flex;
  flex-direction: column;
}
.base-table .table-body > *:not(:last-child) {
  margin-bottom: 15px;
}
</style>
