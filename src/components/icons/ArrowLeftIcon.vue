<!--components/icons/ArrowLeftIcon.vue-->
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
      d="M15.6339 3.37658C15.1457 2.87447 14.3543 2.87447 13.8661 3.37658L6.36612 11.0909C5.87796 11.593 5.87796 12.407 6.36612 12.9091L13.8661 20.6234C14.3543 21.1255 15.1457 21.1255 15.6339 20.6234C16.122 20.1213 16.122 19.3073 15.6339 18.8051L9.01777 12L15.6339 5.19485C16.122 4.69275 16.122 3.87868 15.6339 3.37658Z"
      :fill="!hoverColor ? (!color ? '#3A3B46' : color) : hoverColor"
    />
  </svg>
</template>
