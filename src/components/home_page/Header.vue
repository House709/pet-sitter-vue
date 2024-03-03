<!-- components\homepage\Header.vue -->
<script>
import Ellipse14 from "../img_logo/Ellipse14.vue";
import Ellipse15 from "../img_logo/Ellipse15.vue";
import Ellipse16 from "../img_logo/Ellipse16.vue";
import Ellipse17 from "../img_logo/Ellipse17.vue";
import Ellipse21 from "../img_logo/Ellipse21.vue";

import Group25 from "../img_logo/Group25.vue";
import Frame from "../img_logo/Frame.vue";
import Star1 from "../img_logo/Star1.vue";
import Vector from "../img_logo/Vector.vue";

export default {
  components: {
    Ellipse14,
    Ellipse15,
    Ellipse16,
    Ellipse17,
    Ellipse21,
    Group25,
    Frame,
    Star1,
    Vector,
  },
};
</script>

<template>
  <div class="min-w-[1440px] flex pb-16 pt-20">
    <div class="relative w-[428px] h-[441px]">
      <div class="absolute top-[-5px] left-[230px] right-[35px]">
        <Vector :width="163" :height="169" />
      </div>
      <div class="absolute top-[81.5px] left-[67px] right-[243.5px]">
        <Ellipse15 :width="117.5" :height="117.5" />
      </div>
      <div class="absolute top-[176.5px] left-[162px] right-[187px] z-10">
        <Frame :width="79" :height="44" />
      </div>
      <div
        class="absolute w-[253px] h-[253px] bottom-0 left-[121px] right-[54px]"
      >
        <img src="@/assets/images/ThreeCat.png" alt="ThreeCat" />
      </div>
    </div>
    <div class="w-[544px] h-[352px] mt-[45px] mx-5">
      <p class="text-display text-center text-etc-black mb-8">
        Pet Sitter<span class="text-orange-500">, </span> Perfect<span
          class="text-blue-500"
          >,
        </span>
        <br />
        For Your Pet<span class="text-yellow-200">.</span>
      </p>
      <p class="text-headline3 text-center text-gray-400">
        Find your perfect pet sitter with us.
      </p>
    </div>
    <div class="relative w-[428px] h-[441px]">
      <div class="absolute">
        <Star1 color="#FF7037" :width="160" :height="156" />
      </div>
      <div class="absolute bottom-0 left-[49px] right-[150px]">
        <Ellipse17 color="#1CCD83" :width="229" :height="115" />
      </div>
      <div class="absolute bottom-[103px] left-[64px] right-[300px]">
        <Ellipse16 color="#F6F6F9" :width="67" :height="67" />
      </div>
      <div class="absolute bottom-[108px] left-[95px] right-[72px]">
        <img src="@/assets/images/Dog.png" alt="Dog" />
      </div>
    </div>
  </div>
</template>

<style></style>
