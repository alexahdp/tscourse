import 'reflect-metadata';

// давайте попробуем посмотреть что же нам нового позволяет делать объект Reflect

const target = {
  name: 'alex',
};

Reflect.defineMetadata('version', 1, target);
Reflect.defineMetadata('info', {description: 'some long description'}, target);
Reflect.defineMetadata('name.info', {description: 'name description'}, target, 'name');

console.log(Reflect.getMetadata('version', target));
console.log(Reflect.getMetadata('info', target));
console.log(Reflect.getMetadata('name.info', target, 'name'));

// как видим, все добавленные нами свойства отсутствуют в исходном объекте
// в спецификации они должны храниться в низкоуровневом свойстве metadata
// но reflect-metadata на текущий момент использует для хранения WeakMap
console.log(target);
console.log(Object.getOwnPropertySymbols(target));
console.log(Reflect.getPrototypeOf(target));

// ====

// посмотреть в ts-playground:
class User {
  @log
  login(name: string, password: string) {
      console.log(name, password);
  }
}

function log(targt: any, key: any) {
  console.log(Reflect.getMetadata('design-type', targt, key));
}