<template>
  <div>
      <div v-for="task in arrTasks" :key="task.id">
        <BaseTaskBlock :task="task"/>
      </div>
  </div>
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
