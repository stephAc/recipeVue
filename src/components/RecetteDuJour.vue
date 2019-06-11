<template>
  <router-link
    class="recetteImage"
    :style="{ 'background-image': 'url(' + recipes[0].img + ')' }"
    :to="'/recipe/' + recipes[0].id"
  >
    <div class="recetteDivText">
      <p>Recette du jour</p>
      <p>{{recipes[0].name}}</p>
    </div>
  </router-link>
</template>

<script>
import { mapState } from 'vuex'
export default {
    name: 'RecetteDuJour',
    data: function() {
        return {}
    },
    computed: {
        ...mapState(['recipes']),
    },
    // mounted: function() {
    //     console.log(this.recipes[0].img)
    // },
}
</script>
<style>
.recetteImage {
    width: 100%;
    height: 50vh;
    background-repeat: no-repeat;
    background-position: center center;
    background-size: cover;
    display: flex;
    cursor: pointer;
    text-decoration: none !important;
}
.recetteDivText {
    width: 600px;
    padding: 5px 0px 0px 50px;
    background-color: rgba(255, 255, 255, 0.5);
    margin-top: auto;
}
.recetteDivText p:first-child {
    text-decoration: underline;
}

.recetteDivText p {
    font-weight: bold;
    color: white;
    text-shadow: 2px 2px 2px black;
    font-size: 30px;
}

@media screen and (max-width: 620px) {
    .recetteDivText {
        width: 400px;
        padding: 5px 0px 0px 20px;
    }
    .recetteDivText p {
        font-size: 20px;
    }
}
@media screen and (max-width: 420px) {
    .recetteDivText {
        width: 250px;
        padding: 5px 0px 0px 20px;
    }
    .recetteDivText p {
        font-size: 15px;
    }
}
</style>