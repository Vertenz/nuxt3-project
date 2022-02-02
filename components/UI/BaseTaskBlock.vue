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
                    <pre>
                        {{ props?.task?.answer }}
                    </pre>
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

<style scoped>

</style>