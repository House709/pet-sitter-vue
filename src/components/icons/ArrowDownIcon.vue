<!--components/icons/ArrowDownIcon.vue-->
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
    hoverColor: {
      type: String,
      default: "",
    },
    onFocus: {
      type: String,
      default: "",
    },
  },
};
</script>

<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    :width="!width ? 24 : width"
    :height="!height ? 24 : height"
    viewBox="0 0 24 24"
    fill="none"
  >
    <path
      d="M3.37658 7.36612C2.87447 7.85427 2.87447 8.64573 3.37658 9.13388L11.0909 16.6339C11.593 17.122 12.407 17.122 12.9091 16.6339L20.6234 9.13388C21.1255 8.64573 21.1255 7.85427 20.6234 7.36612C20.1213 6.87796 19.3073 6.87796 18.8051 7.36612L12 13.9822L5.19485 7.36612C4.69275 6.87796 3.87868 6.87796 3.37658 7.36612Z"
      :fill="!hoverColor ? (!color ? '#3A3B46' : color) : hoverColor"
    />
  </svg>
</template>
