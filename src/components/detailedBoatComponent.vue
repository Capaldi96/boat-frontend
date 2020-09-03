<template>
  <div id="detailedBoat">
    <div class="card">
      <img
        class="card-img-top"
        v-if="boat.url !== null"
        v-bind:src="boat.url"
        alt="Failed to load image"
      />
      <div class="card-img-top" v-else>No image uploaded</div>
      <div class="card-body">
        <h5 v-if="!isEditing" class="card-title">{{boat.modelName}}</h5>
        <input v-else class="card-title" :bind="boat.modelName" />
        <p class="card-text">Manufacturing year: {{boat.manufacturingYear}}</p>
        <p class="card-text">Price: {{boat.price}}</p>
        <p v-if="boat.motor === true" class="card-text">Has motor</p>
        <p v-else class="card-text">No motor</p>
        <p v-if="boat.sailboat === true" class="card-text">Boat type: Sailboat</p>
        <p v-else class="card-text">Boat type: Motorboat</p>
        <ul class="list-inline m-0">
          <li class="list-inline-item">
            <router-link class="btn btn-primary" :to="{ name: 'Add', params:{boat:boat}}">Edit</router-link>
          </li>
          <li class="list-inline-item">
            <button class="btn btn-danger" @click="deleteBoat()">Delete</button>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import BoatService from "@/services/BoatService.js";

export default {
  name: "detailedBoat",

  data() {
    return {
      boat: {},
      isEditing: false,
      id: this.$route.params.id
    };
  },
  created() {
    this.getBoat();
  },
  computed: {},
  methods: {
    async getBoat() {
      BoatService.getDetailedBoat(this.id).then(
        (boat => {
              
          this.$set(this, "boat", boat);
          console.log(this.boat)
        }).bind(this)
      );
    },
    deleteBoat() {
      BoatService.deleteBoat(this.id);
    }
  }
};
</script>
<style scoped>
#detailedBoat {
  margin: 0 auto;
  width: 20em;
}
.card-img-top {
  padding: 1em;
}
</style>
