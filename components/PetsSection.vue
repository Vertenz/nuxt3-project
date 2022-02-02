<template>
  <section class="pet-section">
    <h2 class="pet-section__h">My project</h2>
    <div class="pet-grid">
      <div class="pet-grid__el" v-for="pet in arrPets" :key="pet.id">
        <BasePetBlock :pet="pet" />
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import BasePetBlock from '~/components/UI/BasePetBlock.vue'

export default defineComponent({
  components: { BasePetBlock },
  setup() {
    const title = useTitle();
    title.value = 'Мои проекты';

    const arrPets = usePets();

    return { arrPets }
  }
})
</script>

<style lang="scss" scoped>
.pet-section {
  display: flex;
  flex-direction: column;
  align-content: center;
  &__h {
    text-align: center;
    padding: 1rem;
    font-size: 2rem;
  }
}
.pet-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 570px));
  grid-gap: 2em;
  justify-content: center;
}
</style>
