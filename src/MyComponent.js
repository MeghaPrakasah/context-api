import { useContext } from "react";
import { MyContext } from "./MyContext";
import './style.css';

function MyComponent(){
    const {text,setText}=useContext(MyContext);
    return(
        <div>
            <h1>{text}</h1>
            <button onClick={() => setText('hello,World!')}> click me </button>
        </div>
    );
}

export default MyComponent;