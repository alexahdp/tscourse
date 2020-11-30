// Изменим нашу предыдущую задачу:
// теперь мы хотим ограничить количество попыток, в течение которых наш декоратор
// может повторно пытаться вызывать функцию, которая выбрасывает ошибки

class PreferredUser {
  constructor(public email: string) {}

  @retry(20)
  query() {
    return Math.random() > 0.1 ? Promise.reject('error1') : Promise.resolve('ok');
  }
}

function retry(limit: number) {
  return function retry(target: object, key: string, descriptor: PropertyDescriptor) {
    const original = descriptor.value;
    descriptor.value = async function(...args) {
      let counter = 0;
      do {
        const [err, value] = await original.apply(target, args)
          .then(value => ([null, value]))
          .catch(err => ([err]));
          if (!err) {
            return value;
          }
          counter++;
          if (counter > limit) {
            throw err;
          }
      } while(true);
    }
  }
}

(async () => {
  const user = new PreferredUser('alex@mail.ru');
  const res = await user.query()
  console.log(res);
})()
  .catch(err => {
    console.log('fatal error');
    console.log(err);
  })
