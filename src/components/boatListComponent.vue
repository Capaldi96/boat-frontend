<template>
  <div id="boatlist">
    <form class="form-inline md-form mr-auto mb-4 flex-end"  @submit.prevent="submitSearch">
        <input class="form-control mr-md-2" type="text" v-model="search" placeholder="Search" aria-label="Search" />        
        <button class="btn btn-primary btn-rounded btn-md" type="submit">Search</button>
      </form>
    <div class="gallery">
      <div class="card" v-for="boat in boats" :key="boat._id">
        <img
          class="card-img-top"
          v-if="boat.url !== null"
          v-bind:src="boat.url"
          alt="Failed to load image"
        />
        <div class="card-img-top" v-else>No image uploaded</div>
        <div class="card-body">
          <h6 class="card-title">{{boat.modelName}}</h6>
          <p class="card-text">Manufacturing year: {{boat.manufacturingYear}}</p>
          <p class="card-text">Price: {{boat.price}}</p>
          <p v-if="boat.motorboat === true" class="card-text">Boat type: Motorboat</p>
          <p v-else class="card-text">Boat type: Sailboat</p>
          <router-link
            class="btn btn-primary"
            :to="{ name:'detailedBoat', params: {id:boat._id, edit:true}}"
          >See detailed</router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import BoatService from "@/services/BoatService.js";

export default {
  name: "BoatList",
  components: {},
  data() {
    return {
      boats: [],
      search:''
    };
  },
  created() {
    this.getBoats();
  },

  computed: {},
  methods: {
    async getBoats() {
      BoatService.getBoats().then(
        (boats => {
          this.$set(this, "boats", boats);
        }).bind(this)
      );
    },
    async submitSearch(){
      let searchfilter = 'word='+this.search;
      BoatService.search(searchfilter).then(
        (boats => {
          this.$set(this, "boats", boats);
        }).bind(this)
      );
    }
  }
};
</script>

<style scoped>
#boatList {
  border: 1px solid red;
}
.gallery {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(3, 1fr);
  grid-gap: 3em;
}
.card {
}
.card-img-top {
  padding: 1em;
}
.flex-end{
  display:flex;
  justify-content: flex-end;
}
</style>
