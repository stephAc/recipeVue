<template>
  <div class="min-vh-100 d-flex justify-content-center align-items-center flex-column">
    <b-form @submit="addIngredient">
      <h2 class="p-5">Ingrédients</h2>
      <b-form-input v-model="ingredient" class="rounded-pill" required placeholder="Ingrédient"></b-form-input>
      <b-form-input
        v-model="quantity"
        type="number"
        class="rounded-pill"
        min="0"
        placeholder="Quantité"
      ></b-form-input>
      <b-form-select v-model="unit" class="rounded-pill">
        <option :value="null">Choisissez une unité de mesure</option>
        <template v-for="unit in units">
          <option :value="unit.acronym" v-bind:key="unit.name">{{unit.name}}</option>
        </template>
      </b-form-select>
      <!-- <b-button to="/recipe/create"></b-button> -->
      <b-button type="submit">Ajouter l'ingrédient</b-button>

      <draggable tag="ul" :list="ingredients">
        <li
          class="ingredients"
          v-for="(ingredient, index) in ingredients"
          v-bind:key="index"
        >{{ingredient.quantity}} {{ingredient.unit}} de {{ingredient.name}}</li>
      </draggable>
    </b-form>
    <DirectionalButton title="Création" :isOnRight="false" to="/recipe/create"/>
    <DirectionalButton title="Étapes" :isOnRight="true" to="/recipe/create/steps"/>
  </div>
</template>

<script>
import * as _ from 'lodash'
import draggable from 'vuedraggable'
import DirectionalButton from '@/components/DirectionalButton'

export default {
    components: {
        draggable,
        DirectionalButton
    },
    data() {
        return {
            ingredients: [],
            ingredient: '',
            quantity: '',
            units: [
                { acronym: 'mg', name: 'Milligrammes' },
                { acronym: 'g', name: 'Grammes' },
                { acronym: 'kg', name: 'Kilogrammes' },
                { acronym: 'ml', name: 'Millilitres' },
                { acronym: 'cl', name: 'Centilitres' },
                { acronym: 'l', name: 'Litres' },
                { acronym: 'c. à café', name: 'Cuillère à café' },
                { acronym: 'c. à soupe', name: 'Cuillère à soupe' },
                { acronym: 'tasse', name: 'Tasse' },
                { acronym: 'verre', name: 'Verre' },
            ],
            unit: null,
        }
    },
    computed: {
        ingredientObject() {
            return {
                name: this.ingredient.toLowerCase(),
                quantity: this.quantity,
                unit: this.unit,
            }
        },
    },
    methods: {
        addIngredient() {
            if (_.find(this.ingredients, this.ingredientObject))
                alert("L'ingrédient a déjà été ajouté")
            else this.ingredients.push(this.ingredientObject)

            this.ingredient = null
            this.quantity = null
            this.unit = null
        },
    },
}
</script>

<style lang="" scoped>
input,
select,
button {
    margin-bottom: 20px;
}

.ingredients {
    border: 1px black solid;
    border-radius: 30px;
    margin: 20px;
}
</style>