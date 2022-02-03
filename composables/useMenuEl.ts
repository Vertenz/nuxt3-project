import { useState } from "#app";
import MenuElModel from "~~/models/MenuLElModel";

export const useMenuEL = () => 
    useState<MenuElModel[]>('el', () => 
        [
            {
                id: 0,
                imgSrc: '/btn/project.svg',
                srcLink: '/pets',
                title: 'Мои проекты',
                description: 'pet и доступные и к просмотру примеры работ, сделанные мной :)'
            },
            {
                id: 1,
                imgSrc: '/btn/task.svg',
                srcLink: '/jstasks',
                title: 'Задачки JS',
                description: 'Задачки для тренировки javascript/typescript'
            },
            {
                id: 2,
                imgSrc: '/btn/front.svg',
                srcLink: '/frontend',
                title: 'Заметки фронтендера',
                description: 'Шпаргалки по HTML, CSS, Vue, React'
            },
            {
                id: 3,
                imgSrc: '/btn/news.svg',
                srcLink: '/exciting',
                title: 'Новости/Статьи/Идеи',
                description: 'Что-то новое (или не очень) и интересное в WebDev'
            }
        ])