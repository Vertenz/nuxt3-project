<template>
  <section>
    <h1>Вопросы / задачи по JavaScript</h1>
      <div v-for="task in arrTasks" :key="task.id" class="task-sections">
        <BaseTaskBlock :task="task"/>
      </div>
  </section>
</template>

<script lang="ts">
import BaseTaskBlock from "./UI/BaseTaskBlock.vue";

export default defineComponent({
  components: { BaseTaskBlock },
  setup() {
    const title = useTitle();
    title.value = 'Задачки по JS';

    const arrTasks = useTasks();

    return { arrTasks }
  }
})
</script>

<style scoped>

</style>
