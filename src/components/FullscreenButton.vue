<template>
  <base-button
    :class="classNames"
    class="fullscreen-button"
    color="transparent"
    icon
    @click="$emit('toggle')"
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="23.163"
      height="22.177"
      class="close-fullscreen"
    >
      <path
        d="M7.163 0v6.177H0M7.163 22.177V16H0M16 0v6.177h7.163M16 22.177V16h7.163"
      />
    </svg>

    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 298.667 298.667"
      width="23.163"
      height="22.177"
      class="open-fullscreen"
    >
      <path
        d="M42.667 192H0v106.667h106.667V256h-64zM0 106.667h42.667v-64h64V0H0zM192 0v42.667h64v64h42.667V0zM256 256h-64v42.667h106.667V192H256z"
      />
    </svg>
  </base-button>
</template>

<script>
import BaseButton from '@/components/BaseButton';

export default {
  name: 'FullscreenButton',

  props: {
    open: Boolean
  },

  components: {
    BaseButton
  },

  computed: {
    classNames() {
      return {
        'is-open': this.open,
        'is-closed': !this.open
      };
    }
  }
};
</script>

<style>
.fullscreen-button {
  filter: drop-shadow(0px 3px 6px var(--color-5));
  position: relative;
}
.fullscreen-button svg {
  transition: all 0.25s;
}
.fullscreen-button .close-fullscreen {
  position: absolute;
  right: 50%;
  top: 50%;
  fill: none;
  stroke: var(--color-4);
  stroke-width: 3px;
  opacity: 0;
  transform: scale(0);
}
.fullscreen-button .open-fullscreen {
  fill: var(--color-4);
  opacity: 0;
  transform: scale(0);
}
.fullscreen-button.is-open .close-fullscreen {
  opacity: 1;
  transform: translate(50%, -50%) scale(1);
}
.fullscreen-button.is-closed .open-fullscreen {
  opacity: 1;
  transform: scale(1);
}
</style>
