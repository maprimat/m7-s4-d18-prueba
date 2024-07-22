<!-- TEMPLATE -->
<template>
    <div class='child container'>
        <h1 class='text-center fw-medium py-3'>Componente Hijo</h1>
        <main class="row justify-content-center gap-3">
            <form class="col-3" @submit.prevent="sendMessage">
                <input class="form-control" v-model="message" type="text" placeholder="Escribe el texto a enviar..."
                    required>
                <button class="btn btn-primary my-3" type="submit">Enviar mensaje</button>
            </form>
        </main>
    </div>
</template>

<!-- SCRIPT -->
<script>
export default {
    name: 'ChildComp',
    props: {
    },
    data: function () {
        return {
            message: ''
        }
    },
    methods: {
        sendMessage() {
            this.$emit('message-sent', this.message);

            this.message = '';
        },
    }
}
</script>

<!-- STYLE -->
<style scoped lang='scss'></style>