<script>
export default {
  props: {
    width: {
      type: Number,
      default: 24,
    },
    height: {
      type: Number,
      default: 24,
    },
    color: {
      type: String,
      default: "",
    },
    rect: {
      type: String,
      default: "",
    },
    circle: {
      type: String,
      default: "",
    },
  },
};
</script>

<template>
  <div>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      :width="!width ? 118 : width"
      :height="!height ? 118 : height"
      viewBox="0 0 118 118"
      fill="none"
    >
      <path
        d="M0 117.5C3.68009e-07 102.07 3.03923 86.7905 8.94416
      72.5347C14.8491 58.2789 23.5041 45.3258 34.415 34.4149C45.3258 23.5041
      58.279 14.8491 72.5347 8.94415C86.7905 3.03922 102.07 -2.88193e-06 117.5
      0L117.5 77.3354C112.226 77.3354 107.003 78.3742 102.13 80.3927C97.2567
      82.4112 92.8289 85.3697 89.0993 89.0993C85.3697 92.8289 82.4112 97.2566
      80.3927 102.13C78.3742 107.003 77.3353 112.226 77.3353 117.5H0Z"
        :fill="color ? color : '#FFCA62'"
      />
    </svg>
  </div>
</template>

<style></style>
