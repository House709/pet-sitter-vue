<template>
  <button
    :id="id"
    @click="onClickHandler"
    :type="type"
    class="inline-flex justify-center items-center py-3 px-6 rounded-full gap-2 border-none bg-orange-100 text-orange-500 text-bodyButton hover:text-orange-400 active:text-orange-600 disabled:bg-gray-200 disabled:text-gray-100"
    :style="{ width: width ? width : '139px', height: '48px' }"
    :disabled="disabled"
  >
    {{ content }}
  </button>
</template>

<script>
export default {
  props: {
    id: String,
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
      default: "",
    },
    onClick: {
      type: Function,
      default: null,
    },
  },
  methods: {
    onClickHandler() {
      if (this.onClick) {
        this.onClick();
      }
    },
  },
};
</script>

<style scoped>
/* Your component-specific styles go here */
</style>
