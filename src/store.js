import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const store = new Vuex.Store({
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
  }
});

export default store;