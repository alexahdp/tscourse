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

// использование абстрактного класса

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