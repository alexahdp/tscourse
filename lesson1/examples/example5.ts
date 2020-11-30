// приведение типов через as

type User = {
  name: string;
}
const user = JSON.parse('{ "name": "alex" }') as User;

// интерполяция значений типов
type v = 'top' | 'left';
type w = 'top' | 'left';
type wv = `${v}-${w}`;

const d: wv = 'top-top';