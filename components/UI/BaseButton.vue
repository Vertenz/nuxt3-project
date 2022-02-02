<template>
  <div class="sections-block">
    <NuxtLink :to="props?.btnInfo?.srcLink" class="sections-block__link">
      <div class="sections-block__icon">
        <img :src="props?.btnInfo?.imgSrc" :alt="props?.btnInfo?.description">
      </div>
      <div class="sections-block__text">
        <h2>{{ props?.btnInfo?.title }}</h2>
        <i>{{ props?.btnInfo?.description }}</i>
      </div>
    </NuxtLink>
  </div>
</template>

<script lang="ts">
import MenuLElModel from '~/models/MenuLElModel'
import { PropType } from 'vue'

export default defineComponent({
  props: {
    btnInfo: Object as PropType<MenuLElModel>
  },
  setup(props) {
    return {props}
  }
})
</script>

<style lang="scss" scoped>
    .sections-block {
        display: flex;
        align-items: center;
        width: max-content;
        height: max-content;
        justify-content: space-between;
        background-color: var(--block-bg);
        margin-bottom: 1em;
        box-shadow: 2px 6px 10px black;
        cursor: pointer;
        &:hover {
            box-shadow: 0 0 0 black;
        }
        &__link {
            display: flex;
            justify-content: space-around;
            align-items: center;
        }
        &__icon {
            padding: 0.5em;
        }
        &__text {
            padding: 1em;
        }
        @media (max-width: 570px) {
          &{
            width: min-content;
          }
        }
    }
</style>