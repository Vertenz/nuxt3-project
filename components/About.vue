<template name='fade'>
        <section class="section">
          <Test :title="'some text'"/>
            <div>
                {{ aboutText }}
            </div>        
        </section>
</template>

<script lang="ts">
import Test from "./UI/Test.vue";

export default defineComponent({
    components: {Test},
    setup() {
        const aboutText = `Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Suscipit alias facere, nulla perferendis dolorem, doloribus porro rerum eligendi 
            ad quibusdam odio praesentium nam cum obcaecati in. Quis pariatur excepturi ducimus.
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
            Suscipit alias facere, nulla perferendis dolorem, doloribus porro rerum eligendi 
            ad quibusdam odio praesentium nam cum obcaecati in. Quis pariatur excepturi ducimus
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
            Suscipit alias facere, nulla perferendis dolorem, doloribus porro rerum eligendi 
            ad quibusdam odio praesentium nam cum obcaecati in. Quis pariatur excepturi ducimus
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
            Suscipit alias facere, nulla perferendis dolorem, doloribus porro rerum eligendi 
            ad quibusdam odio praesentium nam cum obcaecati in. Quis pariatur excepturi ducimus+-`;

        const title = useTitle();
        title.value = 'About';

        return {
            aboutText
        }
    }
})
</script>

<style lang="scss" scoped>
.section {
    transition: 1s;
}

</style>