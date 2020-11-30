// Рассмотри что собой представляют декораторы класса
// Для этого мы напишем упрощенный вариант DI, который будет показывать как
// с помощью декоратора можно помещать классы в IOC-container


type ClassRef<T> = new (...args: any[]) => T;
export const entitiesMap = new Map<string, ClassRef<any>>();

function Entity(entity: ClassRef<any>) {
  if (entitiesMap.has(entity.name)) {
    throw new Error(`Class with name ${entity.name} already declared`);
  }
  entitiesMap.set(entity.name, entity);
}

@Entity
export class User {
  constructor(
    public email: string,
    public name: string,
  ) {}

  hello() {
    console.log(`hello, I am ${this.name}`);
  }
}

const UserClass = entitiesMap.get('User') as ClassRef<User>;
const user = new UserClass('alex@gmail.com', 'alex');
user.hello();
console.log(UserClass === User);
