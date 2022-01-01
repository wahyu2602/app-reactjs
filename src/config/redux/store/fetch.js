import axios from 'axios';

export async function fetchTodos(dispatch, getState) {
  const response = await axios.get('http://localhost:3000/prod')
  console.log(response.data);
  dispatch({ type: 'todos/todosLoaded', payload: response.data })
}