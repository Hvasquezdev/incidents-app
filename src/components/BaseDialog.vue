<template>
  <div :class="classNames" class="base-dialog">
    <button class="dialog-overlay" @click="onClose" />
    <div class="dialog-content">
      <div v-if="close && !loading" class="content-close">
        <base-button icon color="transparent" @click="onClose">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="17.579"
            height="17.579"
          >
            <path
              d="M3.535 3.536l10.508 10.508m0-10.508L3.535 14.043"
              fill="none"
              stroke="#172c49"
              stroke-linecap="round"
              stroke-width="5"
            />
          </svg>
        </base-button>
      </div>

      <base-dialog-success v-if="success" />

      <base-dialog-loading v-if="loading" />

      <base-dialog-error v-if="error" />

      <div v-if="!success && !error && !loading" class="dialog-content-wrapper">
        <slot />
      </div>
    </div>
  </div>
</template>

<script>
import BaseButton from '@/components/BaseButton';
import BaseDialogSuccess from '@/components/BaseDialogSuccess';
import BaseDialogLoading from '@/components/BaseDialogLoading';
import BaseDialogError from '@/components/BaseDialogError';

export default {
  name: 'BaseDialog',

  props: {
    rounded: Boolean,
    close: Boolean,
    loading: Boolean,
    success: Boolean,
    error: Boolean
  },

  components: {
    BaseButton,
    BaseDialogSuccess,
    BaseDialogLoading,
    BaseDialogError
  },

  computed: {
    classNames() {
      return {
        'is-rounded': this.rounded
      };
    }
  },

  methods: {
    onClose() {
      if (!this.loading) {
        this.$emit('close');
      }
    }
  }
};
</script>

<style>
.base-dialog {
  position: fixed;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
  bottom: 0;
  z-index: 999;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
}
.base-dialog .content-close .base-button {
  padding: 5px;
  margin-left: auto;
}
.base-dialog .dialog-overlay {
  border: none;
  outline: none;
  box-shadow: none;
  position: absolute;
  width: 100%;
  min-height: 100vh;
  left: 0;
  right: 0;
  bottom: 0;
  top: 0;
  background: var(--color-2);
  opacity: 0.5;
}
.base-dialog .dialog-content {
  background-color: var(--color-4);
  box-shadow: 0 0 6px var(--color-5);
  padding: 15px;
  position: relative;
  z-index: 999;
  display: grid;
  grid-template-columns: 1fr;
  column-gap: 15px;
}
.base-dialog.is-rounded .dialog-content {
  border-radius: 8px;
}
</style>
