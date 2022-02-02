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
            <form class="filter-check" id="filter-form" v-on:submit.prevent>
              <label for="news-search">Поиск по названию</label>
              <input v-model="searchText" @change="startSearch" type="search" name="news-search" id="news-search"
                class="filter-check__search" />
            </form>
          </div>
        </details>
      </div>
      <transition name="slide-fade">
        <div class="news-main" v-if="findNews[0]">
          <div v-for="findEl in findNews" :key="findEl.id" class="news-block__el">
            <BaseNewsBlock :news="findEl" />
          </div>
        </div>
        <div class="news-main" v-else>
          <div v-for="news in arrNews" :key="news.id" class="news-block__el">
            <BaseNewsBlock :news="news" />
          </div>
        </div>
      </transition>
    </section>
  </div>
</template>

<script lang="ts">
import BaseNewsBlock from "~/components/UI/BaseNewsBlock.vue";

export default defineComponent({
  components: { BaseNewsBlock },
  setup() {

    const title = useTitle();
    title.value = 'Что-то интересное';
    
    const arrNews = useNews();

    let searchText = ref('');

    let findNews = ref([]);


    function startSearch() {
      if (searchText.value.length > 2) {
        findNews.value = [];
        searchText.value = searchText.value.toLowerCase();
        arrNews.value.map((item) => {
          for (let key in item) {
            let el: string = item[key].toString().toLowerCase();
            if (el.includes(searchText.value)) {
              return findNews.value.push(item);
            }
          }

        })
        return findNews;
      }else {
        findNews.value = [];
        return findNews;
      }
    }

    return{arrNews, findNews, searchText, startSearch};
  }
})
</script>

<style lang="scss" scoped>
.news-section {
  min-height: 100vh;
}

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
}

.filter-check {
    display: flex;
    flex-direction: column;
    &__search {
    color: black;
    padding: 0 0.5em;
  }
}

.news-main {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 1em;
  @media (max-width: 450px) {
    grid-template-columns: 1fr;
  }
}

.slide-fade-enter-active {
  transition: all .2s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}

.slide-fade-leave-active {
  transition: all .3s ease-out;
}

.slide-fade-enter-from,
.slide-fade-leave-to {
  transform: translateX(20px);
  opacity: 0;
}
</style>
