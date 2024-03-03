<!-- <template>
  <div>
    <Navbar />
    <div
      class="flex flex-col w-[1440px] h-[1570px] pt-10 pb-20 px-20 bg-[#FAFAFB]"
    >
      <div class="text-[24px] font-bold text-gray-600">
        Search For Pet Sitter
      </div>
      <div class="flex py-[80px] gap-9" ref="topRef">
        <SitterSearch @onSearch="searchPets" />
        <SitterCardList v-if="pets.length > 0" :items="pets" />
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
import SitterSearch from "@/components/seacrhlistcomponent/SitterSearch.vue";
import SitterCardList from "@/components/seacrhlistcomponent/SitterCardList.vue";
import Navbar from "@/components/systemdesign/Navbar.vue";
import Footer from "@/components/systemdesign/Footer.vue";
import {
  ArrowLeftIcon,
  ArrowRightIcon,
  PetIcon,
} from "@/components/systemdesign/Icons.vue";

export default {
  components: {
    Navbar,
    SitterSearch,
    SitterCardList,
    Footer,
    ArrowLeftIcon,
    ArrowRightIcon,
    PetIcon,
  },
  data() {
    return {
      searchData: null,
      pets: [],
      paging: {
        currentPage: 1,
        totalPages: 1,
      },
    };
  },
  methods: {
    async searchPets(data) {
      const searchParams = new URLSearchParams();
      if (data !== undefined) {
        if (data.search) searchParams.append("search", data.search);
        if (data.types.length > 0) searchParams.append("petType", data.types);
        if (data.rate) searchParams.append("rate", data.rate);
        if (data.exp && data.exp != 3) searchParams.append("exp", data.exp);
        if (data.paging) searchParams.append("page", data.paging);
      }

      const result = await axios.get(
        "/sitterManagement?" + searchParams.toString()
      );
      this.pets = result.data.data;
      this.paging = result.data.paging;
      this.$refs.topRef.scrollIntoView({ behavior: "smooth" });
    },
    handlePaging(page) {
      if (page >= 1 && page <= this.paging.totalPages) {
        this.searchPets({ ...this.searchData, paging: page });
      }
    },
  },
};
</script>

<style scoped>
/* Your component-specific styles go here */
</style>
 -->
