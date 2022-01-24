import { useState,useEffect } from "react";
import AddTask from "./component/addTask";
import Header from "./component/header";
import Tasks from "./component/tasks";


function App() {
  const [showAddTask, setShowAddTask] = useState(false)
  const [tasks, setTasks] = useState([])

  useEffect(()=>{
    const getTasks  = async () => {
      const taskFromServer = await fetchTask()
      setTasks(taskFromServer)
    }  
    getTasks()
  },[])

  const fetchTask = async () => {
    const res = await fetch('http://localhost:5000/tasks')
    const data = await res.json()
    return data
  }

  const deleteTask = async (id) => {
    await fetch(`http://localhost:5000/tasks/${id}`,{
      method:'DELETE'
    })

    setTasks(
      tasks.filter(
          (task) => task.id !== id
        )
      )
    }

  const addTask = async (task) => {
    const res = await fetch(`http://localhost:5000/tasks`,{
      method:'POST',
      headers:{
        'Content-type':'application/json'
      },
      body: JSON.stringify(task)
    })
    const data = await res.json()
    setTasks([...tasks, data])


    // const id = Math.floor(Math.random()*1000) + 1
    // const newTask = { id, ...task }
    // setTasks([...tasks, newTask])
  }

  return (
    <div className="App">
      <Header title={'Task Schedular'} onAdd={()=>setShowAddTask(!showAddTask)} showAdd={showAddTask}/>
      {showAddTask && <AddTask onAddTask={addTask}/>}
     {tasks.length > 0 ? <Tasks tasks={tasks} onDelete={deleteTask}/> : <div style={{color:"brown"}}>No Task to Show</div> }
    </div>
  );
}

export default App;
