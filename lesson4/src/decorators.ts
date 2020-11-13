@Decor
class User1 {
  age: number;

  // @log()
  login() {
    console.log('login');
    let o = {};
    for (let i = 0; i < 1000000; i++) {
      const k = Math.random() * 1000;
      o[k] = k;
    }
  }
}

// function log() {
//   return function (
//     target: unknown,
//     propKey: string,
//     descriptor: PropertyDescriptor
//   ) {
//     console.log('decorator');
//     console.log(descriptor)
//     const fn = target[propKey];
//     fn.bind(target);
//     Object.defineProperty(target, propKey, {
//       get: function(...args) {
//         console.log('call decorated function');
//         const start = Date.now();
//         console.log(`${propKey} called`);
//         fn(...args);
//         const end = Date.now();
//         console.log(`evaluation time: ${end - start}`);
//       }
//     });
//   };
// }

// =========


// function Min() {
//   return function (
//     target: unknown,
//     propKey: string,
//     descriptor: PropertyDescriptor
//   ) {
//     const start = Date.now();
//     console.log(`${propKey} called`);
//     target[propKey]();
//     const end = Date.now();
//     console.log(`evaluation time: ${end - start}`);
//   };
// }

function Decor(entity) {
  console.log('===')
  console.log(entity);
  console.log(entity.name);
}

// const u = new User();
// console.log(u.login)
// u.login();