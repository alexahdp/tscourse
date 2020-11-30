// Немного изменим задачу
// Теперь при помещении класса в IOC-container мы хотим задавать ключ, по которому
// эту сущность можно будет потом достать

// создадим для этого отдельный каталог DI
// описать класс Post
// описать функцию Injectable
// описать функцию Fabric

import { Injectable, Fabric1 } from './DI';

@Injectable('Post')
class Post {
  constructor(public name: string = '') {}

  setName(name: string) {
    this.name = name;
  }

  getName() {
    return this.name;
  }
}

const post = Fabric1<Post>('Post');
post.setName('main');
console.log(post.getName());
