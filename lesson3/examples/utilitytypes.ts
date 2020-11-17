// Partial

// опишем наш entity-object
type User = {
  username: string;
  firstName: string;
  lastName: string;
  email: string;
}

// плохой вариант
type UserUpdateDto = {
  username?: string;
  firstName?: string;
  lastName?: string;
  email?: string;
}

// здесь userDto все поля у dto объекта могут как присутствовать,
// так и отсутствовать
const updateUser = (userDto: Partial<User>) => {
  const s = userDto.email.search('s'); // error
  console.log(userDto);
  // ...
};

// =========================
// Readonly

type Order = {
  sum: number;
  product: string;
  userId: string;
}

const order: Readonly<Order> = {
  sum: 100,
  product: 'Сосиски',
  userId: '007',
};

order.product = 'Колбаса';

// =========================
// Pick

type Order = {
  sum: number;
  product: string;
  userId: string;
}

type OrderShort = Pick<Order, 'product' | 'userId'>;

const shortOrder: OrderShort = {
  product: 'Whiskas',
  userId: 'Photon',
};

// =========================
// Omit

type User2 = {
  firstName: string;
  lastName: string;
  password: string;
}

type PublicUser = Omit<User2, 'password'>;

const publicUser: PublicUser = {
  firstName: 'alex',
  lastName: 'ivanov',
};
