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
      :width="!width ? 188 : width"
      :height="!height ? 192 : height"
      viewBox="0 0 188 192"
      fill="none"
    >
      <path
        d="M123.387 0.717219L136.384 50.7374L187.827 56.1232L156.791 97.44L184.673 140.976L132.974 142.477L116.299 191.38L82.868 151.935L34.1929 169.379L44.2036 118.691L0.181374 91.5415L46.096 67.7794L39.8763 16.4798L87.1202 37.5372L123.387 0.717219Z"
        :fill="!color ? '#1CCD83' : color"
      />
    </svg>
  </div>
</template>

<style></style>
