import axios from 'axios'

const url = 'https://jsonplaceholder.typicode.com/todos/5'

interface Todo {
  userId: number,
  title: string,
  completed: boolean,
  id: number,
}

axios.get(url).then(response => {
  // console.log(response.data)
  const todo:Todo = response.data
  
  // benefit of autocomplete
  const id = todo.id
  const title = todo.title
  // conpleted property name
  console.log({id, title})
})

// ====================================
// Udemy TypeScript section 26
// ====================================
const url2 = "https://jsonplaceholder.typicode.com/todos/1";

interface Todo {
  id: number;
  title: string;
  completed: boolean;
}

axios.get(url2).then(response => {
  const todo = response.data as Todo; // define with interface
  const {id, title, completed} = todo;

  // typescript give error  warning of incorrect order of arguments
  logTodo(id, completed, title) 
})

const logTodo =(id:number, title:string, completed: boolean) => {
  console.log("")
}
