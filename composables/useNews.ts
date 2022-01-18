import { useState } from "#app";
import NewsModel from "~~/models/NewsModel";

export const useNews = () => 
    useState<NewsModel[]>('tips', () => 
        [
            {
                id: 1,
                title: 'Что за черт, JavaScript',
                type: 'Статья, Hubr',
                description: 'Этот пост — список забавных и хитрых примеров на JavaScript.',
                link: 'https://habr.com/ru/company/vk/blog/335292/'
            },
            {
                id: 2,
                title: 'Дорожная карта vue разработчика',
                type: 'Статья, Tproger',
                description: 'План изучения Vue от Алины Уткиной / Tproger',
                link: 'https://tproger.ru/articles/izuchenie-vue-js-v-2021-godu-dorozhnaja-karta-razrabotchika/'
            }
        ])