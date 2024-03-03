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
      :width="!width ? 230 : width"
      :height="!height ? 230 : height"
      viewBox="0 0 230 230"
      fill="none"
    >
      <circle
        cx="115.233"
        cy="115.233"
        r="114.5"
        transform="rotate(15 115.233 115.233)"
        :fill="!color ? '#FFCA62' : color"
      />
    </svg>
  </div>
</template>

<style></style>
