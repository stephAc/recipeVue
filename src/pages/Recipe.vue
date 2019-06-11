<template>
  <div class="recipeGrid">
    <div class="leftGrid">
      <h2>{{recipe.name}}</h2>
      <p>Pour {{recipe.nb_person}} personnes</p>
      <b-img :src="recipe.img" fluid :alt="recipe.name"/>
      <p>{{recipe.origin}}</p>
      <h2>Ingrédients</h2>
      <div v-for="(ingredient, index) in recipe.ingredients" :key="index">
        <p
          v-if="ingredient.quantity !== 0"
        >{{ingredient.quantity}} {{ingredient.unit}} de {{ingredient.name}}</p>
        <p v-else>{{ingredient.name}}</p>
      </div>
    </div>
    <div>
      <h2>Préparation</h2>
      <div v-for="(step, index) in recipe.steps" :key="index">
        <h4>Etape {{index}}</h4>
        <h4>{{step.name}}</h4>
        <p>{{step.description}}</p>
        <hr style="width: 70%;">
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
    data() {
        return {
            recipe: this.$store.getters.recipeById(this.$route.params.id)[0],
        }
    },
}
</script>

<style lang="">
.recipeGrid {
    display: grid;
    width: 80%;
    margin-left: 100px;
    grid-template-columns: 2fr 9fr;
    grid-gap: 100px;
}
.leftGrid {
    max-width: 300px;
}

@media screen and (max-width: 845px) {
    .recipeGrid {
        margin-left: 50px;
    }
}
@media screen and (max-width: 645px) {
    .recipeGrid {
        grid-template-columns: 1fr;
        margin-left: auto;
        margin-right: auto;
        grid-gap: 0px;
    }
    .leftGrid {
        max-width: 100%;
    }
}
</style>
