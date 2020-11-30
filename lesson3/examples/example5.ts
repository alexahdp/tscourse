// метапрограммирование

// рассмотрим простой пример, он нам нужен для того, чтобы понять как работает оператор in
// преобразовать тип-множество в структуру
type Status = 'loading' | 'success' | 'error';

type State = {
  [k in Status]?: boolean;
}

// Реализовать Utility-type Pick

interface User {
  id: string;
  email: string;
  age: number;
}

// для начала посмотри как работает родной utility-type Pick
type partUser = Pick<User, 'id' | 'email'>;

// попытка №1
type Pick1<T, P> = {
  [p in P]: T[p]; // error! откуда компилятору знать, что P является ключом у T?
};

// попытка №2 - поясним ему
type Pick2<T, P extends keyof T> = {
  [p in P]: T[p];
};

type partUser2 = Pick1<User, 'id' | 'email'>;

// аналогичным образом мы можем написать еще пару utility-типов
type Readonly1<T> = {
  readonly [k in keyof T]: T[k];
}

type Partial2<T> = {
  [k in keyof T]?: T[k];
}

type Dict = Record<'name' | 'email', string | number>;
const user: Dict = {
  name: 'alex',
  email: 'alex@gmail.com',
};

// а что делать если мы хотим создать тип, который будет
// не просто наследовать ключи от существующего типа, но и попутно изменять их?
// с версии 4.3 это стало возможным

// Пример: utility-type Getters принимает на вход тип-интерфейс и создает новый тип,
// заменяя все свойства на методы get{PropertyName}
// это достигается путем добавления ключевого слова 'as' и utility-типа Capitalize
type Getters<T> = {
  [K in keyof T as `get${Capitalize<string & K>}`]: () => T[K]
};

interface Person {
  name: string; 
  age: number;
  location: string;
}

type LazyPerson = Getters<Person>;