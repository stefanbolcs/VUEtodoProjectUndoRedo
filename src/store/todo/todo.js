import Vue from "vue";
import Vuex from "vuex";
import * as types from "./mutation_types";

Vue.use(Vuex);

const todo = {
  state: {
    todoList: []
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
      console.log(state.todoList);
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
        console.log("in loop");
        console.log(state.todoList[i]);
        if (state.todoList[i].text === todoToBeDeleted.text) {
          console.log("found deleted");
          commit(types.REMOVE_TODO, i);
          break;
        }
      }
    }
  }
};

export default todo;
