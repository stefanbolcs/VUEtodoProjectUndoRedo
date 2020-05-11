import Vue from "vue";
import Vuex from "vuex";
import todo from "./todo/todo";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    myVal: null
  },
  mutations: {
    emptyState() {
      // this.replaceState({myval:null});
      console.log("empty state called");
    }
  },
  actions: {
    someOtherAction({ dispatch }, newTodo) {
      dispatch("insertNewTodo", newTodo);
    },
    deleteTodoAction({ dispatch }, todoToBeDeleted) {
      dispatch("deleteTodo", todoToBeDeleted);
    },
    deleteAllTodoList({ dispatch }) {
      dispatch("deleteAll");
    }
  },
  modules: {
    todo
  }
});
