<template>
  <div class="w-[848px] flex flex-col gap-4">
    <router-link
      :to="`/sitterDetail/${card.id}`"
      v-for="(card, index) in items"
      :key="index"
    >
      <div
        class="flex p-4 gap-10 bg-etc-white rounded-[16px] hover:border-[#FF7037] hover:border-solid hover:border-[1px]"
      >
        <img
          :src="card.trade_image_path[0]"
          :alt="card.trade_name"
          class="object-cover w-[245px] h-[184px] rounded-[8px]"
        />
        <div class="flex flex-col gap-6">
          <div class="flex gap-4">
            <div>
              <img
                :src="card.sitter_profile"
                :alt="card.full_name"
                class="object-cover w-[64px] h-[64px] rounded-full"
              />
            </div>
            <div class="w-[315px]">
              <span class="text-[24px] font-bold text-[#000]">
                {{ card.trade_name }}
                <br />
              </span>
              <span class="text-[18px] font-medium text-[#000]">
                By {{ card.full_name }}
              </span>
            </div>
            <div class="flex w-[120px] h-[32px] p-[6px] gap-[2px] justify-end">
              <StarIcon
                v-for="(star, index) in Array.from({
                  length: Math.floor(card.avg_rating),
                })"
                :key="index"
                color="#1CCD83"
              />
            </div>
          </div>
          <div class="flex gap-[6px]">
            <div>
              <MapMakerIcon color="#AEB1C3" />
            </div>
            <div class="text-[#7B7E8F] text-[16px] font-medium">
              {{ card.district }}, {{ card.province }}
            </div>
          </div>
          <div class="flex gap-2">
            <span v-for="(pet, index) in card.pet_type" :key="index">
              <component :is="getPetTypeComponent(pet)" />
            </span>
          </div>
        </div>
      </div>
    </router-link>
  </div>
</template>

<script>
import StarIcon from "../icons/StarIcon.vue";
import MapMakerIcon from "../icons/MapMakerIcon.vue";
import DogType from "../system_design/DogType.vue";
import CatType from "../system_design/CatType.vue";
import BirdType from "../system_design/BirdType.vue";
import RabbitType from "../system_design/RabbitType.vue";
import { defineComponent } from "vue";

export default defineComponent({
  components: {
    StarIcon,
    MapMakerIcon,
    DogType,
    CatType,
    RabbitType,
    BirdType,
  },
  props: {
    items: Array,
  },
  methods: {
    getPetTypeComponent(pet) {
      switch (pet) {
        case "Dog":
          return DogType;
        case "Cat":
          return CatType;
        case "Bird":
          return BirdType;
        case "Rabbit":
          return RabbitType;
        default:
          return null;
      }
    },
  },
});
</script>

<style scoped>
/* Your component-specific styles go here */
</style>
