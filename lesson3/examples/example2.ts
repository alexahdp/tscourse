// написать функцию сортировки массива объектов по заданному ключу
// (использование keyof)

type Point = {
  x: number;
  y: number;
}

function sortByKey<K extends keyof T, T>(vals: T[], key: K): T[] {
  return vals.sort((v1, v2) => v1[key] > v2[key] ? 1 : -1);
}

const points: Point[] = [
  { x: 0, y: 0},
  { x: 0, y: 1},
];

sortByKey(points, 'x'); // ok
sortByKey(points, 'y'); // ok
sortByKey(points, Math.random() > 0.5 ? 'x' : 'y'); // ok
sortByKey(points, 'z'); // error
  
// ====

// Проблема: структурная типизация позволяет передавать в функции лишние поля
// Выводить стр
// Решение: написать тип высшего порядка для генерации ExactForm-типа

// Дан массив пользователей: {emails: string[], zipcodes: number[]}
// вывести этот массив в файл в виде:
// emails: alex@mail.ru, alex@yandex.ru; zipcodes: 12342,103021
// ...

interface User {
  email: string[];
  name: number[];
}

const log1 = (u: User) => {
  console.log(Object.entries(u).map(([k, v]) => `${k}: ${v.join(',')}`).join('; '));
}
log1({ email: ["dsfdsf"], name: [10], age: ['sf'] });
// проблема: v оказывается, имеет тип any

// добавим HOT:
type Exact<T> = {
  [P in keyof T]: T[P];
}

const log2 = (u: Exact<User>) => {
  console.log(Object.entries(u).map(([k, v]) => `${k}: ${v.join(',')}`).join('; '));
}

// проверим
log2({ email: ["dsfdsf"], name: [10] });
log2({ email: ["dsfdsf"], name: [1], phone: '2323' }); // ошибка, лишнее поле

// проблема решена!

// а теперь еще раз внимательно посмотрим что же мы сделали
// мы объявили тип!
// а теперь сделаем кое-что еще: заменим interface User на type User

// проговорить: интерфейс диктует свойста, которые должны быть у объекта, но
// он на ограничивает наличие других свойств