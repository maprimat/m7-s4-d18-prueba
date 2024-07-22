import { createStore } from 'vuex';
import { shallowMount } from '@vue/test-utils';
import CounterComp from '@/components/CounterComp.vue';

describe('Componente: CounterComp.vue', () => {
    
    const store = createStore({
        state: {
            counter: 0
        },
        mutations: {
            INCREASE(state) {
                state.counter++
            },
            DECREASE(state) {
                state.counter--
            }
        },
        actions: {
            increaseValue({ commit }) {
                commit('INCREASE')
            },
            decreaseValue({ commit }) {
                commit('DECREASE')
            }
        },
    })

    test('Comprobamos que el valor inicial del contador sea 0', async () => {
        const wrapper = shallowMount(CounterComp, {
            global: {
                plugins: [store]
            }
        })
        // Comprobamos que el valor inicial del contador sea 0
        const value = wrapper.find('.counterText').text();
        expect(value).toBe('El valor del contador es: 0');
    })

    test('Comprobamos que el valor del contador aumente en 1', async () => {
        const wrapper = shallowMount(CounterComp, {
            global: {
                plugins: [store]
            }
        })
        // Comprobamos que al hacer click en el botón (+), el valor del contador sea 1
        await wrapper.find('.increaseButton').trigger('click')
        expect(wrapper.find('.counterText').text()).toBe('El valor del contador es: 1');
    })

    test('Comprobamos que el valor del contador disminuya en 1', async () => {
        const wrapper = shallowMount(CounterComp, {
            global: {
                plugins: [store]
            }
        })
        // Comprobamos que al hacer click en el botón (-), el valor del contador sea 0
        expect(wrapper.find('.counterText').text()).toBe('El valor del contador es: 1');
        await wrapper.find('.decreaseButton').trigger('click')
        expect(wrapper.find('.counterText').text()).toBe('El valor del contador es: 0');
    })

})