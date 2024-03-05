<template>
  <div>
    <NavBar />
    <div
      class="flex flex-col w-[1440px] h-[1570px] pt-10 pb-20 px-20 bg-[#FAFAFB]"
    >
      <div class="text-[24px] font-bold text-gray-600">
        Search For Pet Sitter
      </div>
      <div class="flex py-[80px] gap-9" ref="topRef">
        <SearchPanel :onSearch="handleSearch" :topRef="topRef" />
        <SitterCard v-if="pets.length > 0" :items="pets" />
        <div v-else class="flex text-[20px] pl-[26%] pt-[10%] gap-3">
          <PetIcon color="#FF7037" />
          Pet sitter not found <PetIcon color="#FF7037" />
        </div>
      </div>
      <div
        class="flex justify-center items-center gap-3 font-bold text-gray-300"
      >
        <button
          @click="handlePaging(paging.currentPage - 1)"
          class="p-[10px]"
          :disabled="paging.currentPage <= 1"
        >
          <ArrowLeftIcon color="#AEB1C3" />
        </button>
        <button
          v-for="page in paging.totalPages"
          :key="page"
          class="w-[40px] h-[40px] rounded-full hover:bg-orange-100 hover:text-orange-500"
          :class="{
            'bg-orange-100 text-orange-500': page === paging.currentPage,
          }"
          @click="handlePaging(page)"
        >
          {{ page }}
        </button>
        <button
          @click="handlePaging(paging.currentPage + 1)"
          class="p-[10px]"
          :disabled="paging.currentPage >= paging.totalPages"
        >
          <ArrowRightIcon color="#AEB1C3" />
        </button>
      </div>
    </div>
    <Footer />
  </div>
</template>

<script>
import axios from "axios";
import { ref } from "vue";

import SearchPanel from "./SearchPanel.vue";
import SitterCard from "./SitterCard.vue";
import NavBar from "../system_design/NavBar.vue";
import Footer from "../system_design/Footer.vue";
import ArrowLeftIcon from "../icons/ArrowLeftIcon.vue";
import ArrowRightIcon from "../icons/ArrowRightIcon.vue";
import PetIcon from "../icons/PetIcon.vue";

export default {
  name: "SearchPage",
  components: {
    NavBar,
    SearchPanel,
    SitterCard,
    Footer,
    ArrowLeftIcon,
    ArrowRightIcon,
    PetIcon,
  },
  setup() {
    const searchData = ref(null);
    const pets = ref([]);
    const paging = ref({
      currentPage: 1,
      totalPages: 1,
    });

    const topRef = ref(null);

    const handleSearch = (data) => {
      searchData.value = data;
      searchPets(data);
    };

    const handlePaging = (page) => {
      if (page >= 1 && page <= paging.value.totalPages) {
        searchPets({ ...searchData.value, paging: page });
      }
    };

    const searchPets = async (data) => {
      const searchParams = new URLSearchParams();
      if (data !== undefined) {
        if (data.search) searchParams.append("search", data.search);
        if (data.types && data.types.length > 0) {
          searchParams.append("petType", data.types.join(","));
        }
        if (data.rate) searchParams.append("rate", data.rate);
        if (data.exp && data.exp != 3) searchParams.append("exp", data.exp);
        if (data.paging) searchParams.append("page", data.paging);
      }
      console.log(searchParams.toString());

      const result = await axios.get(
        "http://localhost:4000/sitterManagement?" + searchParams.toString()
      );
      pets.value = result.data.data;
      paging.value = result.data.paging;
      if (topRef.value) {
        topRef.value.scrollIntoView({ behavior: "smooth" });
      }
    };

    return {
      searchData,
      pets,
      paging,
      handleSearch,
      handlePaging,
      topRef,
    };
  },
};
</script>

<style scoped>
/* Your component-specific styles go here */
</style>
./SearchPanel.vue
