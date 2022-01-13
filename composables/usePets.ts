import { useState } from '#app'
import PetsModel from '~~/models/PetsModel'

export const usePets = () => 
 useState<PetsModel[]>('pets', () => 
    [
        {
            id: 1,
            name: 'Test project HTML CSS JS + webpack',
            year: 2021,
            link: 'https://github.com/Vertenz/task1/tree/prod',
            page: 'https://vertenz.github.io/task1/',
            description: 'HTML5, SCSS, simple adaptive (media response), vanilla JS(ES 6), webpack (html-webpack-plugin, clean-webpack-plugin, mini-css-extract-plugin, copy-webpack-plugin)'
        },
        {
            id: 2,
            name: 'Prototype of Delta website Nuxt',
            year: 2021,
            link: 'https://github.com/Vertenz/nuxt-delta/tree/prod',
            page: false,
            description: 'Vue, Nuxt (axios, pwa, robots), Vuetify, PHP (mailer, SOAP)'
        },
        {
            id: 3,
            name: 'PHP training project',
            year: 2020,
            link: 'https://github.com/Vertenz/phpOOP',
            page: false,
            description: 'Try to create php framework'
        },
        {
            id: 4,
            name: 'Prototype of Delta website Vue',
            year: 2020,
            link: 'https://vertenz.github.io/delta/',
            page: 'https://github.com/Vertenz/delta/tree/gitPages',
            description: 'Vue, PHP (mailer, SOAP)'
        },
        {
            id: 5,
            name: 'React training project',
            year: 2021,
            link: 'https://github.com/Vertenz/learn-react',
            page: false,
            description: 'This is that project ( u r seeing it now :) )'
        },
    ]
  )