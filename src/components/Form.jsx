import styles from './form.module.css'

import { useState } from "react";

export default function Form({todos ,setTodos}) {
    //const [todo, setTodo] = useState("");

    const [todo, setTodo] = useState(
      {name:'',
       done: false})
      

       
    function handleSubmit(e) {
        e.preventDefault();
        setTodos([...todos, todo]);
        setTodo( {name:'', done: false});
      }
    
    return (

        <form className={styles.todoform
        } onSubmit={handleSubmit}>
          <div className={styles.inputContainer}>
        <input placeholder='Enter todo item'
        className={styles.modernInput}
          onChange={(e) => setTodo({name:e.target.value, done: false})}
          value={todo.name}
          type="text"
        />
        <button className={styles.modernButton}
         type="submit"> add </button>
         </div>
      </form>
      
      

    )
}