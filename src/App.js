import { useState } from "react";
import AddTask from "./component/addTask";
import Header from "./component/header";
import Tasks from "./component/tasks";


function App() {
  const [showAddTask, setShowAddTask] = useState(false)
  const [tasks, setTasks] = useState([
    {
      id:1,
      name:'Task 1',
      day:'24 Sept',
      reminder: true
    },
    {
      id:2,
      name:'Task 2',
      day:'4 Dec',
      reminder: true
    },
    {
      id:3,
      name:'Task 3',
      day:'2 Nov',
      reminder: false
    }
  ])

  const deleteTask = (id) => {
    setTasks(
      tasks.filter(
          (task) => task.id !== id
        )
      )
    }

  const addTask = (task) => {
    const id = Math.floor(Math.random()*1000) + 1
    const newTask = { id, ...task }
    setTasks([...tasks, newTask])
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
