const entityMap = new Map<string, unknown>();

function Injectable(entitiId: string) {
  return function(entity: unknown) {
    if (entityMap.has(entitiId)) {
      throw new Error(`Entity with id: ${entitiId} alredy declared`);
    }
    entityMap.set(entitiId, entity);
  }
}

@Injectable('Post')
class Post {
  constructor(
    public userId: string,
    public title: string
  ) {}
}

const post = new Post('1', 'First post');
const PostEntity = entityMap.get('Post');
console.log(Post === PostEntity);

// 

// TODO композиция декораторов