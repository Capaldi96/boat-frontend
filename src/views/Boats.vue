<template>
  <div id="boats">
    <boatList></boatList>
  </div>
</template>

<script>
import boatList from "../components/boatListComponent.vue";
export default {
  name: "Boats",
  components: { boatList },
  data(){
    return {
    }
    
  },
  methods:{
    
  }
};
</script>
<style scoped>
#boats {
  margin: 0 auto;
  width: 80%;
}
</style>
