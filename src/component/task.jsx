const Task = ({task,onDelete}) => {
    return ( 
        <div className="task">
            <div>
                <h4>{task.name}</h4>
                <p>{task.day}</p>
            </div>
            <div>
                <button className="cancel" onClick={() => onDelete(task.id)}>X</button>
            </div>
        </div>
     );
}
 
export default Task;
