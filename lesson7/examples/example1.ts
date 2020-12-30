infer - позволяет вывести тип из контекста

type Numbers = number[];
const a: Numbers = [1, 2, 3];

type ArrayItemType<T> = T extends Array<infer U> ? U : T;

const b: ArrayItemType<Numbers> = 10;

с помощью infer мы можем вывести utility-type ReturnValue:
  type GetReturnType<F> = F extends (...args: never[]) => infer U ? U : never;

  type GetParameters<P> = P extends (...args: infer T) => unknown ? T : never;

Как получить из одного типа объекта другой тип объекта, исключив из него часть ключей?
  type newUserType<U> = {
    [K in keyof U as Exclude<K, 'kind'>]: U[K]
  }

