import { useState } from "react"
import { ListTask } from "./ListTask"


export const ListaPendiente = () => {
  const [newTask, setNewTask] = useState<string>('')
  const [ListTasks, setListTasks] = useState<string[]>([])


  const handleAddTask = () => {
    if (newTask.trim() === '') return;
    setListTasks(tareasAnteriores => [...tareasAnteriores, newTask])
   
    setNewTask('')  
  }

  const handleDeleteTask = (index: number) => {
    const newListTasks = task=>task.filter((_, i) => i !== index)
    setListTasks(newListTasks)
  }

  return (
    <div>
      <h1>Lista Pendiente</h1>
      <div className="flex">
        <input
          type="text"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)} 
          placeholder="Escribe una nueva tarea"
        />

        <button onClick={ handleAddTask }>Agregar</button>
      </div>

      <ListTask 
        listTasks={ListTasks}
        deleteTask={handleDeleteTask}
      />
      
    </div>
  )
}