<template>
  <section>
    <div class="tips-main">
      <div v-for="tips in arrTips" :key="tips.id" class="news-block__el">
        <BaseTipsBlock :tips="tips" />
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import { useTips } from '~/composables/useTips'
import BaseTipsBlock from "~/components/UI/BaseTipsBlock.vue"

export default defineComponent({
  name: 'FrontendSection',
  components: {BaseTipsBlock},
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
