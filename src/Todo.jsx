import { useState , useEffect} from "react";
import Navbar from "./Navbar";



function Todo(){

    const [task, setTask]= useState("")
    const [tasks, setTasks] = useState([]);

    const addTask =()=>{
        setTasks([...tasks,
            {
                id: Date.now(),
                title:task,
                status:"To Do"
            },
        ])

        setTask("")
    }

    const changeStatus=(id, newStatus)=>{
        const updatedTasks = tasks.map((task)=>{
            if(task.id===id){
                return{
                    ...task,
                    status: newStatus,
                };
            }

            return task
        })

         setTasks(updatedTasks);
    }
    return(
        <>
        <Navbar/>
        <div className="sidebar">
           
          <div className="content">
            <div className="e2">
                <h1>To Do list</h1>
                <input type= "text" placeholder="Enter task" value={task} onChange={(e) => setTask(e.target.value)}></input>
                <button onClick={addTask}> Add Task</button>
                {tasks.map((task)=>
                <div className="e1" key={task.id}>
                    <h3>{task.title}</h3>
                    
                    <select value={task.status} onChange={(e)=> changeStatus(task.id,e.target.value)}>

                     <option value="To Do">To Do</option>
                     <option value="In Progress">In Progress</option>
                     <option value="Completed">Completed</option>
                    </select>  

                    <p> Status: {task.status}</p>
                </div>
                    )}
            </div>
          </div>

        </div>
        
        </>
    )
}

export default Todo
