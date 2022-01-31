<template>
    <div class="tips-block">
        <header class="tips-header">
            <h3 class="tips-header__name">{{ props?.tips?.name }}</h3>
        </header>
        <div class="text-block">
            <p class="text-block__text">{{ props?.tips?.description }}</p>
            <p class="text-block__tech">{{ props?.tips?.techs }}</p>
            <details v-if="props?.tips?.page" class="text-block__details">
                <summary class="text-block__summary">Here a screenshot</summary>
                <a :href="imgSrc + props?.tips?.id + '.jpg'" target="_blank"><img :src="imgSrc + props?.tips?.id + '.jpg'" alt="screenshot" class="text-block__img"></a>
            </details>
        </div>
        <footer class="tips-footer">
            <a class="tips-footer__link tips-footer__link_git" :href="props?.tips?.link" title="github" target="_blank"></a>
            <a v-if="props?.tips?.page" class="tips-footer__link tips-footer__link_page" :href="props?.tips?.page" title="website" target="_blank"></a>
        </footer>
    </div>
</template>

<script language="ts">


</script>

<style lang="scss" scoped>

</style>