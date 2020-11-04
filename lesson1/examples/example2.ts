// === 1 ===
// объединение типов
const successStatus = 'success';
type Status = 'success' | 'fail';

const doOperation = (data: string): Status => {
  console.log(data);
  // ...
  return 'success';
};
const result: Status = doOperation('hello');
