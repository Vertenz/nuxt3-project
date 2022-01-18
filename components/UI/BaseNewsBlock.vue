<template>
    <div class="news-block">
        <header class="news-header">
            <h4 class="news-header__h"></h4>
            <p class="news-header__type"></p>
        </header>
        <div class="text-block">
            <p class="text-block__description"></p>
        </div>
        <footer class="news-footer">
            <a href="" class="news-footer__li"></a>
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