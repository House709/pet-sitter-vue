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
      :width="!width ? 253 : width"
      :height="!height ? 253 : height"
      viewBox="0 0 253 253"
      fill="none"
    >
      <path d="M253 253V118L109 253H253Z" fill="#76D0FC" />
      <path
        d="M0 126.5C0 196.364 56.636 253 126.5 253C196.364 253 253 196.364 253 126.5C253 56.636 196.364 0 126.5 0C56.636 0 0 56.636 0 126.5ZM188.047 126.5C188.047 160.491 160.491 188.047 126.5 188.047C92.5085 188.047 64.953 160.491 64.953 126.5C64.953 92.5085 92.5085 64.953 126.5 64.953C160.491 64.953 188.047 92.5085 188.047 126.5Z"
        :fill="color ? color : '#76D0FC'"
      />
    </svg>
  </div>
</template>

<style></style>
