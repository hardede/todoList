import { v4 as uuidv4 } from "uuid";
import { autoSave } from "../components/helper/autoSave";
import { ITodo } from "../types/types";
const { makeAutoObservable } = require("mobx");

class Todo {
  todos: ITodo[] = [];
  completedTodos: ITodo[] = [];
  deletedTodos: ITodo[] = [];
  constructor() {
    makeAutoObservable(this);
    autoSave(this, "todoStore");
  }

  addTodo(title: string) {
    const item = {
      id: uuidv4(),
      title,
      isCompleted: false,
      isDeleted: false,
    };
    this.todos.push(item);
  }

  toggleTodo(id: string, title: string) {
    const item = {
      id: uuidv4(),
      title,
      isCompleted: true,
      isDeleted: false,
    };

    const item2 = {
      id: uuidv4(),
      title,
      isCompleted: false,
      isDeleted: false,
    };

    const index = this.todos.findIndex(item => item.id === id);
    const indexCompleted = this.completedTodos.findIndex(
      item => item.id === id
    );
    const indexDeleted = this.deletedTodos.findIndex(item => item.id === id);
    if (index > -1) {
      this.todos[index].isCompleted = !this.todos[index].isCompleted;
      this.todos = this.todos.filter(item => item.id !== id);
      this.completedTodos.push(item);
    } else if (indexCompleted === 0) {
      this.completedTodos[indexCompleted].isCompleted =
        !this.completedTodos[indexCompleted].isCompleted;
      this.completedTodos = this.completedTodos.filter(item => item.id !== id);
      this.todos.push(item2);
    } else {
      this.deletedTodos[indexDeleted].isCompleted =
        !this.deletedTodos[indexDeleted].isCompleted;
      this.deletedTodos = this.deletedTodos.filter(item => item.id !== id);
      this.completedTodos.push(item);
    }
  }

  deletedTodo(id: string, title: string) {
    const item = {
      id: uuidv4(),
      title,
      isCompleted: false,
      isDeleted: true,
    };

    const item2 = {
      id: uuidv4(),
      title,
      isCompleted: false,
      isDeleted: false,
    };

    const index = this.todos.findIndex(item => item.id === id);
    const indexCompleted = this.completedTodos.findIndex(
      item => item.id === id
    );
    const indexDeleted = this.deletedTodos.findIndex(item => item.id === id);
    if (index > -1) {
      this.todos[index].isDeleted = !this.todos[index].isDeleted;
      this.todos = this.todos.filter(item => item.id !== id);
      this.deletedTodos.push(item);
    } else if (indexDeleted === 0) {
      this.deletedTodos[indexDeleted].isDeleted =
        !this.deletedTodos[indexDeleted].isDeleted;
      this.deletedTodos = this.deletedTodos.filter(item => item.id !== id);
      this.todos.push(item2);
    } else {
      this.completedTodos[indexCompleted].isDeleted =
        !this.completedTodos[indexCompleted].isDeleted;
      this.completedTodos = this.completedTodos.filter(item => item.id !== id);
      this.deletedTodos.push(item);
    }
  }

  fullDelete(id: string) {
    this.deletedTodos = this.deletedTodos.filter(item => item.id !== id);
  }

  get statusAll() {
    let all = 0;
    this.todos.forEach(todo => {
      if (todo) {
        all++;
      }
    });
    return { all };
  }
  get statusCompleted() {
    let completed = 0;
    this.completedTodos.forEach(todo => {
      if (todo.isCompleted) {
        completed++;
      }
    });
    return { completed };
  }
  get statusDeleted() {
    let deleted = 0;
    this.deletedTodos.forEach(todo => {
      if (todo.isDeleted) {
        deleted++;
      }
    });
    return { deleted };
  }
}

export default new Todo();
