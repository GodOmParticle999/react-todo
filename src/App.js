
import './App.css';
import TodoForm from './components/TodoForm';
import Header from './components/Header';
import TodoList from './components/TodoList';
import { useState } from 'react';
const getTodos=()=>{
  const List=localStorage.getItem("todoLists");
  if(List){
    return JSON.parse(List)
  }else{
    return []
  }
}
function App() {
  const [input,setInput]=useState("");
  const [todos,setTodos]=useState(getTodos());
  const [toggleSubmit,setToggleSubmit]=useState(true);
  // const [cssClassAdd,setCssClassAdd]=useState(false);
  const [editId,setEditId]=useState(null);
  return (
    <div className='parentContainer'>
    <Header todos={todos}/>
    <TodoForm  editId={editId} setEditId={setEditId} setToggleSubmit={setToggleSubmit} toggleSubmit={toggleSubmit} input={input} setInput={setInput} todos={todos} setTodos={setTodos}/>
    <TodoList setEditId={setEditId} editId={editId} setToggleSubmit={setToggleSubmit} toggleSubmit={toggleSubmit} setInput={setInput} todos={todos} setTodos={setTodos}/>
    </div>
  )
}

export default App;
