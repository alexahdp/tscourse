import "reflect-metadata";

const entityMap = new Map<string, ClassRef<any>>();
const readyForInject = new Map<string, ClassRef<any>>();
const diMetadataKey = Symbol("diMetadataKey");

type ClassRef<T extends FunctionConstructor> = new (...args: ConstructorParameters<T>) => T;
type DIMetadataItem = {
  parameterIndex: number,
  value: string
};

export const getDependency = (depname: string) => {
  if (entityMap.has(depname)) {
    return entityMap.get(depname);
  }
  
}

export const Fabric1 = <T>(depname: string): T => {
  if (entityMap.has(depname)) {
    const Entity = entityMap.get(depname);
    return new Entity();
  }
  throw new Error(`No dependency with name ${depname}`);
}


// декоратор: пометить класс как встраиваемый
export function Injectable(entitiId: string) {
  return function(entity) {
    if (entityMap.has(entitiId)) {
      throw new Error(`Entity with id: ${entitiId} alredy declared`);
    }
    entityMap.set(entitiId, entity);
  }
}


// декоратор: заинжектить в будщем зависимость в конструктор класса
export function Inject(value) {
  return (
    target: Object,
    propertyKey: string | symbol,
    parameterIndex: number
  ) => {
    Reflect.defineMetadata(
      diMetadataKey,
      [{parameterIndex, value}],
      target,
      propertyKey
    );
  };
}

// IOC-фабрика
// создает экземпляры объектов
export const Fabric = (depname: string) => {
  if (readyForInject.has(depname)) {
    return readyForInject.get(depname);
  }
  
  // получаем класс экземпляр которого необходимо создать
  const EntityClass = entityMap.get(depname);

  // получаем список его зависимостей
  const constructorParams: DIMetadataItem[] = Reflect.getMetadata(
    diMetadataKey,
    EntityClass
  ) || [];

  // преобразуем зависимости в экземпляры класса
  const values = [];
  for (let i = 0; i < EntityClass.constructor.length; i++) {
    let paramValue = constructorParams.find(param => param.parameterIndex === i);
    if (!paramValue) {
      continue
    }
    const injectable = Fabric(paramValue.value);
    if (!injectable) {
      throw new Error(`Dependency ${paramValue.value} is not found`);
    }
    values.push(injectable);
  }

  // создаем экземпляр нашего класса
  const entity = new EntityClass(...values);
  
  // кэшируем его для повторного использования
  readyForInject.set(depname, entity);
  
  return entity;
}
