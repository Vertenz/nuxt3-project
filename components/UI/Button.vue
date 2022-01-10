<template>
  <NuxtLink :to="section.scrLink" class="sections-block__link">
    <div class="sections-block__icon">
      <img :src="section.imgSrc" :alt="section.description">
    </div>
    <div class="sections-block__text">
      <h2>{{ section.title }}</h2>
      <i>{{ section.description }}</i>
    </div>
  </NuxtLink>
</template>

<script setup>
  props: {
    title: String
  }
  console.log(props.title)
</script>

<style scoped>

</style>