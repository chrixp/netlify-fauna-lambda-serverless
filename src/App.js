import { useEffect, useState } from 'react'
import logo from './logo.svg';
import './App.css';

function createTodo(data) {
    return fetch('/.netlify/functions/todos-create', {
      body: JSON.stringify(data),
      method: 'POST'
    }).then(response => {
      return response.json()
    })
}

const myTodo = {
    title: 'My todo title',
    completed: false,
  }
  
function App() {
  const [title, setTitle] = useState("")
  const [completed, setCompleted] = useState(false)


  const onSubmit = () => {
    createTodo({
        title,
        completed
    }).then((response) => {
        console.log('API response', response)
        // set app state
      }).catch((error) => {
        console.log('API error', error)
      })
  }

  return (
    <div className="App">
        <input type="text" value={title} onChange={(e) => setTitle(e.target.value)}></input>
        <input type="checkbox" checked={completed} onClick={() => setCompleted(!completed)} />
        <button onClick={onSubmit}>Add To Do</button>
    </div>
  );
}

export default App;
