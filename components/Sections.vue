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
            scrLink: '/pets',
            title: 'Pet проекты',
            description: 'pet и доступные и к просмотру примеры работ'
        },
        {
            id: 1,
            imgSrc: '../static/ic-test.png',
            scrLink: '/js-tasks',
            title: 'JS Tasks',
            description: 'Задачки для тренировки javascript/typescript'
        },
                {
            id: 2,
            imgSrc: '../static/ic-test.png',
            scrLink: '/front-end',
            title: 'Front-end tips',
            description: 'Шпаргалки по HTML, CSS, Vue, React'
        },
                {
            id: 3,
            imgSrc: '../static/ic-test.png',
            scrLink: '/exciting',
            title: 'Exiting',
            description: 'Что-то новое (или не очень) и интересное в WebDev'
        }
    ];
let title = useTitle();
title.value = 'Главная';
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
        width: max-content;
        height: max-content;
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
            padding: 1em;
        }
    }
</style>
