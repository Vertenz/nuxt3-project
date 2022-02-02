import { useState } from "#app";
import TipsModel from "~~/models/TipsModel";

export const useTips = () =>
  useState < TipsModel[] > ('tips', () => [{
    id: 1,
    title: 'Ошибка Nuxt. Не отображает страницу после второго перехода',
    description: `Первый переход на страницу отображается корректно, но после попытки перейти на другую выдает ошибку. 
            Так же при открытии компонента есть предупреждение Component inside <Transition> renders non-element 
            root node that cannot be animated. Ошибка состоит в том, что хоть vue3 и nuxt3 могут работать без единого коревого элемента в <template>, анимация через Transition
            или выставленная автоматически анимация для страниц не может корректно работать, если у вас есть несколько рут элементов. 
            В данном примере необходимо объединить <head> и <section> : `,
    code: `\n //не правильный вариант\n
          <template>
              <head>
                <link rel="stylesheet" 
                href="font-awesome.min.css">
              </head>
              <section class="news-section">
                <div class="news-up">
                  <h1>Новости / Статьи / Полезные ресурсы</h1>
                  <details class="news-up__details">
                    <summary class="news-up__summary"></summary>
                    <div class="filter">
                      <form class="filter-check" id="filter-form" v-on:submit.prevent>
                        <label for="news-search">Поиск по названию</label>
                        <input v-model="searchText" @change="startSearch" 
                          type="search" name="news-search" id="news-search"
                          class="filter-check__search" />
                      </form>
                    </div>
                  </details>
                </div>
                <transition name="slide-fade">
                  <div class="news-main" v-if="findNews[0]">
                    <div v-for="findEl in findNews" :key="findEl.id" 
                      class="news-block__el">
                      <BaseNewsBlock :news="findEl" />
                    </div>
                  </div>
                  <div class="news-main" v-else>
                    <div v-for="news in arrNews" :key="news.id" 
                      class="news-block__el">
                      <BaseNewsBlock :news="news" />
                    </div>
                  </div>
                </transition>
              </section>
        </template>\n
            \n //вариант фикса \n
        <template>
            <div class="transition-fix">
              <head>
                <link rel="stylesheet" 
                  href="font-awesome.min.css">
              </head>
              <section class="news-section">
                <div class="news-up">
                  <h1>Новости / Статьи / Полезные ресурсы</h1>
                  <details class="news-up__details">
                    <summary class="news-up__summary"></summary>
                    <div class="filter">
                      <form class="filter-check" id="filter-form" v-on:submit.prevent>
                        <label for="news-search">Поиск по названию</label>
                        <input v-model="searchText" @change="startSearch" 
                          type="search" name="news-search" id="news-search"
                          class="filter-check__search" />
                      </form>
                    </div>
                  </details>
                </div>
                <transition name="slide-fade">
                  <div class="news-main" v-if="findNews[0]">
                    <div v-for="findEl in findNews" :key="findEl.id" 
                      class="news-block__el">
                      <BaseNewsBlock :news="findEl" />
                    </div>
                  </div>
                  <div class="news-main" v-else>
                    <div v-for="news in arrNews" :key="news.id" 
                      class="news-block__el">
                      <BaseNewsBlock :news="news" />
                    </div>
                  </div>
                </transition>
              </section>
            </div>
          </template>`,
    tag: 'Nuxt'
  }])