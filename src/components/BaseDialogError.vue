<template>
  <div class="base-dialog-error">
    <div class="success-icon">
      <svg xmlns="http://www.w3.org/2000/svg" width="56.232" height="56.232">
        <path
          d="M28.116 0a28.116 28.116 0 1028.116 28.116A28.148 28.148 0 0028.116 0zm0 51.673a23.557 23.557 0 1123.557-23.557 23.583 23.583 0 01-23.557 23.557z"
          fill="#d92323"
        />
        <path
          d="M17.863 19.363L37.87 39.37m0-20.007L17.863 39.37"
          fill="none"
          stroke="#d92323"
          stroke-linecap="round"
          stroke-width="5"
        />
      </svg>
    </div>

    <div class="error-dialog-content">
      <h2 class="error-title">
        A problem occured!
      </h2>
      <p class="error-description">
        We cannot continue due to a problem.
        <br />
        Please try again later.
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'BaseDialogError'
};
</script>

<style>
.base-dialog-error {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 30px 0;
}
.base-dialog-error .error-dialog-content {
  width: 100%;
  margin-top: 12px;
}
.base-dialog-error .error-dialog-content .error-title {
  font-size: 24px;
  font-weight: bold;
  color: var(--color-10);
  text-transform: uppercase;
  text-align: center;
  margin-bottom: 10px;
}
.base-dialog-error .error-dialog-content .error-description {
  font-size: 14px;
  color: var(--color-2);
  text-align: center;
}
@media (min-width: 768px) {
  .base-dialog-error .error-dialog-content .error-title {
    font-size: 29px;
  }
  .base-dialog-error .error-dialog-content .error-description {
    font-size: 16px;
  }
}
</style>
