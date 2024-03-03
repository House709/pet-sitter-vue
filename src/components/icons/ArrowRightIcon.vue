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
      d="M8.36612 3.37658C8.85427 2.87447 9.64573 2.87447 10.1339 3.37658L17.6339 11.0909C18.122 11.593 18.122 12.407 17.6339 12.9091L10.1339 20.6234C9.64573 21.1255 8.85427 21.1255 8.36612 20.6234C7.87796 20.1213 7.87796 19.3073 8.36612 18.8051L14.9822 12L8.36612 5.19485C7.87796 4.69275 7.87796 3.87868 8.36612 3.37658Z"
      :fill="!hoverColor ? (!color ? '#3A3B46' : color) : hoverColor"
    />
  </svg>
</template>
