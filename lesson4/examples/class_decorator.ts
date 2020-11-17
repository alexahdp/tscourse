const entities = new Map<unknown, unknown>();

function Entity(entity) {
  if (entities.has(entity.name)) {
    throw new Error(`Class with name ${entity.name} already declared`);
  }
  entities.set(entity.name, entity);
}

@Entity
class User {
  constructor(
    public email: string,
    public password: string,
  ) {}
}

const user = new User('alex@mail.com', '12345');
const UserClass = entities.get('User');
console.log(UserClass === User);
