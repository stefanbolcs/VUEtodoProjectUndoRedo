<template>
  <div id="app">
    <!-- <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    <router-view /> -->
    <button value="UNDO" class="normal" @click="makeUndo()">UNDO</button>
    <input v-model="inputTodo.text" placeholder="new todo" />
    <button label="add to TODOlist" class="normal" @click="sendTodo()">
      Add todo
    </button>

    <div v-for="(item, index) in todo.todoList" :key="index">
      <p>
        {{ item.text }}
        <button value="delete todo" class="normal" @click="deleteTodo(item)">
          DELETE
        </button>
      </p>
    </div>
  </div>
</template>

<script>
import Vue from "vue";
import { mapState } from "vuex";

import mixin from "./store/todo/undo";
Vue.use(mixin);

export default {
  data() {
    return {
      inputTodo: {
        id: 0,
        text: "",
        complete: false
      }
    };
  },
  computed: {
    ...mapState(["todo"])
  },

  methods: {
    sendTodo() {
      this.$store.dispatch("someOtherAction", this.inputTodo);
      this.inputTodo = { text: "", complete: false };
    },
    deleteTodo(item) {
      console.log(item);
      this.$store.dispatch("deleteTodoAction", item);
    },
    makeUndo() {
      this.undo();
    }
  }
};
</script>
