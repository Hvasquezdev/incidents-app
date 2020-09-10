<template>
  <div class="base-card">
    <slot />
  </div>
</template>

<script>
export default {
  name: 'BaseCard'
};
</script>

<style>
.base-card {
  background-color: var(--color-4);
  padding: 15px;
}
</style>
