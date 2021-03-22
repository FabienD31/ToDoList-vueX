<template>
  <div id="app" class="container p-5">
    <h4>Ajouter une todo</h4>
    <hr class="my-4" />
    <div class="d-flex mb-4">
      <input v-model="todo" type="text" class="form-control mr-5" />
      <button
        @click="addTodo({ name: todo, done: false })"
        class="btn btn-danger"
      >
        <!--paramettre addTodo qui correspond au payload pour la version raccourcis-->
        Ajouter
      </button>
    </div>
    <div class="card">
      <div class="card-header d-flex flex-row justify-content-between">
        <span>Todo list</span><span>{{ todosLength }}</span>
      </div>
      <div class="card-body">
        <ul class="list-group">
          <li
            @click="toggleTodo(index)"
            v-for="(todo, index) in todos"
            :key="todo.name"
            class="list-group-item d-flex flex-row justify-content-between align-items-center list-group-item-action"
          >
            <span>{{ todo.name }}</span>
            <span>
              <input :checked="todo.done" class="mx-3" type="checkbox" />
              <button @click="deleteTodo(index)" class="btn btn-sm btn-danger">
                delete
              </button>
            </span>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
import { mapState } from "vuex"; //Pour utiliser le state en version raccourci
import { mapGetters } from "vuex"; // Pour utiliser les getters en version raccourcis
import { mapMutations } from "vuex"; // Pour utiliser les mutations en version raccourcis
export default {
  name: "app",
  data() {
    return {
      todo: "",
    };
  },
  //Version complete store + getter
  // computed: {
  //   todos() {
  //     return this.$store.state.todos;
  //   },
  //   todosLength() {
  //     return this.$store.getters.todosLenght;
  //   },
  // },
  //version raccourci d'utilisation du store + getters
  computed: {
    ...mapState(["todos"]),
    ...mapGetters(["todosLength"]),
  },

  //Version complete mutation
  // methods: {
  //   addTodo() {
  //     this.$store.commit("addTodo", { name: this.todo, done: false });
  //   },
  //   toggleTodo(index) {
  //     this.$store.commit("toggleTodo", index);
  //   },
  //   deleteTodo(index) {
  //     this.$store.commit("deleteTodo", index);
  //   },
  // },
  //Version raccourcis mutation
  methods: {
    ...mapMutations(["addTodo", "toogleTodo", "deleteTodo"]),
  },
};
</script>
