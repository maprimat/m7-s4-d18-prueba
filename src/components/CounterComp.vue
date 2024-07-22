<!-- TEMPLATE -->
<template>
    <header>
        <h1 class="text-center fw-medium my-3">Componente Contador</h1>
    </header>
    <main class="counter container">
        <!-- Contador interpolado -->
        <p class="counterText">El valor del contador es: {{ counter }}</p>
        <div class="d-flex justify-content-center">
            <!-- Se llaman funciones/métodos a través de eventos click -->
            <button class="btn btn-primary decreaseButton m-3 p-3" @click="decreaseValue">
                <i class="fa-solid fa-circle-minus"></i>
            </button>
            <button class="btn btn-primary increaseButton m-3 p-3" @click="increaseValue">
                <i class="fa-solid fa-circle-plus"></i>
            </button>
        </div>
    </main>
</template>

<!-- SCRIPT -->
<script>
// Se utiliza Vuex (state y estados globales)
import { mapState, mapActions } from "vuex";

export default {
    // Nombre de componente
    name: "CounterComp",
    data() {
        return {

        }
    },
    // Se importa Vuex en computed (mapState) y methods (mapActions)
    computed: {
        ...mapState(["counter"]),
    },
    methods: {
        ...mapActions(["increaseValue", "decreaseValue"]),
    },
};
</script>

<!-- STYLE -->
<style scoped lang='scss'></style>