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
      :width="!width ? 337 : width"
      :height="!height ? 168 : height"
      viewBox="0 0 337 168"
      fill="none"
    >
      <path
        d="M0 168C1.06582e-06 123.444 17.7526 80.7122 49.3524 49.2061C80.9523 17.7 123.811 5.54167e-05 168.5 1.3013e-10C213.189 -5.54164e-05 256.047 17.6998 287.647 49.2058C319.247 80.7119 337 123.443 337 168L222.225 168C222.225 153.793 216.565 140.169 206.489 130.123C196.414 120.078 182.749 114.434 168.5 114.434C154.251 114.434 140.586 120.078 130.511 130.123C120.435 140.169 114.775 153.794 114.775 168H0Z"
        :fill="color ? color : '#FFCA62'"
      />
    </svg>
  </div>
</template>

<style></style>
