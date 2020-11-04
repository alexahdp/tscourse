// Интерфейсы и типы: небольшие отличия и особеноости работы

type Person1 = {
  firstName: string;
  lastName: string;
}

interface Person {
  firstName: string;
  lastName: string;
}

// расширять можно как интерфейсы, так и типы
// interface Candidate extends Person1 {
interface Candidate extends Person {
  salary: number;
}

// ======

type Boss = {
  department: string;
}

// интерефейс не может расширять union-type
type Head = Person1 | Boss;
interface Candidate extends Head {
}

// =======

// имплементировать можно как типы, так и классы
// class User1 implements Person1 {
class User implements Person {
  firstName = 'asd';
  lastName: 'df';
}

class User2 implements Person {
  firstName = 'asd';
  lastName: 'df';
}

// нельзя создать интефейс, который будет вырадать объединение или пересечение типов

// =======

// также декларации интерфейсов имеют свойство объединяться
interface Company {
  name: string;
}

interface Company {
  country: string;
}

const leroy: Company = {
  name: 'Leroy Merlin',
  country: 'Russia',
};

// эту особенность можно использовать для того, чтобы доопределять
// атрибуты и методы у глобальных объектов (document) в процессе миграции
// со старой кодовой базы
