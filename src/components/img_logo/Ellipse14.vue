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
      :width="!width ? 216 : width"
      :height="!height ? 253 : height"
      viewBox="0 0 216 253"
      fill="none"
    >
      <path
        d="M89.5 0C110.303 2.48074e-07 130.785 5.13047 149.132 14.937C167.478 24.7434 183.123 38.9233 194.681 56.2204C206.238 73.5175 213.352 93.3979 215.391 114.101C217.43 134.804 214.332 155.69 206.371 174.909C198.41 194.129 185.832 211.088 169.751 224.286C153.67 237.483 134.582 246.511 114.179 250.569C93.7756 254.628 72.6863 253.592 52.779 247.553C32.8717 241.514 14.761 230.659 0.0510178 215.949L89.5 126.5V0Z"
        :fill="color ? color : '#1CCD83'"
      />
    </svg>
  </div>
</template>

<style></style>
