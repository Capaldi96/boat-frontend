<template>
    <div class="container">
        <h1>Welcome captain</h1>
        <h4>Check out our boat collection above!</h4>
        <button class="myButton" @click="resetDatabase">Restart database</button>
    </div>
</template>

<script>
import BoatService from "@/services/BoatService.js";

export default {
    methods:{
        resetDatabase(){
            BoatService.resetDatabase();
        }
    }

}
</script>

<style scoped>
    .container{
        width:100%;
        display: grid;
        place-items: center;
    }
    .myButton{
        margin-top:3em;
    }
    h1,h4{
        color:#ffffff;
        text-shadow: 2px 2px black;
    }
</style>