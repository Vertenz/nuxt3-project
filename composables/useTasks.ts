import { useState } from "#app";
import TasksModel from "~~/models/TasksModel";

export const useTasks = () =>
    useState < TasksModel[] > ('task', () => [{
        id: 1,
        title: 'Типы данны в JavaScript',
        description: 'Перечилисть все типы данных и их отличия',
        answer: `В JavaScript есть 8 основных типов.
        number для любых чисел: целочисленных или чисел с плавающей точкой; целочисленные значения ограничены диапазоном ±(253-1).
        bigint для целых чисел произвольной длины.
        string для строк. Строка может содержать ноль или больше символов, нет отдельного символьного типа.
        boolean для true/false.
        null для неизвестных значений – отдельный тип, имеющий одно значение null.
        undefined для неприсвоенных значений – отдельный тип, имеющий одно значение undefined.
        object для более сложных структур данных.
        symbol для уникальных идентификаторов.
        Оператор typeof позволяет нам увидеть, какой тип данных сохранён в переменной.
        
        Имеет две формы: typeof x или typeof(x).
        Возвращает строку с именем типа. Например, "string".
        Для null возвращается "object" – это ошибка в языке, на самом деле это не объект. \n
        В TypeScript имеются следующие базовые типы:

            boolean: логическое значение true или false

            number: числовое значение

            string: строки

            Array: массивы

            кортежи

            Enum: перечисления

            Any: произвольный тип

            Symbol

            null и undefined: соответствуют значениям null и undefined в javascript

            Never: также представляет отсутствие значения и используется в качестве возвращаемого типа функций, которые генерируют или возвращают ошибку
        `,
        code: false
    }])