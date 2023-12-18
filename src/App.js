import logo from './logo.svg';
import './App.css';
import './style.css'
import { useState,React } from 'react';
import { MyContext } from './MyContext';
import MyComponent from "./MyComponent";


function App() {
  const [text,setText]=useState("");

  return (
    <div>
      <MyContext.Provider value={{text,setText}}>
        <MyComponent/>
      </MyContext.Provider>
    </div>
  );
}

export default App;
