import { Task } from "./Task";

type ListTask = {
  listTasks: string[];
  deleteTask: (index: number) => void;
}

export const ListTask = ({ listTasks, deleteTask }: ListTask) => {
  return (
    <div className="tasklist">
      {listTasks.map((task, index) => (
        <Task 
          key={index} 
          task={task}
          deleteTask={()=> deleteTask(index)}
         />  
        
      ))}
      {listTasks.length === 0 && <p>No hay tareas pendientes</p>}
    </div>
  )
}