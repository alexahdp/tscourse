// ReturnType

// Проблема: action-creator в redux возвращает некоторый объект
// мы не хотим описывать этот объект где-то отдельно, это увеличивает количество boilerplate-кода
// вместо этого мы хотим переиспользовать существующий код и типы

type State = {
  collection: {
    [k: string]: {
      username: string;
      created: Date;
      info: string;
    };
  };
};

// сначала без const
export const CREATE_USER = 'CREATE_USER' as const;
export const createUser = (username: string, created: Date) => ({
  // обратить внимание, здесь без const будет тип string
  type: CREATE_USER,
  payload: { username, created },
});

export const UPDATE_USER = 'UPDATE_USER' as const;
export const updateUser = (username: string, info: string) => ({
  type: UPDATE_USER,
  payload: { username, info },
});

// воспользуемся utility-типом ReturnType
export type userActionType =
  ReturnType<typeof createUser> |
  ReturnType<typeof updateUser>;

const reducer = (state: State, action: userActionType): State => {
  switch(action.type) {
    case CREATE_USER: {
      return {
        ...state,
        collection: {
          ...state.collection,
          [action.payload.username]: {
            ...state.collection[action.payload.username],
            username: action.payload.username,
            created: action.payload.created,
          }
        }
      };
    }
    case UPDATE_USER: {
      return {
        ...state,
        collection: {
          ...state.collection,
          [action.payload.username]: {
            ...state.collection[action.payload.username],
            username: action.payload.username,
            info: action.payload.info,
          }
        }
      };
    }
  }
}