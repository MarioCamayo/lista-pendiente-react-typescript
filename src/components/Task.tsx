
type Task = {
  task: string;
  deleteTask: (index: number) => void;
  index: number;

}

export const Task = ({task, deleteTask, index}: Task) => {
  return (
    <div className="task">
       <span>{task}</span>
       <button onClick={() => deleteTask(index)}>Eliminar</button>
    </div>
  )
}