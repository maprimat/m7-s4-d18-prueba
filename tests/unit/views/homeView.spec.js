import { mount } from '@vue/test-utils'
import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'

describe('HomeView', () => {

    test('Comprobamos que existe la vista HomeView', async () => {

        const router = createRouter({
            history: createWebHistory(),
            routes: [{
                path: '/home',
                name: 'HomeView',
                component: HomeView
            }],
        })

        router.push('/home')
        await router.isReady()
        const wrapper = mount(HomeView, {
            global: {
                plugins: [router]
            }
        })

        expect(wrapper.findComponent(HomeView).exists()).toBe(true)

    })
    
})