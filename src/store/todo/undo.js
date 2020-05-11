const EMPTY_STATE = "deleteAllTodoList";

const mixin = {
  data() {
    return {
      done: []
    };
  },
  created() {
    console.log("this is from a global mixin");
    this.$store.subscribe(mutation => {
      if (mutation.type !== EMPTY_STATE) {
        console.log("mutation saved to done");
        this.done.push(mutation);
      }
    });
  },
  methods: {
    undo() {
      this.done.pop();
      this.$store.dispatch("deleteAllTodoList");
      this.done.forEach(mutation => {
        this.$store.commit(`${mutation.type}`, mutation.payload);
        console.log("in undo");
        this.done.pop();
      });
    }
  }
};

export default {
  install(Vue) {
    Vue.mixin(mixin);
  }
};
