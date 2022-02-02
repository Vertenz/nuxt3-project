<template>
  <section>
    <div class="tips-main">
      <div v-for="tip in arrTips" :key="tip.id" class="news-block__el">
        <BaseTipsBlock :tip="tip" />
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import BaseTipsBlock from "~/components/UI/BaseTipsBlock.vue"

export default defineComponent({
  components: { BaseTipsBlock },
  setup() {
    const title = useTitle();
    title.value = 'Заметки фронтендера';

    const arrTips = useTips();

    return {arrTips}
  }
})
</script>

<style lang="scss" scoped>


</style>
