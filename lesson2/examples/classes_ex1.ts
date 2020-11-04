// Классы

// по-умолчанию все свойства публичные
// инициализация в конструкторе
class User1 {
  name: string;
  email: string;

  constructor(n: string, e: string) {
    this.name = n;
    this.email = e;
  }
}

const user1 = new User1('alex', 'alex@gmail.com');

// ========

// сокращенная инициализация
class User2 {
  constructor(public name: string, public email: string) {}

  sayName() {
    console.log(this.name);
  }
}
const user2 = new User2('alex', 'alex@gmail.com');
user2.sayName();
