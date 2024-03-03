<script>
import NavBar from "../system_design/NavBar.vue";
import Header from "./Header.vue";
import ShowCaseVue from "./ShowCase.vue";
import Banner from "./Banner.vue";
import Footer from "../system_design/Footer.vue";
import FilterBar from "./FilterBar.vue";

export default {
  name: "HomePage",
  components: {
    NavBar,
    Header,
    ShowCaseVue,
    Banner,
    Footer,
    FilterBar,
  },
};
</script>

<template>
  <div>
    <NavBar />
    <Header />
    <FilterBar />
    <ShowCaseVue />
    <Banner />
    <Footer />
  </div>
</template>
