import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        recipes: [
            {
                id: 1,
                name: "Parmentier de confit de canard",
                img: "https://image.afcdn.com/recipe/20141009/1649.jpg",
                nb_person: 4,
                origin: "Origine française",
                description:"Simple mais raffiné",
                ingredients: [
                    {
                        name: "cuisses de canard confites",
                        quantity: 4,
                        unit: ""
                    },
                    {
                        name: "oignons",
                        quantity: 2,
                        unit: ""
                    },
                    {
                        name: "échalotes",
                        quantity: 2,
                        unit: ""
                    },
                    {
                        name: "crème fraîche",
                        quantity: 2,
                        unit: "c. à soupe"
                    },
                    {
                        name: "lait",
                        quantity: 0,
                        unit: ""
                    },
                    {
                        name: "eau",
                        quantity: 0,
                        unit: ""
                    },
                    {
                        name: "muscade",
                        quantity: 1,
                        unit: "muscade"
                    },
                    {
                        name: "sel",
                        quantity: 0,
                        unit: ""
                    },
                    {
                        name: "poivre",
                        quantity: 0,
                        unit: ""
                    },
                ],
                steps: [
                    {
                        name: "",
                        description: "Lavez et épluchez les pommes de terre, et mettez-les à cuire dans un grand volume d'eau salée."
                    },
                    {
                        name: "",
                        description: "Réchauffez les cuisses de canard au bain-marie pour les extraire de leur graisse."
                    },
                    {
                        name: "",
                        description: "Conservez une cuillère à soupe de graisse de canard."
                    },
                    {
                        name: "",
                        description: "Découpez et hachez grossièrement les cuisses confites (surtout pas de mixer !)."
                    },
                    {
                        name: "",
                        description: "Emincer les échalotes et les oignons."
                    },
                    {
                        name: "",
                        description: "Dans une large poêle ou une sauteuse, faites blondir les oignons et les échalotes hachés dans la cuillère à soupe de graisse de canard, à feu très doux."
                    },
                    {
                        name: "",
                        description: "Lorsque ce mélange oignons + échalotes est bien blond, ajoutez le hachis de canard et mettez à feu vif, en mélangeant vivement, pendant 5 minutes. Le hachis de canard doit être finement grillé en surface, mais rester moelleux. Réservez hors du feu."
                    },
                    {
                        name: "",
                        description: "Ecrasez vos pommes de terre à la fourchette (pitié, pas de presse-purée !) et faites une purée moelleuse en ajoutant 50 % d'eau et 50 % de lait."
                    },
                    {
                        name: "",
                        description: "Salez, poivrez, ajoutez une pincée de muscade et la crème fraîche."
                    },
                    {
                        name: "",
                        description: "Préchauffez le four à 200°C (thermostat 6-7)."
                    },
                    {
                        name: "",
                        description: "Dans un plat suffisamment haut, étalez la moitié de votre hachis de canard."
                    },
                    {
                        name: "",
                        description: "Mélangez la moitié qui reste avec le même volume de purée, et étalez cette deuxième couche sur la première. Finissez par une troisième couche de purée."
                    },
                    {
                        name: "",
                        description: "Striez le sommet de votre purée avec le dos d'une fourchette."
                    },
                    {
                        name: "",
                        description: "Laissez cuire à four chaud (200°C) pendant 25 min. Vous pouvez également finir la cuisson 3 minutes sous le gril pour obtenir un joli gratiné."
                    },
                ]
            },
            {
                id: 2,
                name: "Tarte aux abricots à la brousse",
                img: "https://assets.afcdn.com/recipe/20120511/3787_w420h344c1cx1140cy1750.jpg",
                nb_person: 4,
                origin: "Origine française",
                description:"",
                ingredients: [
                    {
                        name: "abricots",
                        quantity: 15,
                        unit: ""
                    },
                    {
                        name: "brousse",
                        quantity: 250,
                        unit: "g"
                    },
                    {
                        name: "pâte feuilletée",
                        quantity: 1,
                        unit: ""
                    },
                    {
                        name: "palets bretons",
                        quantity: 2,
                        unit: ""
                    },
                    {
                        name: "sucre",
                        quantity: 2,
                        unit: "c. à soupe"
                    },
                    {
                        name: "fleur d'oranger",
                        quantity: 1,
                        unit: "c. à soupe"
                    },
                ],
                steps: [
                    {
                        name: "",
                        description: "Préchauffer le four à 180°C (thermostat 6)."
                    },
                    {
                        name: "",
                        description: "Étaler la pâte dans le moule et enfourner pendant 3 à 4 min pendant que le four préchauffe."
                    },
                    {
                        name: "",
                        description: "Mélanger dans un bol la brousse, l'eau de fleur d'oranger, le sucre et les palets breton émiettés."
                    },
                    {
                        name: "",
                        description: "Répartir le mélange sur la pâte."
                    },
                    {
                        name: "",
                        description: "Couper les abricots en 2 et les disposer dessus."
                    },
                    {
                        name: "",
                        description: "Faire cuire la tarte pendant 30 min en surveillant en fin de cuisson."
                    },
                    {
                        name: "",
                        description: "Laisser tiédir ou refroidir et déguster."
                    },
                ]
            },
            {
                id: 3,
                name: "Croque monsieur d'aubergines",
                img: "https://assets.afcdn.com/recipe/20160404/5041_w350h250c1cx1500cy1000.jpg",
                nb_person: 2,
                origin: "Origine française",
                description:"Un plat avec des légumes d'été",
                ingredients: [
                    {
                        name: "aubergine",
                        quantity: 1,
                        unit: ""
                    },
                    {
                        name: "tomate",
                        quantity: 2,
                        unit: ""
                    },
                    {
                        name: "moutarde",
                        quantity: 1,
                        unit: "c. à café"
                    },
                    {
                        name: "crème liquide",
                        quantity: 10,
                        unit: "cl"
                    },
                    {
                        name: "gruyère",
                        quantity: 50,
                        unit: "g"
                    },
                    {
                        name: "Herbes de Provence",
                        quantity: 0,
                        unit: ""
                    },
                ],
                steps: [
                    {
                        name: "",
                        description: "Couper les aubergines en tranches de 1 cm d'épaisseur, dans le sens de la longueur."
                    },
                    {
                        name: "",
                        description: "Mélanger la moutarde avec la crème dans un bol. Etalez cette prépération sur une face des aubergines."
                    },
                    {
                        name: "",
                        description: "Faites des lamelles de fromage que vous placez sur les aubergines pour recouvrir toute la surface."
                    },
                    {
                        name: "",
                        description: "Coupez les tomates en tranches de 5 mm d'épaisseur."
                    },
                    {
                        name: "",
                        description: "Mettre 1 ou 2 tranches de tomate sur les aubergines."
                    },
                    {
                        name: "",
                        description: "Saupoudrez d'herbes de Provence."
                    },
                    {
                        name: "",
                        description: "Passez au four à 180°C (Th 6) pendant 30 mn (à voir en fait selon la cuisson désirée)."
                    },
                ]
            },
        ],
        newRecipe: {}
    },
    getters: {
        recipeById: (state) => (id) => {
            return state.recipes.filter(recipe => recipe.id === Number(id))
        }
    },
    mutations: {
        ADD_RECIPE(state, recipe) {
            state.recipeList.push(recipe);
        },
        UPDATE_STEP_LIST(state, stepList) {
            state.newRecipe.steps = stepList
        },
        ADD_NEW_RECIPE(state) {
            state.recipeList.push(state.newRecipe)
            state.newRecipe = {}
        },
        UPDATE_RECIPE_INFO(state, recipeInfo) {
            state.newRecipe.name = recipeInfo.name
            state.newRecipe.img = recipeInfo.img
            state.newRecipe.nb_person = recipeInfo.nb_person
            state.newRecipe.origin = recipeInfo.origin
            state.newRecipe.description = recipeInfo.description
        }
    },
    actions: {
        addRecipe({
            commit
        }, recipe) {
            commit('ADD_RECIPE', recipe);
        },
        updateNewRecipeStepList({
            commit
        }, stepList) {
            commit('UPDATE_STEP_LIST', stepList)
        },
        addNewRecipeToRecipeList({
            commit
        }) {
            commit('ADD_NEW_RECIPE')
        },
        updateNewRecipeBasicInfo({
            commit
        }, recipeInfo) {
            commit('UPDATE_RECIPE_INFO', recipeInfo)
        }
    }
});