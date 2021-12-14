<template>
    <section class="carsher">
        <Menu />
        <p class="carsher__description">{{ description }}</p>
        <h2>Выберите этап:</h2>
        <div class="btn-block">
            <div class="btn-block__wrap">
                <div class="spin"></div>
                <NuxtLink class="btn-block__btn" to="/carsher/email">Получили по почте</NuxtLink>
            </div>
            <div class="btn-block__wrap">
                <div class="spin"></div>
                <NuxtLink class="btn-block__btn" to="/carsher/email">Привезли в офис</NuxtLink>
            </div>
            <div class="btn-block__wrap">
                <div class="spin"></div>
                <NuxtLink class="btn-block__btn" to="/carsher/email">Осмотр в офисе</NuxtLink>
            </div>
        </div>
    </section>
</template>

<script setup>
let title = useTitle();
title.value = 'Lorem carsher';
const description = `Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                     Quasi vel doloremque dolor eaque ratione ad provident sapiente eveniet nihil placeat.`;


</script>

<style lang="scss" scoped>
.carsher {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: var(--padding) calc(var(--padding) + 3vw);
    &__description {
        margin-bottom: 1rem;
    }
}
</style>