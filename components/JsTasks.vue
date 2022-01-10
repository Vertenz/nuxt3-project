<template>
  <h1>Tasks</h1>
</template>

<script lang="ts">
export default defineComponent({
  setup() {
    const title = useTitle();
    title.value = 'JS Tasks';
  }
})
</script>

<style scoped>

</style>
