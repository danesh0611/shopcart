import logo from './logo.svg';
import './App.css';
import {useState} from 'react'

function App() {
  const[value,setValue]=useState(20)
  const increment = () => {
    setValue(value + 1);
  };
  function decrement() {
    setValue(value - 1);
  }

  return (
    <>
    <div >
      {value}
    </div>
    <button onClick={increment}>increment</button>
    <button onClick={decrement}>decrement</button>
    </>
  );
}

export default App;
