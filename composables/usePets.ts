import { useState } from '#app'
import PetsModel from '~~/models/PetsModel'

export const usePets = () =>
    useState < PetsModel[] > ('pets', () => [{
            id: 1,
            name: 'Test project',
            year: 2021,
            link: 'https://github.com/Vertenz/task1/tree/prod',
            page: 'https://vertenz.github.io/task1/',
            description: 'HTML5, SCSS, simple adaptive (media response), vanilla JS(ES 6), webpack (html-webpack-plugin, clean-webpack-plugin, mini-css-extract-plugin, copy-webpack-plugin)',
            techs: 'HTML, CSS, JavaScript, Webpack'
        },
        {
            id: 2,
            name: 'Prototype of SPA website',
            year: 2021,
            link: 'https://github.com/Vertenz/nuxt-delta/tree/prod',
            page: 'https://deltapilot.xyz/',
            description: 'Vue, Nuxt (axios, pwa, robots), Vuetify, PHP (mailer, SOAP)',
            techs: 'Vue, Nuxt (axios, pwa, robots), Vuetify, PHP (mailer, SOAP), Scss'
        },
        {
            id: 3,
            name: 'PHP training project',
            year: 2020,
            link: 'https://github.com/Vertenz/phpOOP',
            page: false,
            description: 'Try to create php framework',
            techs: 'PHP > 7.0'
        },
        {
            id: 4,
            name: 'Prototype Vue sp website',
            year: 2020,
            link: 'https://github.com/Vertenz/delta/tree/gitPages',
            page: 'https://vertenz.github.io/delta/',
            description: 'Vue, PHP (mailer, SOAP)',
            techs: 'Vue, PHP (mailer, SOAP)'
        },
        {
            id: 5,
            name: 'React training project',
            year: 2021,
            link: 'https://github.com/Vertenz/learn-react',
            page: 'https://vertenz.github.io/learn-react/',
            description: 'this is my react training project. I`m getting a little bored with all usual staff like to-do list, input form, ect. That is exactly why I created This :) You can use the Adventure mode or Text version to see other my project. I used here React, functional components, react-router-dom, lazy, useEffect, useRef, useState',
            techs: 'React'
        },
    ])