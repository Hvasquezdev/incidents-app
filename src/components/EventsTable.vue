v<template>
  <div class="events-table-wrapper">
    <base-table title="Events">
      <template #table-body>
        <base-table-item
          v-for="(item, key) in data.data"
          :key="key"
          :id="item.id"
          :selected="selectedRow === item.id"
          :action="!item.actions[0].comment"
          @selected="onSelectedItem"
        >
          <base-table-item-row>
            <template #row-title>
              Date
            </template>
            <template #row-text>
              {{ getLocaleDate(item.details[0]['value']) }}
              {{ getLocaleTime(item.details[0]['value']) }}
            </template>
          </base-table-item-row>

          <base-table-item-row>
            <template #row-title>
              Type
            </template>
            <template #row-text>
              {{ item.details[1]['value'] }}
            </template>
          </base-table-item-row>

          <base-table-item-row>
            <template #row-title>
              Bin ID
            </template>
            <template #row-text>
              {{ item.id }}
            </template>
          </base-table-item-row>

          <base-table-item-row>
            <template #row-title>
              Action
            </template>
            <template #row-text>
              {{
                item.actions[0].action_taken && item.actions[0].comment
                  ? item.actions[0].comment
                  : '-'
              }}
            </template>
          </base-table-item-row>
        </base-table-item>
      </template>
    </base-table>
  </div>
</template>

<script>
import BaseTable from '@/components/BaseTable';
import { getLocaleDate, getLocaleTime } from '@/utils/index';

export default {
  name: 'EventsTable',

  props: {
    data: {
      type: Object,
      default: () => ({})
    }
  },

  components: {
    BaseTable,
    BaseTableItem: () => import('@/components/BaseTableItem'),
    BaseTableItemRow: () => import('@/components/BaseTableItemRow')
  },

  data() {
    return {
      selectedRow: null
    };
  },

  methods: {
    onSelectedItem(itemId) {
      const item = this.data.data.find(item => item.id === itemId);

      if (this.selectedRow === itemId) {
        this.selectedRow = null;
      } else {
        this.selectedRow = itemId;
      }

      this.$emit('selected-item', item);
    },
    getLocaleDate(val) {
      return getLocaleDate(val);
    },
    getLocaleTime(val) {
      return getLocaleTime(val);
    }
  }
};
</script>

<style>
.events-table-wrapper {
  order: 2;
}
@media (min-width: 1024px) {
  .events-table-wrapper {
    order: 1;
  }
}
</style>
