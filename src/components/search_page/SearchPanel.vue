<template>
  <div class="flex w-[394px] h-[604px] pr-6 bg-etc-white rounded-[16px]">
    <form @submit.prevent="handleSubmit" class="flex flex-col gap-[40px] p-6">
      <!-- Start Search -->
      <div>
        <div class="text-body2 text-etc-black">Search</div>
        <div class="relative">
          <input
            type="text"
            id="search"
            class="peer/search outline-none flex w-full h-[48px] py-3 pl-3 pr-4 border-solid rounded-[8px] border-[#DCDFED] border-[1px] focus:border-orange-300 bg-etc-white"
            v-model="searchData.search"
            @focus="setFocus(true)"
            @blur="setFocus(false)"
          />
          <div class="absolute right-4 bottom-3 peer-focus/search:">
            <SearchIcon :color="focus ? '#ffb899' : '#AEB1C3'" />
          </div>
        </div>
      </div>
      <!-- End Search -->

      <!-- Start Pet Type -->
      <div>
        <div class="text-[16px] pb-4 font-bold text-etc-black">Pet Type:</div>
        <div
          class="flex relative text-[16px] font-medium items-center justify-between"
        >
          <BaseCheckbox
            v-for="type in allPetTypes"
            :key="type"
            :label="type"
            :isChecked="searchData.types.includes(type)"
            @change="handleCheckBox(type)"
          />
        </div>
      </div>
      <!-- End Pet Type -->

      <!-- Start Rating -->
      <div>
        <div class="text-[16px] pb-4 font-bold text-black">Rating:</div>
        <div class="flex flex-wrap gap-2">
          <button
            type="button"
            v-for="(rate, index) in starRates"
            :key="index"
            class="flex items-center h-[36px] px-2 py-1 gap-[2px] border-[1px] text-gray-400 rounded-[8px] border-[#DCDFED] bg-etc-white hover:border-orange-500"
            :class="{
              'border-orange-500 text-orange-500': rate === searchData.rate,
            }"
            @click="handleRating(rate)"
          >
            <span class="pr-[3px] font-Satoshi">{{ rate }}</span>
            <StarIcon v-for="(_, index) in rate" :key="index" color="#1CCD83" />
          </button>
        </div>
      </div>
      <!-- End Rating -->

      <!-- Start Experience -->
      <div class="Experience">
        <div class="text-[16px] font-bold pb-4 text-etc-black">Experience:</div>
        <select
          class="select w-[346px] text-[#7B7E8F] border-[#DCDFED] bg-etc-white"
          @change="handleExperience"
          v-model="searchData.exp"
        >
          <option value="3">All Experiences</option>
          <option v-for="exp in allExp" :key="exp.value" :value="exp.value">
            {{ exp.label }}
          </option>
        </select>
      </div>
      <!-- End Experience -->

      <!-- Start Button -->
      <div class="flex gap-4">
        <ButtonSecondary
          content="Clear"
          :width="165"
          :onClick="handleClear"
          type="button"
        />
        <ButtonPrimary
          content="Search"
          :width="165"
          type="button"
          :onClick="handleSubmit"
        />
      </div>
      <!-- Start Button -->
    </form>
  </div>
</template>

<script>
import { ref, reactive, onMounted } from "vue";
import StarIcon from "../icons/StarIcon.vue";
import SearchIcon from "../icons/SearchIcon.vue";
import ButtonPrimary from "../buttons/ButtonPrimary.vue";
import ButtonSecondary from "../buttons/ButtonSecondary.vue";
import BaseCheckbox from "../system_design/BaseCheckbox.vue";

export default {
  props: {
    onSearch: Function,
  },
  components: {
    StarIcon,
    SearchIcon,
    BaseCheckbox,
    ButtonPrimary,
    ButtonSecondary,
  },
  setup(props) {
    const searchParams = new URLSearchParams(window.location.search);

    let petType;
    if (searchParams.get("petType")) {
      petType = searchParams.get("petType").split(",");
    }
    const searchData = reactive({
      search: "",
      types: petType || [],
      rate: parseInt(searchParams.get("rate")),
      exp: parseInt(searchParams.get("exp")) || 3,
    });

    onMounted(() => {
      props.onSearch(searchData);
    });

    const focus = ref(false);

    const setFocus = (isFocused) => {
      focus.value = isFocused;
    };

    const allPetTypes = ["Dog", "Cat", "Bird", "Rabbit"];
    const starRates = [5, 4, 3, 2, 1];
    const allExp = [
      { label: "0-2 Years", value: 0 },
      { label: "3-5 Years", value: 1 },
      { label: "5+ Years", value: 2 },
    ];

    const handleSearchText = (event) => {
      searchData.search = event.target.value;
    };

    const handleCheckBox = (type) => {
      if (searchData.types.includes(type)) {
        searchData.types = searchData.types.filter(
          (eachType) => eachType !== type
        );
      } else {
        searchData.types.push(type);
      }
    };

    const handleRating = (rate) => {
      if (searchData.rate === rate) {
        searchData.rate = undefined;
      } else {
        searchData.rate = rate;
      }
    };

    const handleExperience = (event) => {
      searchData.exp = event.target.value;
    };

    const handleSubmit = () => {
      props.onSearch(searchData);
    };

    const handleClear = () => {
      const clearedSearchData = {
        search: "",
        types: [],
        rate: undefined,
        exp: 3,
      };
      Object.assign(searchData, clearedSearchData);
      const searchParams = new URLSearchParams();

      const newUrl = `${window.location.pathname}${searchParams.toString()}`;
      window.history.replaceState({}, "", newUrl);
      props.onSearch(clearedSearchData);
    };

    return {
      searchData,
      focus,
      setFocus,
      allPetTypes,
      starRates,
      allExp,
      handleSearchText,
      handleCheckBox,
      handleRating,
      handleExperience,
      handleSubmit,
      handleClear,
      petType,
    };
  },
};
</script>

<style scoped>
/* Your component-specific styles go here */
</style>
