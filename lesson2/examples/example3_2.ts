// использование брэндированных типов для строк
type AbsolutePath = string & {_brand: 'abs'};

function isAbsolutePath(path: string): path is AbsolutePath {
  return path.startsWith('/');
}

function listAbsolutePath(path: AbsolutePath) {
  // ...
}

function main() {
  const p = '/dev/null';
  listAbsolutePath(p); // error
  
  if (isAbsolutePath(p)) {
    listAbsolutePath(p); // ok
  }
}

// брэндированные типы стоит использовать для гарантии того, чтобы сделать тип более конкретным
// например, если функция принимает только сортированный массив, то для
// того, чтобы исключить ситуацию, когда ей будет передан несортированный массив, можно
// использовать брэндированный тип

// также можно брэндировать числовые типы для гарантии единиц измерения
// тут стоит вспомнить об ошибке на миллионы долларов из-за ошибки в коде, когда один модуль
// считал температуру в цельсиях, а другой в фаренгейтах
type Meters = number & {_brand: 'meters'};
type Seconds = number & {_brand: 'seconds'};

const meters = (m: number) => m as Meters;
const seconds = (s: number) => s as Seconds;

const oneKm = meters(1000); // тип is Meters
const oneMin = seconds(60); // тип is Seconds
