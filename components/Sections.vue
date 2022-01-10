<template>
    <section class="sections" id="sections">
        <div class="sections-block" v-for="btnInfo in arrButtons" :key="btnInfo.id">
            <Button :btnInfo='btnInfo' />
        </div>
    </section>
</template>

<script lang="ts">
import ButtonsModel from "~/models/ButtonsModel";
import Button from "./UI/Button.vue";

export default defineComponent({
  components: { Button },
    setup() {
        const arrButtons = ref<ButtonsModel[]>([{
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
        ]);
        const title = useTitle();
        title.value = 'Главная';

        return {arrButtons}
    }
})
</script>


<style lang="scss" scoped>
    .sections {
        display: flex;
        justify-content: space-around;
        align-items: center;
        flex-wrap: wrap;
    }
</style>
