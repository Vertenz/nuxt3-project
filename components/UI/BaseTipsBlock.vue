<template>
    <div class="tips-block">
        <header class="tips-header">
            <h3 class="tips-header__name">{{ props?.tips?.title }}</h3>
        </header>
        <div class="text-block">
            <p class="text-block__text">{{ props?.tips?.description }}</p>
            <code> 
                <pre class="text-block__code">
                    {{ props?.tips?.code }}
                </pre>
            </code>
        </div>
        <footer class="tips-footer">
            <p>{{ props?.tips?.tag }}</p>
        </footer>
    </div>
</template>

<script lang="ts">
    import { PropType } from 'vue'
    import TipsModel from '~/models/TipsModel'

    export default defineComponent({
        name: 'BaseTipsBlock',
        props: {
            tips: Object as PropType<TipsModel>
        },
        setup(props) {

            return { props }
        }
    })

</script>

<style lang="scss" scoped>
.tips-block {
    width: 100%;
    height: 100%;
    padding: 2em;
    border: 1px solid black;
    display: flex;
    flex-direction: column;
    justify-content: center;
    box-shadow: 0 0 1px;
    background-color: rgb(102, 60, 146, 0.3);
    transition: 0.3s;
    font-size: 1.2rem;
}
.text-block {
    &__text {
        margin-bottom: 1em;
    }
    &__code {
        height: 500px;
        overflow: auto;
        background-color: rgba(22, 22, 22, 0.5);
        padding: 0.5em;
    }
}
</style>