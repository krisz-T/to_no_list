import { useState } from 'react'
import './App.scss'
import Title from "./components/Title.tsx"

function App() {

  const [tasks, setTasks] : any = useState([])
  const [newTask, setNewTask] : any = useState()

  function addClick() {
    if (newTask.trim() !== "") {
      setTasks((t : any) => [...t, newTask.trim()]);
      setNewTask("");
    }
  }

  function upClick(index : number) {

    if(index > 0) {
      const updatedTasks : any = [...tasks]

      let temp = updatedTasks[index]
      updatedTasks[index] = updatedTasks[index - 1]
      updatedTasks[index - 1] = temp

      setTasks(updatedTasks)
    }

  }

  function downClick(index : number) {

    if(index < (tasks.length - 1)) {
      const updatedTasks : any = [...tasks]

      let temp = updatedTasks[index]
      updatedTasks[index] = updatedTasks[index + 1]
      updatedTasks[index + 1] = temp
      
      setTasks(updatedTasks)
    }

  }

  function delClick(index : number) {

    const updatedTasks : any = tasks.filter((_element : any, idx : number) => idx !== index)
    setTasks(updatedTasks)

  }

  return (
   
    <>
      <Title/>

      <div className='form'>
        <input className='task_input' value={newTask} placeholder="Don't" onChange={(e) => setNewTask(e.target.value)} minLength={1} maxLength={30}></input>
        <button className='add_button' onClick={addClick}>Add</button>
      </div>

      <ol className='task_list'>
        {tasks.map((task : string, index : number) => 
          <li key={index} className='task_list_item'>
              <span className='task_item_text'>Don't {task}</span>
              <button className='up_button' onClick={() => upClick(index)}>↑</button>
              <button className='down_button' onClick={() => downClick(index)}>↓</button>
              <button className='del_button' onClick={() => delClick(index)}>❌</button>
          </li>
        )}
      </ol>
    </>

  )
}

export default App
