# typescript

ts-node -O '{"experimentalDecorators": true, "target": "es2015"}' lesson4/src/class_decorator.ts

## Lesson 4

### План занятие
 - Проблема: модификация поведения методов и свойств классов  
 - [Proposal Иегуды Кац о декораторах](https://github.com/wycats/javascript-decorators)  
 - [Текущее состояние Proposal-а о декораторах](https://github.com/tc39/proposal-decorators)  
 - Декораторы очень полезны в том случае, если вы хотите подмешать в функцию дополнительное поведение, при этом не изменяя ее исходный код
 - где применяются декораторы?
   - Mobx
   - nestjs
   - inversifyjs
   - ...


### Примеры
 - [База для декораторов на javascript](./examples/object_classes.js)  
 - [Class decorator](./examples/class_decorator.ts)  
 - [Class decorator factory](./examples/class_decorator_factory.ts)  
 - [Property decorator](./examples/property_decorator.ts)  
 - [Property decorator factory](./examples/class_decorator_factory.ts)  
 - [Reflect и Reflect-metadata]
 - [Parameter decorator](./examples/parameter_decorator.ts)  

### Links
 - [decorators proposal](https://github.com/tc39/proposal-decorators)  
 - [Reflect proposal](https://rbuckton.github.io/reflect-metadata)  
 - [https://habr.com/ru/post/277021/](https://habr.com/ru/post/277021/)  
 - [core-decorators](https://github.com/jayphelps/core-decorators)  