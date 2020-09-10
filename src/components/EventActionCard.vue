<template>
  <button :class="classNames" class="event-action-card" @click="onClick">
    <h3 class="action-title">
      {{ action.title }}
    </h3>
    <p class="action-description">
      {{ action.description }}
    </p>
  </button>
</template>

<script>
export default {
  name: 'EventActionCard',

  props: {
    selected: {
      type: Object,
      default: () => ({})
    },
    action: {
      type: Object,
      default: () => ({})
    },
    color: {
      type: String,
      default: ''
    },
    shadow: Boolean
  },

  computed: {
    isSelected() {
      const selectedAction = this.selected && this.selected.id;
      const currentAction = this.action && this.action.id;

      if (!selectedAction || !currentAction) {
        return false;
      }

      return currentAction === selectedAction;
    },
    classNames() {
      const isSelected = this.isSelected;

      return {
        'is-selected': isSelected,
        [`is-${this.color}`]: this.color,
        'has-shadow': this.shadow
      };
    }
  },

  methods: {
    onClick() {
      this.$emit('select', this.action);
    }
  }
};
</script>

<style>
.event-action-card {
  font-family: 'Open Sans', sans-serif;
  padding: 15px 20px;
  cursor: pointer;
  outline: none;
  border: none;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  text-align: left;
  background-color: var(--color-4);
  color: var(--color-2);
  width: 100%;
  transition: all 0.25s;
}
.event-action-card.has-shadow {
  box-shadow: 0 2px 6px var(--color-5);
}
.event-action-card.is-grey {
  background-color: var(--color-1);
}
.event-action-card .action-title {
  font-size: 16px;
  line-height: 26px;
  font-weight: bold;
  text-transform: capitalize;
}
.event-action-card .action-description {
  font-size: 14px;
  line-height: 18px;
}
.event-action-card.is-selected {
  background-color: var(--color-2);
  color: var(--color-4);
}
@media (min-width: 768px) {
  .event-action-card .action-title {
    font-size: 18px;
  }
  .event-action-card .action-description {
    font-size: 16px;
    line-height: 22px;
  }
}
</style>
