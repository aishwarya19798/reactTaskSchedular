import { useState } from "react";

const AddTask = ({onAddTask}) => {

    const [name, setName] = useState('')
    const [day, setDay] = useState('')
    const [reminder, setReminder] = useState(false)

    const onSubmit = (e) => {
        e.preventDefault()

        if(!name){
            alert('Please add task')
            return
        }

        onAddTask({ name,day,reminder })

        setName('')
        setDay('')
        setReminder(false)
    }

    return ( 
        <div className="addTask">
            <form onSubmit={onSubmit}>
                <h4>Add your Task</h4>
                <div>
                    <label> Title </label>
                    <input type="text" value={name} onChange={(e)=>setName(e.target.value)}/>
                </div>
                <div>
                    <label> Day </label>
                    <input type="text" value={day} onChange={(e)=>setDay(e.target.value)}/>
                </div>
                <div>
                    <label> Reminder </label>
                    <input type="checkbox" checked={reminder} value={reminder} onChange={(e)=>setReminder(e.target.checked)}/>
                </div>
                <div className="submitBtn">
                    <input className="btn" style={{fontSize:"13px"}} type="submit" value="Submit" />
                </div>
            </form>
        </div>
     );
}
 
export default AddTask;