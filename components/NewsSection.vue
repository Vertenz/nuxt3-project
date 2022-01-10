<template>
  <h1>Exiting</h1>
</template>

<script>
export default defineComponent({
  name: 'NewsSection',
  setup() {
    const title = useTitle();
    title.value = 'Exiting';
  }
})
</script>

<style scoped>

</style>
