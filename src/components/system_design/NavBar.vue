<script>
import SitterIconBlack from "../icons/SitterIconBlack.vue";
import ButtonPrimary from "../buttons/ButtonPrimary.vue";

export default {
  components: {
    SitterIconBlack,
    ButtonPrimary,
  },
};
</script>

<template>
  <div class="flex justify-between h-[48px] px-[80px]">
    <SitterIconBlack :width="131" :height="40" />
    <div class="flex justify-between w-[240px]">
      <img
        src="https://s3-alpha-sig.figma.com/img/b634/c0e6/b2167e6ebb43b2584399a4a076eaac76?Expires=1710115200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=csw-NNpGb~~i8QKho16eskx-81nV00mxCpL6aIYEGsR7EJR~XVWZLANaiJPnvGqCbDDZD0OFPeV8DJmsvchC1NAFWoX-cFQBXFpMB04CFj15qMUt-l0KM-mxFFKJ8R9kQO~iB2TbdsZKR99EqSwGCUF6NYmlqDGWJeFbXLyYEXNiK0URlmJxWQ4rv6iSuBE~gHeYabsh~QcVMHc8OMShU49ZjsbbVV4OYW46pswzPsEyQe3sLzeZN-gZ7ppYdp~sSw9Dx-5MwlpwNOalOs5upmVWs~PYAZYE9dLYikn6nHUAovDrQ8h9F47nphyJhpeYN-qcsqdtFBJZQqJkexIb2g__"
        alt="John Wick"
        width="48"
        height="48"
        class="w-12 h-12 rounded-full object-cover"
      />
      <ButtonPrimary content="Find A Pet Sitter" :width="180" />
    </div>
  </div>
</template>

<style scoped></style>
