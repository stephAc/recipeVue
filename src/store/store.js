import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        recipeList: [],
        newRecipe: {}
    },
    mutations: {
        ADD_RECIPE(state, recipe) {
            state.recipeList.push(recipe);
        }
    },
    actions: {
        addRecipe({
            commit
        }, recipe) {
            commit('ADD_RECIPE', recipe);
        }
    }
});
