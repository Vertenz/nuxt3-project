<template>
  <section>
    <div v-for="el in arrTips" :key="el.id">
      <h1>{{ el.title }}</h1>
    </div>
  </section>
</template>

<script lang="ts">
import { useTips } from '~/composables/useTips'

export default defineComponent({
  name: 'FrontendSection',
  setup() {
    const title = useTitle();
    title.value = 'Заметки фронтендера';

    const arrTips = useTips();

    return {arrTips}
  }
})
</script>

<style lang="scss" scoped>
.test {
  width: 250px;
  height: 250px;
}

</style>
