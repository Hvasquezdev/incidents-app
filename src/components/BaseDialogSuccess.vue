<template>
  <div class="base-dialog-success">
    <div class="success-icon">
      <svg xmlns="http://www.w3.org/2000/svg" width="56.232" height="56.232">
        <path
          class="a"
          fill="#3da836"
          d="M42.156 18.873a2.279 2.279 0 00-3.223-.085l-14.553 13.8-6.942-7.127a2.28 2.28 0 00-3.266 3.181l8.511 8.738a2.28 2.28 0 003.2.064l16.185-15.346a2.279 2.279 0 00.088-3.225z"
        />
        <path
          class="a"
          fill="#3da836"
          d="M28.116 0a28.116 28.116 0 1028.116 28.116A28.148 28.148 0 0028.116 0zm0 51.673a23.557 23.557 0 1123.557-23.557 23.583 23.583 0 01-23.557 23.557z"
        />
      </svg>
    </div>

    <div class="success-dialog-content">
      <h2 class="success-title">
        Action has been taken!
      </h2>
      <p class="success-description">
        You can see the action details from the details tab.
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'BaseDialogSuccess'
};
</script>

<style>
.base-dialog-success {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 30px 0;
}
.base-dialog-success .success-dialog-content {
  width: 100%;
  margin-top: 12px;
}
.base-dialog-success .success-dialog-content .success-title {
  font-size: 24px;
  font-weight: bold;
  color: var(--color-7);
  text-transform: uppercase;
  text-align: center;
  margin-bottom: 10px;
}
.base-dialog-success .success-dialog-content .success-description {
  font-size: 14px;
  color: var(--color-2);
  text-align: center;
}
@media (min-width: 768px) {
  .base-dialog-success .success-dialog-content .success-title {
    font-size: 29px;
  }
  .base-dialog-success .success-dialog-content .success-description {
    font-size: 16px;
  }
}
</style>
