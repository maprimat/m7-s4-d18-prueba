import { createStore } from 'vuex'

export default createStore({
    state() {
        // State inicial del contador
        return { counter: 0 }
    },
    getters: {
    },
    // Funciones síncronas que modifican el state en Vuex
    mutations: {
        // Incrementar
        INCREASE(state) {
            state.counter++
        },
        // Disminuir
        DECREASE(state) {
            state.counter--
        }
    },
    // Funciones que contienen lógica asíncrona y se usan para llamar a las mutations
    actions: {
        // Incrementar
        increaseValue({ commit }) {
            commit('INCREASE')
        },
        // Disminuir
        decreaseValue({ commit }) {
            commit('DECREASE')
        }
    },
    modules: {
    }
})