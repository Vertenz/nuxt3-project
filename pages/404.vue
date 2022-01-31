<template>
    <section class="nf">
        <div class="nf-left">left</div>
        <div class="nf-right">right</div>
    </section>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Sections from '~~/components/Sections.vue'

export default defineComponent({
  components: { Sections },
    layout: false,
    setup () {
        

        return {}
    }
})
</script>

<style lang="scss" scoped>
.nf {
    display: grid;
    grid-template-columns: 1fr 1fr;
}
</style>