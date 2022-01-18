<template>
  <div class="transition-fix">

    <head>
      <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.5.0/css/font-awesome.min.css">
    </head>
    <section class="news-section">
      <div class="news-up">
        <h1>Новости / Статьи / Полезные ресурсы</h1>
        <details class="news-up__details">
          <summary class="news-up__summary"></summary>
          <div class="filter">
            <label for="news-search">Поиск по названию</label>
            <input v-model="searchText" @change="test" type="search" name="news-search" id="news-search"
              class="filter__search" />
            <form class="filter-check">
              <label for="article">статья</label>
              <input v-model="searchType" type="radio" name="article" id="article" value="статья" />
              <label for="news">новость</label>
              <input v-model="searchType" type="radio" name="news" id="news" value="новость" />
              <label for="all">любой и все все</label>
              <input v-model="searchType" type="radio" name="all" id="all" value="all">
            </form>
          </div>
        </details>
      </div>

      <li v-for="el in arrNews" :key="el.id"> {{ el.title }} </li>
    </section>
  </div>
</template>

<script lang="ts">
import { useNews } from "~~/composables/useNews";

export default defineComponent({
  name: 'NewsSection',
  setup() {
    const title = useTitle();
    title.value = 'Что-то интересненькое';
    
    const arrNews = useNews();

    let searchText = ref('');
    let searchType = ref('');

    function test() {
      console.log(searchText.value);
    }

    return{arrNews, test, searchText, searchType};
  }
})
</script>

<style lang="scss" scoped>
.news-up {
  padding: 1em 0;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;

  &__tech {
    margin-top: 3%;
  }

  &__details &__summary::-webkit-details-marker {
    display: none;
  }

  &__summary {
    list-style: none;
    &:hover {
      color: var(--block-attention-bg);
    }
  }

  &__details &__summary::before {
    content: '\f002';
    font-family: FontAwesome;
  }

  &__details {
    font-size: 1.5rem;
    position: absolute;
    right: 5%;

    &:hover {
      cursor: pointer;
    }
  }
}

.filter {
    position: absolute;
    right: 10%;
    z-index: 3;
    //TODO прозрачный фон
  &__search {
    color: black;
    padding: 0 0.5em;
  }
}
</style>
