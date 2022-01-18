<template>
  <section>
    <h1>Front-end</h1>
    <div class="test">
      <form>
        <input type="date" name="1" id="1">
        <input type="email" name="2" id="2">
        <input type="text" name="3" id="3">
      </form>
    </div>
  </section>
</template>

<script lang="ts">
export default defineComponent({
  name: 'FrontendSection',
  setup() {
    const title = useTitle();
    title.value = 'Заметки фронтендера';
  }
})
</script>

<style lang="scss" scoped>
.test {
  width: 250px;
  height: 250px;
}

</style>
