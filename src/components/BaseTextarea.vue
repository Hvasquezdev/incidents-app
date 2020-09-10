<template>
  <div :class="classNames" class="base-textarea">
    <label v-if="label">
      {{ label }}
    </label>

    <textarea
      class="base-textarea"
      v-bind="$attrs"
      :value="value"
      :maxlength="max"
      :rows="rows"
      v-on="listeners"
    />

    <span class="text-count">
      {{ (value && value.length) || 0 }} /
      {{ max }}
    </span>
  </div>
</template>

<script>
export default {
  name: 'BaseTextarea',

  inheritAttrs: false,

  props: {
    label: {
      type: String,
      default: ''
    },
    value: [String, Number],
    max: {
      type: Number,
      default: 300
    },
    rows: {
      type: [Number, String],
      default: 10
    }
  },

  methods: {
    onInput(event) {
      event.preventDefault();
      this.$emit('input', event.target.value);
    }
  },

  computed: {
    classNames() {
      return {
        'has-label': this.label
      };
    },
    listeners() {
      return {
        ...this.$listeners,
        input: this.onInput
      };
    }
  }
};
</script>

<style>
.base-textarea {
  position: relative;
  font-family: 'Open Sans', sans-serif;
}
.base-textarea label {
  font-size: 14px;
  color: var(--color-2);
  font-weight: bold;
}
.base-textarea textarea {
  box-shadow: none;
  border: 1px solid var(--color-2);
  border-radius: 8px;
  width: 100%;
  resize: vertical;
  outline: none;
  padding: 15px;
  font-size: 14px;
}
.base-textarea .text-count {
  position: absolute;
  right: 15px;
  bottom: 15px;
  font-size: 12px;
  color: var(--color-2);
  z-index: 15;
}
.base-textarea.has-label textarea {
  margin-top: 10px;
}
</style>
