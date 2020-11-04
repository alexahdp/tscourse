// keyof

interface Point {
  x: number;
  y: number;
}

function sortByKey<K extends keyof T, T>(vals: T[], key: K): T[] {
  return vals.sort();
}

const points: Point[] = [
  { x: 0, y: 0},
  { x: 0, y: 1},
];

sortByKey(points, 'x'); // ok
sortByKey(points, 'y'); // ok
sortByKey(points, Math.random() > 0.5 ? 'x' : 'y'); // ok
sortByKey(points, 'z'); // error
  
// ====

// more complex typings

type Exact<T> = {
  [P in keyof T]: T[P];
}

interface User {
  email: string;
}

const log = (u: Exact<User>) => {
  console.log(u);
}

log({ email: "dsfdsf" });
log({ email: "dsfdsf", name: "dsd" });