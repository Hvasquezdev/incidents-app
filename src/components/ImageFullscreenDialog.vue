<template>
  <base-dialog class="fullscreen-image" @close="$emit('close')">
    <img class="full-image" :src="src" :alt="alt" />
    <fullscreen-button :open="true" @toggle="$emit('close')" />
  </base-dialog>
</template>

<script>
import BaseDialog from '@/components/BaseDialog';
import FullscreenButton from '@/components/FullscreenButton';

export default {
  name: 'ImageFullscreenDialog',

  props: {
    src: {
      type: String,
      default: ''
    },
    alt: {
      type: String,
      default: ''
    }
  },

  components: {
    BaseDialog,
    FullscreenButton
  }
};
</script>

<style>
.fullscreen-image .fullscreen-button {
  position: absolute;
  right: 15px;
  bottom: 15px;
  z-index: 15;
}
.fullscreen-image .dialog-content {
  display: flex;
  align-items: center;
  justify-content: center;
  max-width: 90%;
}
</style>
