// === 1 ===
let name: string = 'Alex';
name = 100; // error

let sum = 100; //  тип выводится автоматически


// простановка автоматически выводимых типов в таких простых случаях -
// признак начинающего разработчика на ts


// === 2 ===
let city = 'new york city';
console.log(city.toUppercase()); // error, toUppercase


// === 3 ===
const countries = [
  {name: 'Russia', capital: 'Moscow'},
  {name: 'Gonduras', capital: 'Tegucigalpa'},
];
for (const country of countries) {
  console.log(country.capitol); // error
}


// === 8 ===
// never - пустой тип, которому не может быть присвоено значение и он не содержит значений
// (более подробно будет рассмотрен позднее)
function error(message: string): never {
  throw new Error(message);
}
// бесконечные циклы
// рекурсии
