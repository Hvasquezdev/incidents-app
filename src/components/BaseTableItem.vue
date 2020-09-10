<template>
  <div :class="classNames" class="base-table-item" @click="onSelected">
    <slot />
  </div>
</template>

<script>
export default {
  name: 'BaseTableItem',

  props: {
    selected: Boolean,
    action: {
      type: Boolean,
      default: true
    },
    itemRowCount: {
      type: Number,
      default: 1
    },
    id: {
      type: [String, Number],
      default: null
    }
  },

  computed: {
    classNames() {
      return {
        'is-selected': this.selected,
        'is-action-available': this.action
      };
    }
  },

  methods: {
    onSelected() {
      this.$emit('selected', this.id);
    }
  }
};
</script>

<style>
.base-table-item {
  width: 100%;
  display: flex;
  padding: 30px 25px;
  color: var(--color-2);
  background-color: var(--color-4);
  box-shadow: 0 4px 6px var(--color-5);
  position: relative;
  cursor: pointer;
  display: grid;
  grid-template-columns: repeat(auto-fill, 47%);
  column-gap: 15px;
  row-gap: 15px;
}
.base-table-item::before {
  content: '';
  height: 100%;
  width: 0;
  left: 0;
  top: 0;
  background-color: var(--color-3);
  transition: all 0.25s;
  position: absolute;
}
.base-table-item.is-action-available::before {
  width: 10px;
}
.base-table-item.is-selected {
  background-color: var(--color-6);
}
@media (min-width: 1360px) {
  .base-table-item {
    display: flex;
    align-items: center;
    justify-content: space-between;
    column-gap: unset;
    row-gap: unset;
  }
  .base-table-item > *:not(:last-child) {
    margin-right: 10px;
  }
}
</style>
