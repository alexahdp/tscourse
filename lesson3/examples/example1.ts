// Generics
// Обобщённый тип (обобщение, дженерик) позволяет резервировать место для типа,
// который будет заменён на конкретный, переданный пользователем,
// при вызове функции или метода, а также при работе с классами.

// описать функцию filter
type filter = <T>(arr: T[], cb: (item: T) => boolean) => T[];

// ======

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

// ====

// generic-и мы используем повсюду:
// Map<string, string>, Set<string>, Array<string>, ...
