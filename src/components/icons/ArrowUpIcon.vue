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
      d="M3.37658 16.6339C2.87447 16.1457 2.87447 15.3543 3.37658 14.8661L11.0909 7.36612C11.593 6.87796 12.407 6.87796 12.9091 7.36612L20.6234 14.8661C21.1255 15.3543 21.1255 16.1457 20.6234 16.6339C20.1213 17.122 19.3073 17.122 18.8051 16.6339L12 10.0178L5.19485 16.6339C4.69275 17.122 3.87868 17.122 3.37658 16.6339Z"
      :fill="!hoverColor ? (!color ? '#3A3B46' : color) : hoverColor"
    />
  </svg>
</template>
