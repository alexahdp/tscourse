// Generics
// Обобщённый тип (обобщение, дженерик) позволяет резервировать место для типа,
// который будет заменён на конкретный, переданный пользователем,
// при вызове функции или метода, а также при работе с классами.


type Filter = <T>(arr: T[], cb: (item: T) => boolean) => T[];

// ======

// По возможности старайтесь использовать более конкретные типы, чем string
// еще один пример типизации generic-ов
// плохо
function pluck1(record: any[], key: string): any[] {
  return record.map(r => r[key]);
}
// хорошо
function pluck2<T>(record: T[], key: keyof T) {
  return record.map(r => r[key]);
}
