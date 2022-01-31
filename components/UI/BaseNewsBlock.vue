<template>
    <div class="news-block">
            <a :href="props?.news?.link" target="_blank" rel="noopener noreferrer">
                <header class="news-header">
                    <h4 class="news-header__h">{{ props?.news?.title }}</h4>
                    <p class="news-header__type">{{ props?.news?.type }}</p>
                </header>
                <div class="text-block">
                    <img :src="'../static/news/' + props?.news?.technology + '.svg'"
                        :alt="`статья о ${props?.news?.technology}`" class="text-block__img">
                    <p class="text-block__description">{{ props?.news?.description }}</p>
                </div>
                <footer class="news-footer">
                    <p>Теги: {{ props?.news?.technology }}, {{ props?.news?.type }}</p>
                </footer>
            </a>
    </div>
</template>

<script lang="ts">
    import { PropType } from 'vue'
    import NewsModel from '~~/models/NewsModel'

    export default defineComponent({
        name: 'BaseNewsBlock',
        props: {
            news: Object as PropType<NewsModel>
        },
        setup(props) {
            return{props}
        }
    })
</script>

<style lang="scss" scope>
.news-block {
    width: 100%;
    height: 100%;
    padding: 2em;
    border: 1px solid black;
    display: flex;
    flex-direction: column;
    justify-content: center;
    box-shadow: 0 0 1px;
    background-color: var(--block-bg);
    transition: 0.3s;
    font-size: 1.2rem;
    &:hover {
        background-color: var(--block-attention-bg);
        transform: translate(5px, -5px);
    }
}
.text-block {
    &__img {
        float: left;
        width: 5em;
        padding: 0 10px 10px 0;
    }
}
</style>