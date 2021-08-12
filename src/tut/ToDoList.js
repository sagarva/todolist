import React, { useState } from 'react'

function ToDoList() {
    const [task, setTask] = useState();
    const [toDoList, setToDoList] = useState([]);


    const handleSubmit = (e) => {
        e.preventDefault();  //this is used to prevent default behaviour of our browser
        if (task) {
            console.log("Submit the Value");

            const toDo = { id: new Date().getTime().toString(), task };
            console.log(toDo);
            setToDoList((toDoList) => {
                return [...toDoList, toDo]

            });
            setTask("");
        }
    }
    const removeEvent = (id) => {
        let eventList = toDoList.filter(toDo => toDo.id !== id)
        setToDoList(eventList)
    }


    return (
        <>
            <h2>To Do List</h2>
            <article>
                <form className="form" onSubmit={handleSubmit}>
                    <div className="form-control">
                        <label htmlFor="task">Task :</label>
                        <input type="text" id="task" name="task" value={task} onChange={(e) => setTask(e.target.value)}></input>
                    </ div>
                    <button type="submit" >Add</button>
                </form>

                {toDoList.map((toDo) => {
                    const { id, task } = toDo;
                    return (
                        <div className='item' key={toDo.id}>
                            <h4>{task}</h4>
                            <button type='button' onClick={() => removeEvent(toDo.id)}>Done</button>

                        </div>
                    );
                })}






            </article>







        </>
    )
}

export default ToDoList
