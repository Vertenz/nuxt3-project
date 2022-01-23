<template>
    <div class="news-block">
        <header class="news-header">
            <h4 class="news-header__h">{{ props?.news?.title }}</h4>
            <p class="news-header__type">{{ props?.news?.type }}</p>
        </header>
        <div class="text-block">
            <p class="text-block__description">{{ props?.news?.description }}</p>
        </div>
        <footer class="news-footer">
            <a :href="props?.news?.link" class="news-footer__li">Ссылка на материал</a>
        </footer>
    </div>
</template>

<script lang="ts">
    import { PropType } from 'vue'
    import NewsModel from '~~/models/NewsModel'

    export default defineComponent({
        name: 'BasNewsBlock',
        props: {
            news: Object as PropType<NewsModel>
        },
        setup(props) {
            return{props}
        }
    })
</script>

<style lang="scss" scope>

</style>