<template>
  <h1>Front-end</h1>
</template>

<script lang="ts">
export default defineComponent({
  setup() {
    const title = useTitle();
    title.value = 'Front-end tips';
  }
})
</script>

<style scoped>

</style>
