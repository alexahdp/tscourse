// А теперь рассмотрим property-decorator
// Для этого придумаем себе довольно синтетическую задачу:
// пусть у нас есть некоторая функция, которая с большой вероятностью отвечает ошибками
// и мы хотим, чтобы наш декоратор скрывал от нас эти ошибки, многократно вызывая функцию,
// пока она успешно не выполнится

class PreferredUser {
  constructor(public email: string) {}

  @retry
  query() {
    return Math.random() > 0.2 ? Promise.reject('error1') : Promise.resolve('ok');
  }
}

function retry(target: object, key: string, descriptor: PropertyDescriptor) {
  const original = descriptor.value;
  descriptor.value = async function retry(...args) {
    do {
      const [err, value] = await original.apply(target, args)
        .then(value => ([null, value]))
        .catch(err => ([err]));
        if (!err) {
          return value;
        }
    } while(true);
  }
}

(async () => {
  const user = new PreferredUser('alex@mail.ru');
  const res = await user.query();
  console.log(res);
})()
  .catch(err => {
    console.log('fatal error');
    console.log(err);
  })
