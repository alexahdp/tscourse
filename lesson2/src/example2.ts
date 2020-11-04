// Классы

// по-умолчанию все свойства публичные
// инициализация в конструкторе
class User1 {
  name: string;
  email: string;

  constructor(n: string, e: string) {
    this.name = n;
    this.email = e;
  }
}

const user1 = new User1('alex', 'alex@gmail.com');

// ========

// сокращенная инициализация
class User2 {
  constructor(public name: string, public email: string) {}

  sayName() {
    console.log(this.name);
  }
}
const user2 = new User2('alex', 'alex@gmail.com');
user2.sayName();

// ========

// приватные поля
class User3 {
  private password: string;
  #key: string;
  private isActive: boolean;

  constructor(public name: string, private email: string, password: string) {
    this.password = password;
    this.isActive = false;
    this.#key = password;
  }

  login(password: string) {
    return this.isActive && this.password === password;
  }

  protected activate() {
    this.isActive = true;
  } 
}

const user3 = new User3('alex', 'alex@gmail.com', '1234');

if (user3.login('1234')) {
  console.log('success');
}

// typescript заругается, но js отработает
// поскольку js ничего не знает об аннотациях типов ts
console.log(user3.password);

// компиляция не сработает, js оказался невалидным
console.log(user3.#key);

// ========

// inheritance + abstract class
abstract class Parser {
  private redisUrl: string;

  constructor(redisUrl: string) {
    this.redisUrl = redisUrl;
  }

  abstract parse();

  async connect() {
    console.log('connect to ' + this.redisUrl);
  }

  async save() {
    console.log('save data to ' + this.redisUrl);
  }
}

class HtmlParser extends Parser {
  async parse() {
    // get data
    await this.save();
  }
}

const htmlParser = new HtmlParser('localhost'); // ok
const parser = new Parser('localhost'); // error

// ========
// использование абстрактного класса как типа

class ParsingProcessor {
  async process(tasks: {url: string, worker: Parser}[]) {
    for (const task of tasks) {
      await task.worker.connect();
      await task.worker.parse();
      task.worker.save();
    }
  }
}

const parsingProcessor = new ParsingProcessor();
parsingProcessor.process([
  { url: 'avito.ru', worker: htmlParser },
])

// ========
// использование интерфейса класса как типа

interface IParser {
  connect(): Promise<void>;
  parse(): Promise<void>;
  save(): Promise<void>;
}

class XmlParser implements IParser{
  async connect() {}
  async parse() {}
  async save() {}
}

class ParsingProcessor2 {
  async process(tasks: {url: string, worker: IParser}[]) {
    for (const task of tasks) {
      await task.worker.connect();
      await task.worker.parse();
      task.worker.save();
    }
  }
}

const parsingProcessor2 = new XmlParser();
parsingProcessor.process([
  { url: 'avito.ru', worker: htmlParser },
])

// NO: virtuals, overrides
