<template>
  <ul :class="classNames" class="base-tab">
    <li
      v-for="(item, key) in items"
      :key="key"
      :class="{ 'is-active': active === item.id }"
      @click="onSelect(item.id)"
    >
      <span v-if="item.step" class="tab-step">
        {{ item.step }}
      </span>
      {{ item.text }}
    </li>
  </ul>
</template>

<script>
export default {
  name: 'BaseTab',

  props: {
    active: {
      type: [String, Number],
      default: null
    },
    items: {
      type: Array,
      default: () => []
    },
    size: {
      type: String,
      default: null
    },
    center: Boolean
  },

  computed: {
    classNames() {
      return {
        'is-center': this.center,
        [`is-${this.size}`]: this.size
      };
    }
  },

  methods: {
    onSelect(val) {
      this.$emit('select', val);
    }
  }
};
</script>

<style>
.base-tab {
  display: flex;
  align-items: center;
  justify-content: flex-start;
  border-bottom: 2px solid var(--color-9);
}
.base-tab li {
  /* font-size: 16px; */
  font-size: 14px;
  font-weight: bold;
  padding: 5px 15px;
  position: relative;
  color: var(--color-5);
  cursor: pointer;
  text-transform: uppercase;
  height: 100%;
  display: flex;
  align-items: center;
  transition: all 0.25s;
}
.base-tab li:not(:last-child) {
  margin-right: 10px;
}
.base-tab li::before {
  content: '';
  position: absolute;
  opacity: 0;
  left: 0;
  bottom: -3px;
  width: 0;
  height: 4px;
  border-radius: 3px;
  background-color: var(--color-7);
  transition: all 0.25s;
}
.base-tab li .tab-step {
  font-size: 8px;
  border-radius: 100%;
  left: 0;
  background: var(--color-5);
  color: var(--color-4);
  width: 13px;
  height: 13px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 5px;
  transition: all 0.25s;
}
.base-tab li.is-active {
  color: var(--color-2);
}
.base-tab li.is-active .tab-step {
  background-color: var(--color-2);
}
.base-tab li.is-active::before {
  opacity: 1;
  width: 100%;
}
.base-tab.is-center {
  justify-content: center;
}
.base-tab.is-lg li {
  font-size: 24px;
  line-height: 32px;
}
@media (min-width: 768px) {
  .base-tab li {
    font-size: 16px;
  }
  .base-tab li .tab-step {
    font-size: 12px;
    width: 20px;
    height: 20px;
  }
}
</style>
