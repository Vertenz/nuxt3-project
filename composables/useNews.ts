import { useState } from "#app";
import NewsModel from "~~/models/NewsModel";

export const useNews = () =>
    useState < NewsModel[] > ('news', () => [{
            id: 1,
            title: 'Что за черт, JavaScript',
            type: 'Статья, Hubr',
            technology: 'JS',
            description: 'Этот пост — список забавных и хитрых примеров на JavaScript.',
            link: 'https://habr.com/ru/company/vk/blog/335292/'
        },
        {
            id: 2,
            title: 'Дорожная карта vue разработчика',
            type: 'Статья, Tproger',
            technology: 'Vue',
            description: 'План изучения Vue от Алины Уткиной / Tproger',
            link: 'https://tproger.ru/articles/izuchenie-vue-js-v-2021-godu-dorozhnaja-karta-razrabotchika/'
        },
        {
            id: 3,
            title: 'Веб-аутентификация: файлы cookies или токены?',
            type: 'Статья',
            technology: 'Back',
            description: 'Сравним аутентификацию в веб-приложениях на основе токенов и файлов cookies, чтобы помочь вам выбрать наилучший подход для проекта.',
            link: 'https://proglib.io/p/veb-autentifikaciya-fayly-cookies-ili-tokeny-2021-08-14'
        },
        {
            id: 4,
            title: 'Ускорение сайта за счет минимизации CSS',
            type: 'Фреймворк',
            technology: 'Front',
            description: 'CSS-фреймворк для оптимизации. Может работать из скрипта или npm/yarn. Удобен для внефреймворковских проектов.',
            link: 'https://asmcss.com/'
        },
        {
            id: 5,
            title: 'Первые шаги в Nuxt3',
            type: 'Статья',
            technology: 'Nuxt',
            description: 'В статье говоритcя о личном опыте использования Nuxt3',
            link: 'https://itnext.io/nuxt-3-first-steps-c23d142405c4'
        },
        {
            id: 6,
            title: 'Варианты отображения SVG',
            type: 'Статья',
            technology: 'Front',
            description: 'Размышления на тему каким способом лучше всего отображать SVG',
            link: 'https://cloudfour.com/thinks/svg-icon-stress-test/'
        }
    ])