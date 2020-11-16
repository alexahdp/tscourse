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

// добавим Mapped-type
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