import { v4 as uuid } from 'uuid';
import { ITestData } from '../common/types';

export const testData: ITestData[] = [
  {
    additionalFields: [`<javascript>`, `<scripting>`, `<script>`, `<js>`],
    label: 'После какого HTML тега нужно вставить JavaScript?',
    name: uuid(),
    value: '<script>',
  },
  {
    additionalFields: [`Да`, `Нет`],
    label: 'JavaScript и Java это одно и тоже.',
    name: uuid(),
    value: 'Нет',
  },
  {
    additionalFields: [`<head> и <body>`, `<footer>`, `<div>`],
    label: 'В каком разделе можно вставить JavaScript?',
    name: uuid(),
    value: `<head> и <body>`,
  },
  {
    additionalFields: [
      `function MyFunction()`,
      `function = MyFunction()`,
      `function:MyFunction()`,
      `function = New MyFunction()`,
    ],
    label: 'Как объявить функцию в JavaScript?',
    name: uuid(),
    value: 'function MyFunction()',
  },
  {
    additionalFields: [`call function myFunction()`, `call myFunction()`, `myFunction()`],
    label: 'Как вызвать функцию "myFunction"?',
    name: uuid(),
    value: 'myFunction()',
  },
  {
    additionalFields: [`alert("Hi")`, `info("Hi")`, `new alert("Hi")`, `Нет верных вариантов`],
    label: 'Где верно указан запуск всплывающего окна?',
    name: uuid(),
    value: 'alert("Hi")',
  },
  {
    additionalFields: [
      `print(Hello);`,
      `prompt("Hello")`,
      `documentWrite("Hello");`,
      `console.log("Hello");`,
    ],
    label: 'Где верно указан вывод данных?',
    name: uuid(),
    value: `console.log("Hello");`,
  },
  {
    additionalFields: [
      `Только числа и строки`,
      `Строки, числа с точкой, простые числа и булевые выражения`,
      `Строки, числа с точкой и простые числа`,
    ],
    label: 'Какие значения можно хранить в переменных?',
    name: uuid(),
    value: 'Строки, числа с точкой, простые числа и булевые выражения',
  },
  {
    additionalFields: [
      `Конструкция, что выполняет код несколько раз`,
      `Оператор сравнения значений`,
      `Конструкция для создания определенной переменной`,
    ],
    label: 'Что такое условный оператор?',
    name: uuid(),
    value: 'Оператор сравнения значений',
  },
  {
    additionalFields: [
      `var num = "STRING";`,
      `var isDone = 0;`,
      `var number = 12,5;`,
      `var b = false;`,
    ],
    label: 'Какая переменная записана неверно?',
    name: uuid(),
    value: 'var number = 12,5;',
  },
];
