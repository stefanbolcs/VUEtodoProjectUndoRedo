import Vue from "vue";
import Vuex from "vuex";
import * as types from "./mutation_types";

Vue.use(Vuex);

const todo = {
  state: {
    todoList: ["istvan"]
  },
  getters: {
    getAllTodoList(state) {
      return state.todoList;
    }
  },
  mutations: {
    [types.ADD_TODO](state, todo) {
      console.log("before push");
      state.todoList.push(todo);
    },
    [types.SET_STATE](state, { index, complete }) {
      state.todoList[index].complete = complete;
    },
    [types.REMOVE_TODO](state, index) {
      Vue.delete(state.todoList, index);
    }
  },
  actions: {
    insertNewTodo({ commit }, newTodo) {
      commit(types.ADD_TODO, newTodo);
    }
  }
};

export default todo;
