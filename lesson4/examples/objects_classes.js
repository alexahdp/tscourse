// 1. Как определяются классы и методы классов в javascript
class Cat {
  meow() {
    console.log('meow');
  }
}
console.log(typeof Cat); // function

// такой класс можно выразить на старом синтаксисе javacript в виде:

function  Cat2() {}
Object.defineProperty(Cat2.prototype, 'meow', {
  value: function() { console.log('meow')},
  enumerable: false,
  configurable: true,
  writable: true,
});

const photon = new Cat2();
photon.meow(); // 'meow

// стоит обратить внимание на Object.defineProperty
// он позволяет определяеть свойства и методы объектов и конфигурировать их видимость, настраиваемость, ...

// Задача: а что если мы хотим модифицировать поведение метода meow?
// например, мы бы хотели запретить его изменение (writable)?

// Proposal Иегуды Кац

// таким образом, то, что мы хотим выразить через декораторы будет выглядеть следующим образом:

class Cat3 {
  @readonly
  meow() { console.log('meow'); }
}

// обратить внимание: здесь мы ожидаем, что исполняющая среда javascript (v8)
// сама вызовет функцию readonly и передаст ей в качестве параметров
// target - класс
// key - название декорируемого свойства
// descriptor - объект с конфигурацией свойства
function readonly(target, key, descriptor) {
  descriptor.writable = false;
  return descriptor;
}

// Итак, мы познакомились с идеей лежащей в основе декораторов в javascript
// текущий propposal и текущее положение дел
