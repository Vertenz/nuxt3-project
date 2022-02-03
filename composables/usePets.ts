import { useState } from '#app'
import PetsModel from '~~/models/PetsModel'

export const usePets = () =>
    useState < PetsModel[] > ('pets', () => [{
            id: 1,
            name: 'Test project',
            year: 2021,
            link: 'https://github.com/Vertenz/task1/tree/prod',
            page: 'https://vertenz.github.io/task1/',
            description: 'Тестовое задание, необходимо было быстро сверстать один из стандартных фигмавских шаблонов, используя HTML5, SCSS, simple adaptive (media response), vanilla JS(ES 6), webpack (html-webpack-plugin, clean-webpack-plugin, mini-css-extract-plugin, copy-webpack-plugin)',
            techs: 'HTML, CSS, JavaScript, Webpack'
        },
        {
            id: 2,
            name: 'Prototype of SPA website',
            year: 2021,
            link: 'https://github.com/Vertenz/nuxt-delta/tree/prod',
            page: 'https://deltapilot.xyz/',
            description: 'Прототип сайта. Использовались Vue/Nuxt(2)/PWA. Для запросов использовался "axios". Для макета использовался Vuetify. Для отправки данных PHP (mailer, SOAP)',
            techs: 'Vue, Nuxt (axios, pwa, robots), Vuetify, PHP (mailer, SOAP), Scss'
        },
        {
            id: 3,
            name: 'PHP training project',
            year: 2020,
            link: 'https://github.com/Vertenz/phpOOP',
            page: false,
            description: 'Попытка сделать фреймворк, чтобы лучше изучить PHP',
            techs: 'PHP > 7.0'
        },
        {
            id: 4,
            name: 'Prototype Vue sp website',
            year: 2020,
            link: 'https://github.com/Vertenz/delta/tree/gitPages',
            page: 'https://vertenz.github.io/delta/',
            description: 'Pet сайт, для изучения Vue(2&3). Исключительно для ознакомительного просмотра. Готовое разрешение от 261х124 до 400х600 (далее править меню) от 760 править шрифты, далее десктоп',
            techs: 'Vue, PHP (mailer, SOAP)'
        },
        {
            id: 5,
            name: 'React training project',
            year: 2021,
            link: 'https://github.com/Vertenz/learn-react',
            page: 'https://vertenz.github.io/learn-react/',
            description: 'Это мой первый тренировочный проект по реакту. Немного устав от туду списков и обычных форм решил сделать что-то более интересное, по этому решил создать что-то более игроинтерактивное. Использовал React, functional components, react-router-dom, lazy, useEffect, useRef, useState',
            techs: 'React'
        },
    ])