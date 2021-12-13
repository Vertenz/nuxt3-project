<template>
    <section class="sections" id="sections">
        <div class="sections-block" v-for="section in arrSections" :key="section.id">
            <NuxtLink :to="section.scrLink" class="sections-block__link">
                <div class="sections-block__icon">
                    <img :src="section.imgSrc" :alt="section.description">
                </div>
                <div class="sections-block__text">
                    <h2>{{ section.title }}</h2>
                    <i>{{ section.description }}</i>
                </div>
            </NuxtLink>
        </div>
    </section>
</template>

<script setup>
const arrSections = [
        {
            id: 0,
            imgSrc: '../static/ic-test.png',
            scrLink: '/',
            title: 'Test',
            description: 'lorem lorem'
        },
        {
            id: 1,
            imgSrc: '../static/ic-test.png',
            scrLink: '/test',
            title: 'Lorem',
            description: 'lorem, lorem'
        },
                {
            id: 2,
            imgSrc: '../static/ic-test.png',
            scrLink: '/test',
            title: 'Lorem',
            description: 'lorem, lorem'
        },
                {
            id: 3,
            imgSrc: '../static/ic-test.png',
            scrLink: '/about',
            title: 'About',
            description: 'lorem, lorem'
        }
    ];
let title = useTitle();
title.value = 'Главная'
</script>


<style lang="scss" scoped>
    .sections {
        display: flex;
        justify-content: space-around;
        align-items: center;
        flex-wrap: wrap;
    }
    .sections-block {
        display: flex;
        align-items: center;
        width: 180px;
        height: 180px;
        justify-content: space-between;
        background-color: var(--block-bg);
        margin-bottom: 1em;
        box-shadow: 2px 6px 10px black;
        cursor: pointer;
        &:hover {
            box-shadow: 0 0 0 black;
        }
        &__link {
            display: flex;
            justify-content: space-around;
            align-items: center;
        }
        &__icon {
            padding: 0.5em;
        }
        &__text {
            padding: 0.5em;
        }
    }
</style>