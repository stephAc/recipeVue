import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Creation from '@/pages/Creation'
import Login from '@/pages/Login'
import Profile from '@/pages/Profile'
import Recipe from '@/pages/Recipe'
import Ingredients from '@/pages/Ingredients'
import Recipe from '@/pages/Recipe'

Vue.use(Router)

export default new Router({
    mode: 'history',
    routes: [
        {
            path: '/',
            name: 'HelloWorld',
            component: HelloWorld,
        },
        {
            path: '/recipe/create',
            name: 'Creation',
            component: Creation,
        },
        {
            path: '/login',
            name: 'Login',
            component: Login,
        },
        {
            path: '/profile',
            name: 'Profile',
            component: Profile,
        },
        {
            path: '*',
<<<<<<< refs/remotes/origin/master
            redirect: '/',
        },
        {
            path: '/recipe/:id',
            component: Recipe,
=======
            redirect: '/'
>>>>>>> Ajout des ingrédients
        },
        {
            path: '/recipe/create/ingredients',
            name: 'Ingredients',
            component: Ingredients
        },
        {
            path: '/recipe/:id',
            component: Recipe
        }
    ]
})
