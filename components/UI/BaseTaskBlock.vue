<template>
    <div class="task-block">
        <header class="task-header">
            <h2 class="task-header__name">{{ props?.task?.title }}</h2>
        </header>
        <div class="text-block">
            <p class="text-block__text">{{ props?.task?.description }}</p>
            <details>
                <summary>ответ</summary>
                <p>
                        {{ props?.task?.answer }}
                </p>
                <code v-if="props?.task?.code">
                    <pre class="text-block__code">
                    {{ props?.task?.code }}
                </pre>
                </code>
            </details>
        </div>
    </div>
</template>

<script lang="ts">
import { PropType } from 'vue'
import TasksModel from '~~/models/TasksModel'


export default defineComponent({
    props: {
        task: Object as PropType<TasksModel>
    },
    setup(props) {
        

        return {props}
    }
})
</script>

<style lang="scss" scoped>
.task-block {
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