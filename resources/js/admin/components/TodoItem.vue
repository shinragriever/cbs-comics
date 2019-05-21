<template>
  <div class="todo-item">
    <div class="todo-item-left">{{todo.title}}</div>
    <!-- end todo-item-left -->
  </div>
  <!-- end todo-item -->
</template>
<script>
export default {
  name: "todo-item",
  props: {
    todo: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      id: this.todo.id,
      title: this.todo.title,
      completed: this.todo.completed,
      editing: this.todo.editing,
      beforeEditCache: ""
    };
  },
  methods: {}
};
