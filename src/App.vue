<!-- TEMPLATE -->
<template>
    <nav class="navbar navbar-dark navbar-expand-lg bg-dark">
        <div class="container">
            <a class="navbar-brand" href="#">Prueba Módulo 7 VueJS</a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav ms-auto">
                    <li class="nav-item">
                        <router-link to="/" class="nav-link">Home</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link to="/counter" class="nav-link">Contador</router-link>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
    <router-view />
</template>

<!-- SCRIPT -->
<script>
export default {
    name: 'App',
    // props: {},
    data: function(){
        return{}
    },
    // computed: {},
    // methods: {},
    // watch: {},
    // components: {},
    // mixins: [],
    // filters: {},
    // -- Lifecycle Methods
    // -- End Lifecycle Methods
}
</script>

<!-- STYLE -->
<style lang='scss'>
#app {
    font-family: "Roboto", sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
}

nav {
    padding: 30px;

    a {
        &.router-link-exact-active {
            color: #9ec5ff !important;
            font-weight: bold;
        }
    }
}
</style>
