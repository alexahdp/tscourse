# typescript

## Lesson 1

### План занятия
  * для чего нужна была изначально типизация
  * виды типизации
    - статическая (Java, C++) и динамическая типизация (Javascript, Python, PHP)
    - сильная (Haskell, Java, C++, Python) и слабая (Javascript, PHP, Perl)
    - явная (C++, Java, C++) и неявная (Haskell, javascript, Python)
  * преимущества сильной типизации:
    - надежность - ошибки обнаруживаются на этапе компиляции
    - определенность - код становится проще для восприятия и изменения
    - улучшенное взаимодействие с IDE
    - скорость исполнения кода*
  * недостатки:
    - требуется написание большего количества кода
  * скриптовые языки и typescript
  * основная проблема - "повышение надежности"

Итого, когда стоит использовать статическую типизацию:
 - вы разрабатываете большой проект
 - ваш код будет передаваться и дорабатываться другими людьми
 - вы привыкли писать типизированный код

### Typescript (TS)
  * TS - язык, разработанный компанией Microsoft в 2012-ом году  
  * TS компилируется(транспайлится) для исполнения в javascript и является его надмножеством  
  * для компиляции можно использовать tsc или webpack  
  * широкая поддержка IDE (webstorm, idea, visual studio code, sublime, atom, vim, ...)  
  * код на javascript является валидным typescript-кодом. Можно подключать к ts-коду js-библиотеки, модули и использовать их совместно  
  * также существует возможность отделения типов (*.d.ts) от основного кода (актуально для различных библиотек)  
  * [иерархия типов typescript](https://objectcomputing.com/files/2815/7237/9988/1911-sett-img01.png)  
  * ts умеет выводить типы
  * ts не дает стопроцентной гарантии защиты от ошибок (если вы хотите большей надежности - обратитесь к Haskell или Reason)
  * рекомендуемые для использования редактор кода - vscode, также хорошо работает webstorm

### Система типов typescript

1) Примитивные типы:
 - boolean
 - number
 - string
 - bigint
 - symbol
 - null
 - undefined
 - unknown
 - any
 - void
 - never
2) Обработка типов typescript-ом, связь с js-типами
3) Структурная типизация
4) any


### Примеры
 - [Playground](https://www.typescriptlang.org/play?#code/Q)  
 - [определение и выведение простых типов](./examples/example0.ts)  
 - [обнаружение ошибок на этапе статического анализа кода](./examples/example1.ts)  
 - [Типизация функций](./examples/example4.ts)  
 - [Приведение типов - as](./examples/example5.ts)  
 - [Объединение типов](./examples/example2.ts)  
 - [Сужение типов - typeguards - is](./examples/example6.ts)  
 - [Сужение типов - проверка на принадлежность типов через instanceof](./examples/example3.ts)  


### Ссылки
 - https://www.typescriptlang.org/play?#code/Q
 - https://habr.com/ru/post/161205/
 - http://typescript-lang.ru/
 - https://objectcomputing.com/resources/publications/sett/typescript-the-good-parts
 - https://github.com/public-apis/public-apis
