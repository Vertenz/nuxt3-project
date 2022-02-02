<template>
    <section class="sections" id="sections">
        <div class="sections-block" v-for="btnInfo in arrMenusEL" :key="btnInfo.id">
            <BaseButton :btnInfo='btnInfo' />
        </div>
    </section>
</template>

<script lang="ts">
import BaseButton from "./UI/BaseButton.vue";

export default defineComponent({
    components: { BaseButton },
    setup() {
        const title = useTitle();
        title.value = 'Главная';

        const arrMenusEL = useMenuEL();

        return { arrMenusEL }
    }
})
</script>


<style lang="scss" scoped>
    .sections {
        display: flex;
        justify-content: space-around;
        align-items: center;
        flex-wrap: wrap;
        margin-top: 2em;
    }
</style>
