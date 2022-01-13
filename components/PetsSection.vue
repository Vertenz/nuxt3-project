<template>
  <h1>2Pets</h1>
  <div class="pet-grid">
    <div class="pet-grid__el" v-for="pet in arrPets" :key="pet.id">
      <BasePetBlock :pet="pet" />
    </div>
  </div>
</template>

<script lang="ts">
import BasePetBlock from '~/components/UI/BasePetBlock.vue'

export default defineComponent({
  name: 'PetsSection',
  components: { BasePetBlock },
  setup() {
    const title = useTitle();
    title.value = 'Pets';

    const arrPets = usePets();

    return { arrPets }
  }
})
</script>

<style scoped>

</style>
