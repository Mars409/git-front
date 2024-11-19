import { defineStore } from "pinia";
import { ref } from "vue";
interface Todo {
  id: number;
  text: string;
  completed: boolean;
}
//定义Store,使用组合式APi
export const useTodoStore = defineStore(
  "todo",
  () => {
    const todos = ref<Todo[]>([]);
    const addTodo = (todoText: string) => {
      const newTodo: Todo = {
        id: Date.now(),
        text: todoText,
        completed: false,
      };
      todos.value.push(newTodo);
    };
    const removeTodo = (index: number) => {
      todos.value.splice(index, 1);
      //移出第index上的位置，一个
    };
    //切换状态
    const toggleTodo = (index: number) => {
      if (todos.value[index]) {
        todos.value[index].completed = !todos.value[index].completed;
      }
    };
    //返回state中定义的所有的数据和函数

    return {
      todos,
      addTodo,
      removeTodo,
      toggleTodo,
    };
  },
  {
    //persist:true,
    persist: {
      key: "my-todo-store",
      storage: localStorage,
    },
  }
);
