<template>
  <div class="col-2" >
    <router-link :to="'/recipe/' + recipe.id">
      <b-card
        :title="recipe.name"
        tag="article"
        class="mb-2"
      >
        <b-card-text>{{recipe.description}}</b-card-text>
        <b-card-img-lazy
          :src="recipe.img"
          :alt="recipe.name"
        />
      </b-card>
    </router-link>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  props: ['recipe']
}
</script>

<style scoped>
</style>