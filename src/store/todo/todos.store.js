export default {
  state: {
    todos: [
    {
      name: 'eat pizza',
      done: false
    },
    {
      name: 'work',
      done: false,
    }
  ]
  },
  getters: {
    todosLength(state) {
      return state.todos.length;
    }
  },
  mutations: {
    addTodo(state, payload) {
      state.todos = [...state.todos, payload ];
    },
    toggleTodo(state, payload) {
      state.todos[payload].done = !state.todos[payload].done
    },
    deleteTodo(state, payload) {
      state.todos.splice(payload, 1)
    }
  },    //les actions permettent de faire des mutations asynchrones avec des promesses pas présent dans l'exemple ci-dessous.
  actions: {
    asyncAddTodo(context, payload) {
      setTimeout(() => {
        context.commit('addTodo', payload);
      },3000)
    }
  }
}