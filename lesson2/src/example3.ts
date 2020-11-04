// структурная типизация

interface Vector {
  x: number;
  y: number;
}

interface NamedVector {
  name: string;
  x: number;
  y: number;
}

const getLength = (v: Vector) => Math.sqrt(v.x^2 + v.y^2);

const normalize = (v: Vector) => {
  const len = getLength(v);
  return { x: v.x / len, y: v.y / len };
}

const beamVector: NamedVector = {
  name: 'sun',
  x: 0,
  y: 0,
};
normalize(beamVector);


// === 6 ===
// ОШИБКА!!!
interface Vector3D {
  x: number;
  y: number;
  z: number;
}
const normalize3D = (v: Vector3D) => {
  const len = getLength(v);
  return { x: v.x / len, y: v.y / len, z: v.z / len };
}

// следует заметить, что по причине того, что ts имеет структурную типизацию и не запрещает передачу
// дополнительных свойств, возникает масса проблем с Object.keys(), Object.values()

// =======
// маркировка типов

interface Vector2D {
  _brand: 'v2';
  x: number;
  y: number;
}

function vec2D(x: number, y: number): Vector2D {
  return { x, y, _brand: 'v2'};
}

function calcLen(v: Vector2D): number {
  return Math.sqrt(v.x ** 2 + v.y ** 2);
}

calcLen({x: 20, y: 10}); // error
calcLen(vec2D(20, 10)); // ok


// ====
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
