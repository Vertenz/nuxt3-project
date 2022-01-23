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
            <form class="filter-check" id="filter-form" v-on:submit.prevent="test">
              <label for="news-search">Поиск по названию</label>
              <input v-model="searchText" @change="test" type="search" name="news-search" id="news-search"
                class="filter__search" />
              <label for="article">статья</label>
              <input v-model="searchType" type="radio" name="article" id="article" value="статья" />
              <label for="news">новость</label>
              <input v-model="searchType" type="radio" name="news" id="news" value="новость" />
              <label for="all">любой и все все</label>
              <input v-model="searchType" type="radio" name="all" id="all" value="all">
              <button type="submit">Ok</button>
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

    const test = () => {
      console.log('tets form', {text: searchText.value, param: searchType.value})
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
    z-index: 1;

    &:hover {
      cursor: pointer;
    }
  }
}

.filter {
    position: absolute;
    right: 10%;
    z-index: 2;
    background-color: rgba(1, 2, 3, 0.5);
    width: max-content;
  &__search {
    color: black;
    padding: 0 0.5em;
  }
}
</style>
