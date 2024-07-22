<!-- TEMPLATE -->
<template>
    <div class='counter'>
        <CounterComp />
    </div>
</template>

<!-- SCRIPT -->
<script>
// Importamos el componente Counter
import CounterComp from '@/components/CounterComp.vue'

export default {
    name: 'CounterView',
    components: {
        // Llamamos al componente Counter
        CounterComp
    }
}
</script>

<!-- STYLE -->
<style scoped lang='scss'></style>