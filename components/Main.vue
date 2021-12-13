<template>
    <div class="main">
        <h1>{{ test }} main {{ title }}</h1>
    </div>
</template>

<script setup>
const test = 'test';
let title = useTitle();
title.value = 'Главная';
</script>

<style lang="scss" scoped>
.main {
    padding: 0 var(--padding);
}
</style>