<!-- TEMPLATE -->
<template>
    <div class='parent container'>
        <Child @message-sent='updateMessage' />
        <h1 class='text-center fw-medium my-3'>Componente Padre</h1>
        <main>
            <label for='' class='form-label'><span class="fw-light text-success">Texto recibido |</span> {{ message }}</label>
            <p></p>
        </main>
    </div>
</template>

<!-- SCRIPT -->
<script>
import Child from '@/components/ChildComp.vue'

export default {
    name: 'ParentComp',
    data: function () {
        return {
            message: ''
        }
    },
    props: {
    },
    methods: {
        updateMessage(message) {
            this.message = message;
        }
    },
    components: {
        Child
    },
}
</script>

<!-- STYLE -->
<style scoped lang='scss'></style>