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

const parsingProcessor2 = new ParsingProcessor2();
parsingProcessor.process([
  { url: 'avito.ru', worker: new XmlParser() },
])

// NO: virtuals, overrides
