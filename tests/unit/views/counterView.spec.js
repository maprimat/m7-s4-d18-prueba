import { mount } from '@vue/test-utils'
import { createRouter, createWebHistory } from 'vue-router'
import { createStore } from 'vuex'
import CounterView from '@/views/CounterView.vue'
import CounterComp from '@/components/CounterComp.vue'

describe('CounterView.vue', () => {

    const store = createStore();

    test('Comprobamos que existe el componente CounterView', async () => {

        const router = createRouter({
            history: createWebHistory(),
            routes: [{
                path: '/counter',
                name: 'CounterView',
                component: CounterComp
            }],
        })

        router.push('/counter')
        await router.isReady()
        const wrapper = mount(CounterComp, {
            global: {
                plugins: [router, store]
            }
        })

        expect(wrapper.findComponent(CounterComp).exists()).toBe(true)
        
    })

})