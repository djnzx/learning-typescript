export interface Action {
  type: symbol | string;
  payload?: any;
}

export interface Reducer<T> {
  (state: T, action: Action): T;
}

export interface CallbackFn {
  (): void
}

export class Store<T> {
  private state: T;
  private listeners: Array<CallbackFn> = [];

  constructor(
    private reducer: Reducer<T>,
    initialState: T
  ) {
    this.state = initialState;
  }

  getState(): T {
    return this.state;
  }

  dispatch(action: Action): void {
    this.state = this.reducer(this.state, action);
    this.listeners.forEach((listener: CallbackFn) => listener());
  }

  subscribe(listener: CallbackFn): CallbackFn {
    this.listeners.push(listener);
    return () => this.listeners.filter(l => l !== listener);
  }

}

export interface Todo {
  id: string,
  todo: string;
  isComplete: boolean;
}

export interface TodoState {
  todos: Array<Todo>;
}

export const initialState: TodoState = { todos: [] };

export enum TodoActionEnum {
  AddTodo = '[todos] add todo',
  RemoveTodo = '[todos] remove todo',
  ToggleTodo = '[todos] toggle todo'
}

export class AddTodoAction implements Action {

  readonly type = TodoActionEnum.AddTodo;
  payload: Todo = {
    id: '',
    todo: '',
    isComplete: false
  };

  constructor(payload: Partial<Todo>) {
    this.payload = { ...this.payload, ...payload };
  }
}

export class RemoveTodoAction implements Action {
  readonly type = TodoActionEnum.RemoveTodo;
  constructor(public payload: { id: string }) { }
}

export class ToggleTodoAction implements Action {

  readonly type = TodoActionEnum.ToggleTodo;

  constructor(public payload: { id: string }) { }
}

export type TodoAction = AddTodoAction | RemoveTodoAction | ToggleTodoAction;

export const todoReducer: Reducer<TodoState> = (
  state: TodoState = initialState,
  action: TodoAction
): TodoState => {
  switch (action.type) {
    case TodoActionEnum.AddTodo: {
      return {
        todos: [
          ...state.todos,
          (<AddTodoAction>action).payload
        ]
      };
    }

    case TodoActionEnum.RemoveTodo: {
      return {
        todos: state.todos.filter(({ id }) => id !== (<RemoveTodoAction>action).payload.id)
      };
    }

    case TodoActionEnum.ToggleTodo: {
      return {
        todos: state.todos.map(
          todo => {
            return (<ToggleTodoAction>action).payload.id === todo.id ?
              ({
                ...todo,
                isComplete: !todo.isComplete
              }) :
              todo;
          }
        )
      };
    }

    default:
      return state;
  }
}

const todoStore: Store<TodoState> = new Store<TodoState>(todoReducer, initialState);

// todoStore.subscribe(() => {
//   const { todos } = todoStore.getState();
//   todoListElem.innerHTML = !!todos.length ?
//     todos.map(
//       ({ id, todo, isComplete }) => {
//         return `<li id="${id}" class="${isComplete ? 'strike-out' : ''}">
//                           ${todo} | <a id="${id}" href="javascript:void(0)">delete</a>
//                         </li>`;
//       }
//     ).join('') : `<li>No todos found</li>`;
// });

// // listener to handle todo removal and toggle
// todoListElem.addEventListener('click', ({ target }: MouseEvent) => {
//   const elem = target as HTMLElement;
//   switch (elem.tagName.toLowerCase()) {
//     case 'li': {
//       const id = elem.getAttribute('id');
//       // action dispatched to the store
//       todoStore.dispatch(new ToggleTodoAction({ id }));
//       break;
//     }
//     case 'a': {
//       const id = elem.getAttribute('id');
//       // action dispatched to the store
//       todoStore.dispatch(new RemoveTodoAction({ id }));
//       break;
//     }
//   }
//   return;
// }, false);

// addButtonElem.addEventListener('click', (e) => {
//   const text = todoInputElem.value.trim();
//   if (text) {
//     const todo: Partial<Todo> = {
//       id: nanoid(), // external third party api to produce unique id
//       todo: text
//     };
//     // action dispatched to the store
//     todoStore.dispatch(new AddTodoAction(todo));
//     todoInputElem.value = '';
//   }
//   return;
// });
