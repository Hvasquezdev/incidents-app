<template>
  <div class="base-dialog-loading">
    <div class="loading-icon">
      <svg xmlns="http://www.w3.org/2000/svg" width="56.232" height="56.232">
        <path
          d="M28.116 0a28.116 28.116 0 1028.116 28.116A28.148 28.148 0 0028.116 0zm0 51.673a23.557 23.557 0 1123.557-23.557 23.583 23.583 0 01-23.557 23.557z"
          fill="#3da836"
        />
        <path
          class="load-indicator"
          d="M13.764 0l4.77 9.579h21.16L43.56 0z"
          fill="#fff"
        />
        <path
          d="M28.116 0a28.116 28.116 0 1028.116 28.116A28.148 28.148 0 0028.116 0zm0 51.673a23.557 23.557 0 1123.557-23.557 23.583 23.583 0 01-23.557 23.557z"
          opacity=".1"
          fill="#3da836"
        />
      </svg>
    </div>
  </div>
</template>

<script>
export default {
  name: 'BaseDialogLoading'
};
</script>

<style>
.base-dialog-loading {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 100px 0 80px 0;
}
.base-dialog-loading .load-indicator {
  transform-origin: center;
  animation-name: spin;
  animation-duration: 1.2s;
  animation-iteration-count: infinite;
  animation-timing-function: linear;
}
@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>
