
// проверка возвращаемых типов
function isObject(user: { name: string }): boolean {
  return typeof user; // error
} 


// === 5 ===
function getUser(name: string)/*: string*/ {
  return { name };
}
const newUser: string = getUser('alex');


// === 6 ===
const log1 = (msg: string): void => {
  console.log(msg);
}