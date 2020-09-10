<template>
  <ul class="details-list">
    <li v-for="(detail, key) in details" :key="key" class="details-list-item">
      <h4>
        {{ detail.title }}
      </h4>
      <p>
        <template v-if="detail.format === 'date'">
          {{ getLocaleDate(detail.value) }}
          {{ getLocaleTime(detail.value) }}
        </template>
        <template v-else>
          {{ detail.value }}
        </template>
      </p>
    </li>
  </ul>
</template>

<script>
import { getLocaleDate, getLocaleTime } from '@/utils/index';

export default {
  name: 'EventDetailsList',

  props: {
    details: {
      type: Array,
      default: () => []
    }
  },

  methods: {
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
.details-list {
  display: grid;
  grid-template-columns: repeat(2, 50%);
  column-gap: 15px;
  row-gap: 20px;
}
.details-list h4 {
  font-size: 16px;
  line-height: 24px;
  font-weight: bold;
}
.details-list p {
  font-size: 14px;
  line-height: 20px;
}
@media (min-width: 768px) {
  .details-list h4 {
    font-size: 18px;
    line-height: 28px;
  }
  .details-list p {
    font-size: 16px;
    line-height: 23px;
  }
}
</style>
