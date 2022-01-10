<template>
  <h1>Test page</h1>
  <h2>{{name}}</h2>
  <button @click="changeName('123')">Change</button>
</template>

<script lang="ts">
export default defineComponent({
  name: 'Test',
  data() {
    return {
      name: 'test TS type'
    }
  },
  methods: {
    changeName(name: string) {
      this.name = name as string
    },
  }
});
</script>

<style scoped>

</style>