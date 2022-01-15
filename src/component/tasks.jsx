import Task from "./task";

const Tasks = ({ tasks, onDelete }) => {
    return ( 
        <div className="tasks">
            <h4 style={{color:"brown"}}>Your Tasks</h4>
            {tasks.map((task) => (
                <Task key={task.id} task={ task } onDelete={onDelete}/>
            ))}
        </div>
     );
}
 
export default Tasks;