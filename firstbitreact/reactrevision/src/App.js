import logo from './logo.svg';
import './App.css';
import Lifecycle from './components/lifecycle';
import Classvsfunction from './classvsfunction';
import Display from './components/display';
import Home from './components/home';
import {BrowserRouter,Routes,Route, Router} from 'react-router-dom'
import Details from './components/details';
import Addnew from './components/addnew';
import { useCallback, useState ,useRef} from 'react';
import Todo from './components/todo';
import Egcomponent from './components/egcomponent';
function App() {

  const [count,setCount]=useState(0)
  const [todos,setTodo]=useState([])
  const inputElement=useRef();
  const increment=()=>{
    setCount(c=>c+1)
  }
  const addTodo = useCallback(()=>{
    setTodo(t=>[...t,"new task"])
  },[todos])

  const focusinput=()=>{
    inputElement.current.focus();
  }
  return (
    <div className="App">
      {/* <Classvsfunction name="shubham" topic="MEAN/MERN"/> */}
      {/* <Lifecycle name='smita'/> */}
      {/* <Display score="100"/> */}
   


    <Routes>  

      <Route path='/' element={<Home/>}/>
      <Route path='/details/:id' element={<Details/>}/>

      </Routes>
<Egcomponent/>
   {/* <Todo todos={todos} addTodo={addTodo}/>
   <button onClick={increment}> + </button>

    <input type='text' ref={inputElement}></input>
    <button onClick={focusinput}> focus on the current input field</button> */}

    </div>
  );
}

export default App;
