import React, {useState} from 'react';

const TaskManager = () => {
    const { tasks, setTasks } = useState([]);
    const { newTask, setNewTask } = useState('');

    return (
       <>  
            <label>{newTask}</label>
            <input type='text' value={newTask} onChange={ (e) => setNewTask(e.target.value)}></input>
            <button onClick={AddTODO}>ADD TODO</button>
       </>
    );
};

export default TaskManager;