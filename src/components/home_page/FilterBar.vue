<script>
import { ref } from "vue";
import { useRouter } from "vue-router";
import BaseCheckbox from "../system_design/BaseCheckbox.vue";
import ButtonPrimary from "../buttons/ButtonPrimary.vue";
import StarIcon from "../icons/StarIcon.vue";
import CheckIcon from "../icons/CheckIcon.vue";
export default {
  components: {
    BaseCheckbox,
    StarIcon,
    ButtonPrimary,
    CheckIcon,
  },
  setup() {
    const router = useRouter();

    const searchData = ref({
      types: [],
      rate: undefined,
      exp: 3,
    });

    const petType = ["Dog", "Cat", "Bird", "Rabbit"];
    const starRates = [5, 4, 3, 2, 1];
    const allExp = [
      { label: "0-2 Years", value: 0 },
      { label: "3-5 Years", value: 1 },
      { label: "5+ Years", value: 2 },
    ];

    const handleCheckBox = (type) => {
      if (searchData.value.types.includes(type)) {
        searchData.value.types = searchData.value.types.filter(
          (eachType) => eachType !== type
        );
      } else {
        searchData.value.types.push(type);
      }
    };

    const handleRating = (rate) => {
      searchData.value.rate = searchData.value.rate === rate ? undefined : rate;
    };

    const handleExperience = (event) => {
      searchData.value.exp = event.target.value;
    };

    const handleSearch = () => {
      const queryParams = {};

      if (searchData.value.types.length > 0) {
        queryParams.petType = searchData.value.types.join(",");
      }

      if (
        searchData.value.rate !== undefined &&
        searchData.value.rate !== null
      ) {
        queryParams.rate = searchData.value.rate;
      }

      if (searchData.value.exp !== undefined && searchData.value.exp !== null) {
        queryParams.exp = searchData.value.exp;
      }

      router.push({
        name: "search",
        query: queryParams,
      });
    };

    return {
      searchData,
      petType,
      starRates,
      allExp,
      handleCheckBox,
      handleRating,
      handleExperience,
      handleSearch,
    };
  },
};
</script>

<template>
  <div class="max-w-[1064px] mx-auto rounded-[15px]">
    <!-- Pet Type Section -->
    <div
      class="w-full p-6 bg-gray-100 rounded-t-[15px] flex items-center gap-3 self-stretch"
    >
      <div class="font-bold">Pet Type:</div>
      <div class="flex items-center gap-[26px]">
        <BaseCheckbox
          v-for="type in petType"
          :key="type"
          :label="type"
          :isChecked="searchData.types.includes(type)"
          @change="handleCheckBox(type)"
        />
      </div>
    </div>

    <!-- Rating and Experience Section -->
    <div
      class="w-full p-6 bg-etc-white rounded-b-[15px] flex items-center gap-6 self-stretch"
    >
      <!-- Rating Section -->
      <div class="flex justify-center items-center">
        <div class="w-[70px] pr-3 font-bold">Rating:</div>
        <div class="flex gap-2">
          <button
            :id="`${rate}star`"
            v-for="(rate, index) in starRates"
            :key="index"
            :class="[
              'flex items-center h-[36px] px-2 py-1 gap-[2px] border-[1px] text-gray-400 rounded-[8px] border-[#DCDFED] bg-white hover:border-orange-500',
              { 'border-orange-500 text-orange-500': rate === searchData.rate },
            ]"
            @click="handleRating(rate)"
          >
            <span class="pr-[3px] font-Satoshi">{{ rate }}</span>
            <StarIcon v-for="(_, index) in rate" :key="index" color="#1CCD83" />
          </button>
        </div>
      </div>

      <!-- Experience Section -->
      <div class="flex items-center gap-3 w-[244px]">
        <div class="font-bold">Experience:</div>
        <select
          class="select w-full text-[#7B7E8F] border-[#DCDFED] bg-etc-white"
          @change="handleExperience"
          v-model="searchData.exp"
        >
          <option value="3">All Experiences</option>
          <option v-for="exp in allExp" :key="exp.value" :value="exp.value">
            {{ exp.label }}
          </option>
        </select>
      </div>

      <!-- Search Button -->
      <div>
        <ButtonPrimary content="Search" :onClick="handleSearch" />
      </div>
    </div>
  </div>
</template>

<style scoped>
/* Your component-specific styles go here */
</style>
