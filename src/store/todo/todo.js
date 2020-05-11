import Vue from "vue";
import Vuex from "vuex";
import * as types from "./mutation_types";

Vue.use(Vuex);

const todo = {
  state: {
    todoList: []
  },
  getters: {},
  mutations: {
    [types.ADD_TODO](state, todo) {
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
    },
    deleteTodo({ commit, state }, todoToBeDeleted) {
      for (let i = 0; i < state.todoList.length; i++) {
        if (state.todoList[i].text === todoToBeDeleted.text) {
          commit(types.REMOVE_TODO, i);
          break;
        }
      }
    },
    deleteAll({ state }) {
      for (let i = 0; i < state.todoList.length; i++) {
        Vue.delete(state.todoList, i);
      }
    }
  }
};

export default todo;
