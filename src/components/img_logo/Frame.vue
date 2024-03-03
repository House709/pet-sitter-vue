<!-- components\img_logo\Frame.vue -->
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
      :width="!width ? 79 : width"
      :height="!height ? 44 : height"
      viewBox="0 0 79 44"
      fill="none"
    >
      <rect width="79" height="44" rx="22" :fill="!rect ? '#F6F6F9' : color" />
      <circle cx="51" cy="22" r="7" :fill="!circle ? '#76D0FC' : color" />
      <circle cx="28" cy="22" r="7" :fill="!circle ? '#76D0FC' : color" />
    </svg>
  </div>
</template>

<style></style>
