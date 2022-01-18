<template>
  <h1>Tasks</h1>
</template>

<script lang="ts">
export default defineComponent({
  setup() {
    const title = useTitle();
    title.value = 'Задачки по JS';
  }
})
</script>

<style scoped>

</style>
