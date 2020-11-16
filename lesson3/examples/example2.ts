// написать функцию сортировки массива объектов по заданному ключу
// (использование keyof)

type Point = {
  x: number;
  y: number;
}

// сперва реализуем функцию, которая способна сортировать только наш конкретный тип
function sortByKey1(vals: Point[], key: keyof Point): Point[] {
  return vals.sort((v1, v2) => v1[key] > v2[key] ? 1 : -1);
}

// а теперь сделаем нашу функцию более универсальной
function sortByKey2<K extends keyof T, T>(vals: T[], key: K): T[] {
  return vals.sort((v1, v2) => v1[key] > v2[key] ? 1 : -1);
}

const points: Point[] = [
  { x: 0, y: 0},
  { x: 0, y: 1},
];

sortByKey2(points, 'x'); // ok
sortByKey2(points, 'y'); // ok
sortByKey2(points, Math.random() > 0.5 ? 'x' : 'y'); // ok
sortByKey2(points, 'z'); // error
