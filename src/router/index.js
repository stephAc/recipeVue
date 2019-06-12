import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Creation from '@/pages/Creation'
import Login from '@/pages/Login'
import Profile from '@/pages/Profile'
import Ingredients from '@/pages/Ingredients'
import Recipe from '@/pages/Recipe'
import Steps from '@/pages/Steps'

Vue.use(Router)

export default new Router({
    mode: 'history',
    routes: [{
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
            path: '/recipe/create/ingredients',
            name: 'Ingredients',
            component: Ingredients
        },
        {
            path: '/recipe/create/steps',
            name: 'Steps',
            component: Steps
        },
        {
            path: '/recipe/:id',
            component: Recipe
        },
        {
            path: '*',
            redirect: '/',
        },
    ]
})
