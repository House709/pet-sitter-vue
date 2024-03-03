<script>
import Ellipse16 from "../img_logo/Ellipse16.vue";
import Ellipse17 from "../img_logo/Ellipse17.vue";
import Star1 from "../img_logo/Star1.vue";
import ButtonPrimary from "../buttons/ButtonPrimary.vue";

export default {
  components: {
    Ellipse16,
    Ellipse17,
    Star1,
    ButtonPrimary,
  },
};
</script>

<template>
  <div class="min-w-[1440px] p-20 flex flex-col">
    <div
      class="w-full h-[448px] bg-yellow-100 rounded-[16px] relative overflow-hidden"
    >
      <div class="absolute right-[-25px] top-[-35px]">
        <Ellipse16 :width="229" :height="229" />
      </div>
      <div class="absolute bottom-[130px] left-[965px]">
        <Star1 :width="191" :height="186" />
      </div>
      <div class="absolute bottom-0">
        <Ellipse17 :width="337" :height="168" />
      </div>
      <div
        class="inline-flex flex-col justify-center items-center gap-10 w-[457px] h-[216px] mx-[411px] my-[116px]"
      >
        <p class="text-headline1 text-etc-black text-center">
          Perfect Pet Sitter For Your Pet
        </p>
        <ButtonPrimary content="Find A Pet Sitter" :width="120" />
      </div>
    </div>
  </div>
</template>

<style></style>
