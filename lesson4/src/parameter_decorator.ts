import 'reflect-metadata';

class User {
  @Reflect.metadata('name', 'value')
  hello() {
    console.log('hello');
  }
}
const user = new User();
user.hello()
console.log(Reflect.getMetadata('name', user, 'hello'));
