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
      d="M19.875 11H4.125C3.82663 11 3.54048 11.1054 3.32951 11.2929C3.11853 11.4804 3 11.7348 3 12C3 12.2652 3.11853 12.5196 3.32951 12.7071C3.54048 12.8946 3.82663 13 4.125 13H19.875C20.1734 13 20.4595 12.8946 20.6705 12.7071C20.8815 12.5196 21 12.2652 21 12C21 11.7348 20.8815 11.4804 20.6705 11.2929C20.4595 11.1054 20.1734 11 19.875 11Z"
      :fill="!hoverColor ? (!color ? '#3A3B46' : color) : hoverColor"
    />
  </svg>
</template>
