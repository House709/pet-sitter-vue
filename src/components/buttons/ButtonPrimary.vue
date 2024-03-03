<!--components/buttons/ButtonPrimary.vue-->
<script>
export default {
  props: {
    type: {
      type: String,
      default: null,
    },
    width: {
      type: Number,
      default: 139,
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    content: {
      type: String,
      default: "123",
    },
    onClick: {
      type: Function,
      default: null,
    },
  },
};
</script>

<template>
  <button
    @onClick="onClick ? onClick : null"
    :type="type ? type : null"
    class="inline-flex justify-center items-center py-3 px-6 rounded-full gap-2 border-none bg-orange-500 text-white text-bodyButton hover:bg-orange-400 active:bg-orange-600 disabled:bg-gray-200 disabled:text-gray-300"
    :style="{ width: width ? width : '139px', height: '48px' }"
  >
    {{ content }}
  </button>
</template>

<style></style>
