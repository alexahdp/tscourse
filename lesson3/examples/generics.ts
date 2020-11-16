// Generics
// Обобщённый тип (обобщение, дженерик) позволяет резервировать место для типа,
// который будет заменён на конкретный, переданный пользователем,
// при вызове функции или метода, а также при работе с классами.

// написать функцию
function filter1(items: string[], cb: (a: string) => boolean) {
  const result: string[] = [];
  for (let item of items) {
    if (cb(item)) {
      result.push(item);
    }
  }
  return result;
}

// проблема: функция может принимать не один тип

// решение 1 - union-type
// решение 2 - перегрузка функций
function filter2(items: number[], cb: (a: number) => boolean): number[];
function filter2(items: string[], cb: (a: string) => boolean): string[];
function filter2(items: any[], cb: (a: any) => boolean) {
  const result: any[] = [];
  for (let item of items) {
    if (cb(item)) {
      result.push(item);
    }
  }
  return result;
}

const data = filter2([12, 12], v => true);

// решение 3 - использовать generic-и

function filter3<T>(items: T[], cb: (a: T) => boolean): T[] {
  const result: T[] = [];
  for (let item of items) {
    if (cb(item)) {
      result.push(item);
    }
  }
  return result;
}

type User = {
  email: string;
  username: string;
}
const users: User[] = [{email: 'sd', username: 'sdf'}];
const res = filter3<User>(users, t => true);

// ======

// generic-и мы используем повсюду:
// Map<string, string>, Set<string>, Array<string>, ...

// по аналогии с lodash написать функцию pluck, которая преобразует массив объектов
// извлекая из элементов массива указанное значение

// плохо
function pluck1(record: any[], key: string): any[] {
  return record.map(r => r[key]);
}

// хорошо
function pluck2<T>(record: T[], key: keyof T) {
  return record.map(r => r[key]);
}
