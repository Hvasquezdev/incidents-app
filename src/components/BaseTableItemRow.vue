<template>
  <div class="base-table-item-row">
    <h3 class="row-title">
      <slot name="row-title" />
    </h3>
    <p class="row-text">
      <slot name="row-text" />
    </p>
  </div>
</template>

<script>
export default {
  name: 'BaseTableItemRow'
};
</script>

<style>
.base-table-item-row {
  flex-basis: 100%;
  flex-basis: var(--row-size);
}
.base-table-item-row .row-title {
  font-size: 16px;
  line-height: 20px;
  font-weight: bold;
}
.base-table-item-row .row-text {
  font-size: 14px;
  line-height: 18px;
  font-weight: 400;
  text-transform: capitalize;
}
@media (min-width: 768px) {
  .base-table-item-row .row-title {
    font-size: 18px;
    line-height: 24px;
  }
  .base-table-item-row .row-text {
    font-size: 16px;
    line-height: 20px;
  }
}
</style>
