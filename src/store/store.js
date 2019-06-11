import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        recipes: [
            {
                id: 1,
                name: 'Parmentier de confit de canard',
                img: 'https://image.afcdn.com/recipe/20141009/1649.jpg',
                nb_person: 4,
                origin: 'Origine française',
                description: 'Trop bon',
                ingredients: [
                    {
                        name: 'cuisses de canard confites',
                        quantity: 4,
                        unit: '',
                    },
                    {
                        name: 'oignons',
                        quantity: 2,
                        unit: '',
                    },
                    {
                        name: 'échalotes',
                        quantity: 2,
                        unit: '',
                    },
                    {
                        name: 'crème fraîche',
                        quantity: 2,
                        unit: 'c. à soupe',
                    },
                    {
                        name: 'lait',
                        quantity: 0,
                        unit: '',
                    },
                    {
                        name: 'eau',
                        quantity: 0,
                        unit: '',
                    },
                    {
                        name: 'muscade',
                        quantity: 1,
                        unit: 'muscade',
                    },
                    {
                        name: 'sel',
                        quantity: 0,
                        unit: '',
                    },
                    {
                        name: 'poivre',
                        quantity: 0,
                        unit: '',
                    },
                ],
                steps: [
                    {
                        name: '',
                        description:
                            "Lavez et épluchez les pommes de terre, et mettez-les à cuire dans un grand volume d'eau salée.",
                    },
                    {
                        name: '',
                        description:
                            'Réchauffez les cuisses de canard au bain-marie pour les extraire de leur graisse.',
                    },
                    {
                        name: '',
                        description:
                            'Conservez une cuillère à soupe de graisse de canard.',
                    },
                    {
                        name: '',
                        description:
                            'Découpez et hachez grossièrement les cuisses confites (surtout pas de mixer !).',
                    },
                    {
                        name: '',
                        description: 'Emincer les échalotes et les oignons.',
                    },
                    {
                        name: '',
                        description:
                            'Dans une large poêle ou une sauteuse, faites blondir les oignons et les échalotes hachés dans la cuillère à soupe de graisse de canard, à feu très doux.',
                    },
                    {
                        name: '',
                        description:
                            'Lorsque ce mélange oignons + échalotes est bien blond, ajoutez le hachis de canard et mettez à feu vif, en mélangeant vivement, pendant 5 minutes. Le hachis de canard doit être finement grillé en surface, mais rester moelleux. Réservez hors du feu.',
                    },
                    {
                        name: '',
                        description:
                            "Ecrasez vos pommes de terre à la fourchette (pitié, pas de presse-purée !) et faites une purée moelleuse en ajoutant 50 % d'eau et 50 % de lait.",
                    },
                    {
                        name: '',
                        description:
                            'Salez, poivrez, ajoutez une pincée de muscade et la crème fraîche.',
                    },
                    {
                        name: '',
                        description:
                            'Préchauffez le four à 200°C (thermostat 6-7).',
                    },
                    {
                        name: '',
                        description:
                            'Dans un plat suffisamment haut, étalez la moitié de votre hachis de canard.',
                    },
                    {
                        name: '',
                        description:
                            'Mélangez la moitié qui reste avec le même volume de purée, et étalez cette deuxième couche sur la première. Finissez par une troisième couche de purée.',
                    },
                    {
                        name: '',
                        description:
                            "Striez le sommet de votre purée avec le dos d'une fourchette.",
                    },
                    {
                        name: '',
                        description:
                            'Laissez cuire à four chaud (200°C) pendant 25 min. Vous pouvez également finir la cuisson 3 minutes sous le gril pour obtenir un joli gratiné.',
                    },
                ],
            },
            {
                id: 2,
                name: 'Parmentier de confit de canard',
                img: 'https://image.afcdn.com/recipe/20141009/1649.jpg',
                nb_person: 4,
                origin: 'Origine française',
                description: '',
                ingredients: [
                    {
                        name: 'cuisses de canard confites',
                        quantity: 4,
                        unit: '',
                    },
                    {
                        name: 'oignons',
                        quantity: 2,
                        unit: '',
                    },
                    {
                        name: 'échalotes',
                        quantity: 2,
                        unit: '',
                    },
                    {
                        name: 'crème fraîche',
                        quantity: 2,
                        unit: 'c. à soupe',
                    },
                    {
                        name: 'lait',
                        quantity: 0,
                        unit: '',
                    },
                    {
                        name: 'eau',
                        quantity: 0,
                        unit: '',
                    },
                    {
                        name: 'muscade',
                        quantity: 1,
                        unit: 'muscade',
                    },
                    {
                        name: 'sel',
                        quantity: 0,
                        unit: '',
                    },
                    {
                        name: 'poivre',
                        quantity: 0,
                        unit: '',
                    },
                ],
                steps: [
                    {
                        name: '',
                        description:
                            "Lavez et épluchez les pommes de terre, et mettez-les à cuire dans un grand volume d'eau salée.",
                    },
                    {
                        name: '',
                        description:
                            'Réchauffez les cuisses de canard au bain-marie pour les extraire de leur graisse.',
                    },
                    {
                        name: '',
                        description:
                            'Conservez une cuillère à soupe de graisse de canard.',
                    },
                    {
                        name: '',
                        description:
                            'Découpez et hachez grossièrement les cuisses confites (surtout pas de mixer !).',
                    },
                    {
                        name: '',
                        description: 'Emincer les échalotes et les oignons.',
                    },
                    {
                        name: '',
                        description:
                            'Dans une large poêle ou une sauteuse, faites blondir les oignons et les échalotes hachés dans la cuillère à soupe de graisse de canard, à feu très doux.',
                    },
                    {
                        name: '',
                        description:
                            'Lorsque ce mélange oignons + échalotes est bien blond, ajoutez le hachis de canard et mettez à feu vif, en mélangeant vivement, pendant 5 minutes. Le hachis de canard doit être finement grillé en surface, mais rester moelleux. Réservez hors du feu.',
                    },
                    {
                        name: '',
                        description:
                            "Ecrasez vos pommes de terre à la fourchette (pitié, pas de presse-purée !) et faites une purée moelleuse en ajoutant 50 % d'eau et 50 % de lait.",
                    },
                    {
                        name: '',
                        description:
                            'Salez, poivrez, ajoutez une pincée de muscade et la crème fraîche.',
                    },
                    {
                        name: '',
                        description:
                            'Préchauffez le four à 200°C (thermostat 6-7).',
                    },
                    {
                        name: '',
                        description:
                            'Dans un plat suffisamment haut, étalez la moitié de votre hachis de canard.',
                    },
                    {
                        name: '',
                        description:
                            'Mélangez la moitié qui reste avec le même volume de purée, et étalez cette deuxième couche sur la première. Finissez par une troisième couche de purée.',
                    },
                    {
                        name: '',
                        description:
                            "Striez le sommet de votre purée avec le dos d'une fourchette.",
                    },
                    {
                        name: '',
                        description:
                            'Laissez cuire à four chaud (200°C) pendant 25 min. Vous pouvez également finir la cuisson 3 minutes sous le gril pour obtenir un joli gratiné.',
                    },
                ],
            },
        ],
        newRecipe: {},
    },
    getters: {
        recipeById: state => id => {
            return state.recipes.filter(recipe => recipe.id === Number(id))
        },
    },

    mutations: {
        ADD_RECIPE(state, recipe) {
            state.recipeList.push(recipe)
        },
    },
    actions: {
        addRecipe({ commit }, recipe) {
            commit('ADD_RECIPE', recipe)
        },
    },
})
