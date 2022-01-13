<template>
    <div class="pet-block">
        <h3 class="pet-block__name">{{ props?.pet?.name }}</h3>
        <h4 class="pet-block__year"> {{ props?.pet?.year }} </h4>
        <p class="pet-block__text">{{ props?.pet?.description }}</p>
        <div class="prt-block__link">
            <a :href="props?.pet?.link">Link</a>
        </div>
    </div>
</template>
<script lang="ts">
    import { PropType } from 'vue'
    import PetsModel from '~/models/PetsModel'


    export default defineComponent({
        name: 'BasePetBlock',
        props: {
            pet: Object as PropType < PetsModel >
        },
        setup(props) {
            return {
                props
            }
        }
    })
</script>

<style scoped>

</style>