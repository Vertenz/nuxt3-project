<template>
    <div class="main">
        <h1>{{ test }} main {{ title }}</h1>
    </div>
</template>

<script>
export default defineComponent({
    setup() {
        const test = 'test';
        const title = useTitle();
        title.value = 'Главная';
        
        return {
            test,
            title
        }
    }
})
</script>

<style lang="scss" scoped>
.main {
    padding: 0 var(--padding);
}
</style>