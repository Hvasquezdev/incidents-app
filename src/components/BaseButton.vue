<template>
  <button
    :class="classNames"
    :disabled="disabled"
    class="base-button"
    v-on="$listeners"
    v-bind="$attrs"
  >
    <slot />
  </button>
</template>

<script>
export default {
  name: 'BaseButton',

  props: {
    color: {
      type: String,
      default: ''
    },
    shadow: Boolean,
    block: Boolean,
    icon: Boolean,
    disabled: Boolean
  },

  computed: {
    classNames() {
      return {
        [`is-${this.color}`]: this.color,
        'is-block': this.block,
        'is-icon': this.icon,
        'has-shadow': this.shadow,
        'is-disabled': this.disabled
      };
    }
  }
};
</script>

<style>
.base-button {
  padding: 0;
  box-shadow: none;
  outline: none;
  border: none;
  padding: 10px 15px;
  background: var(--color-8);
  font-size: 16px;
  color: var(--color-4);
  text-transform: uppercase;
  font-weight: bold;
  font-family: 'Open Sans', sans-serif;
  border-radius: 4px;
  cursor: pointer;
  transition: all 0.25s;
}
.base-button:active {
  filter: brightness(1.1);
}
.base-button.is-success {
  background-color: var(--color-7);
}
.base-button.is-transparent {
  background-color: transparent;
}
.base-button.has-shadow {
  box-shadow: 0 4px 6px var(--color-5);
}
.base-button.is-block {
  width: 100%;
}
.base-button.is-icon {
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 100%;
  padding: 15px;
}
.base-button.is-disabled {
  opacity: 0.7;
  pointer-events: none;
  box-shadow: none;
}
</style>
