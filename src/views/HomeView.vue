<!-- TEMPLATE -->
<template>
    <div class='home'>
        <Parent :message='message' />
    </div>
</template>

<!-- SCRIPT -->
<script>
import Parent from '@/components/ParentComp.vue'
export default {
    name: 'HomeView',
    components: {
        Parent,
    },
    data() {
        return {
            message: ''
        }
    },
    methods: {
        updateMessage(message) {
            this.message = message;
        }
    }
}
</script>

<!-- STYLE -->
<style scoped lang='scss'></style>
