<template>
  <div id="app">
    <!-- <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    <router-view /> -->
    <input v-model="inputTodo.text" placeholder="new todo" />
    <button label="add to TODOlist" class="normal" @click="sendTodo()" />

    <h1 v-for="(item, index) in todo.todoList" :key="index">{{ item }}</h1>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  data() {
    return {
      inputTodo: {
        text: ""
      }
    };
  },
  computed: {
    ...mapState(["todo"])
  },
  props: {},
  methods: {
    sendTodo() {
      console.log(this.inputTodo.text);
      this.$store.dispatch("someOtherAction", this.inputTodo.text);
    }
  }
};
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
