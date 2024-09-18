import { useState } from 'react'
import './App.css'

function App() {
  const [tasks,setTask]=useState([{
    id:1,
    name:'Task 1',
    description:'Description 1'
  },
  {
    id:2,
    name:'Task 2',
    description:'Description 2'
  },
  {
    id:3,
    name:'Task 3',
    description:'Description 3'
  }
  ]);
  function addTask(){
    setTask([...tasks,{
      id:tasks.length+1,
      name:'Task '+ (tasks.length+1),
      description:'Description '+ (tasks.length+1)
    }])
  }
  return (
    <div>
      <button onClick={addTask}>Add task</button>
      {tasks.map((task)=>{
        return(
          <Task key={task.id} name={task.name} description={task.description}/>
        )
      })}
      <br></br>
    </div>
  )
}

function Task(props){
  return(
    <div >
    <button>
      {props.name}
      <br></br>
      {props.description}
    </button>
    </div>
  )
}
export default App
