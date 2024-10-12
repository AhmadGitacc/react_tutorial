import { useState } from "react";

const TodoList = () => {

    //this todo constant is for main the list of tasks being mapped
    const [todo, setTodo] = useState([])
    
    //this newTodo constant is for the new task string("") being added into the todo array
    const [newTodo, setNewTodo] = useState("")

    const handleChange = (event) => {
        setNewTodo(event.target.value)
        console.log(newTodo)
    }
    
    const addTodo = (event) => {
        event.preventDefault()
        if (newTodo !== ""){
            setTodo([...todo, newTodo])

        }else{
            alert("cannot be empty")
        }
        
        setNewTodo("")
    }

    return (
        <div>
            <h1>Todo List</h1>

            <form onSubmit={addTodo}>
                <input type="text" onChange={handleChange} value={newTodo} />
                <br />
                <button type="submit">
                    Add to list
                </button>
            </form>

            <ol>
                <h4>My tasks</h4>
                {todo.map((item, index) => (
                    <li key={index}>{item}</li>
                ))}
            </ol>

        </div>
    );
}

export default TodoList;