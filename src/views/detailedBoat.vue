<template>
  <div id="detailed">
    <detailedBoat></detailedBoat>
  </div>
</template>

<script>
import detailedBoat from "../components/detailedBoatComponent.vue";
export default {
  name: "Boat",
  components: { detailedBoat }
};
</script>
<style scoped>
#boats {
  margin: 0 auto;
  width: 80%;
}
</style>
