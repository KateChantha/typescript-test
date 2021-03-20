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