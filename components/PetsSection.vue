<template>
  <h1>Pets</h1>
</template>

<script>
export default defineComponent({
  setup() {
    const title = useTitle();
    title.value = 'Pets';
  }
})
</script>

<style scoped>

</style>
