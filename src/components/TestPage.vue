<template>
  <div>
    <DogType />
    <CatType />
    <BirdType />
    <RabbitType />
  </div>
</template>
<script>
import DogType from "./system_design/DogType.vue";
import CatType from "./system_design/CatType.vue";
import BirdType from "./system_design/BirdType.vue";
import RabbitType from "./system_design/RabbitType.vue";
export default {
  name: "TestPage",
  components: {
    DogType,
    CatType,
    BirdType,
    RabbitType,
  },
};
</script>
