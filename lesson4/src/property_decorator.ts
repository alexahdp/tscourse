class PreferredUser {
  constructor(public email: string) {}

  @retry
  query() {
    return Math.random() > 0.2 ? Promise.reject('error1') : Promise.resolve('ok');
  }
}

function retry(target: object, key: string, descriptor: PropertyDescriptor) {
  const original = descriptor.value;
  descriptor.value = null;
  // descriptor.value = async function retry(...args) {
  //   do {
  //     const [err, value] = await original.apply(target, args)
  //       .then(value => ([null, value]))
  //       .catch(err => ([err]));
  //       if (!err) {
  //         return value;
  //       }
  //   } while(true);
  // }
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
