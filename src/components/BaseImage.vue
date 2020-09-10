<template>
  <div class="base-image">
    <img class="preview-image" :src="src" :alt="alt" />
    <fullscreen-button
      v-if="hasFullscreen"
      :open="false"
      @toggle="isFullscreen = true"
    />

    <image-fullscreen-dialog
      v-if="isFullscreen"
      :src="src"
      :alt="alt"
      @close="isFullscreen = false"
    />
  </div>
</template>

<script>
export default {
  name: 'BaseImage',

  props: {
    src: {
      type: String,
      default: ''
    },
    alt: {
      type: String,
      default: ''
    },
    hasFullscreen: Boolean
  },

  components: {
    FullscreenButton: () => import('@/components/FullscreenButton'),
    ImageFullscreenDialog: () => import('@/components/ImageFullscreenDialog')
  },

  data() {
    return {
      isFullscreen: false
    };
  }
};
</script>

<style>
.base-image {
  position: relative;
  padding-top: 85%;
}
.base-image .preview-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  top: 0;
  z-index: 10;
}
.base-image .fullscreen-button {
  position: absolute;
  right: 10px;
  bottom: 5px;
  z-index: 15;
}
</style>
