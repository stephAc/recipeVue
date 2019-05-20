import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Creation from '@/pages/Creation'
import Login from '@/pages/Login'

Vue.use(Router)

export default new Router({
    routes: [{
            path: '/',
            name: 'HelloWorld',
            component: HelloWorld
        },
        {
            path: '/recipe/create',
            name: 'Creation',
            component: Creation
        },
        {
            path: '/user/login',
            name: 'Login',
            component: Login
        }
    ]
})
