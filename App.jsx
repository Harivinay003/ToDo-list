import React from 'react'
import { useState } from 'react'
const App = () => {
  const [title, settitle] = useState("")
  const [description, setdescription] = useState("")
  const [mainTask, setmainTask] = useState([])
  const submithandler=(e)=> {
     e.preventDefault();
    if(title.trim() === "")
    {
      alert("Please Enter a task");
      return;
    }
   
    setmainTask([...mainTask,{title,description}])
    


    setdescription("")
    settitle("")
  }

  let renderTask= <h1>No Task Available</h1>
  if (mainTask.length>0) {
    
  
  renderTask=mainTask.map((t,i)=>{
    return <li key={i} className='flex items-center justify-between mb-5 '>
      <div className='flex justify-between w-2/3'>
      <h5 className='text-2x1 font-semibold'>{t.title}</h5>
      <h6 className='text-lg'>{t.description}</h6>
      </div>
    <button className='bg-red-400 text-white px-4 py-2 font-bold rounded' onClick={(i)=>{deleteHandler(i)}}>Delete</button>
    </li>
  })
}

  const deleteHandler= (i)=>{
    let copyTask=[...mainTask]
    copyTask.splice(i,1)
    setmainTask(copyTask)

  }
  return (
    <>
      <h1 className='bg-blue-800 text-8x1 text-center font-bold p-9 text-white'>My ToDo list</h1>

      <form action="" className='flex justify-center' onSubmit={submithandler}>
        <input type="text" className='border-zinc-600 text-xl border-2 m-5 px-4 py-2' id="" placeholder='Enter the title..' value={title} onChange={(e)=> {settitle(e.target.value)}} />
        <input type="text" className='border-zinc-600 text-xl border-2 m-5 px-4 py-2' id="" placeholder='Enter the description...' value={description} onChange={(e)=> {setdescription(e.target.value)}} /> <br />
        
        <button className='bg-black text-white px-4 py-2 text-2x1 font-bold rounded border-2 m-5 border-grey'>Add Task</button>
        
        
        </form>  

        

        <div className='p-8 bg-slate-400'>
          <ul>{renderTask}</ul>
          </div> 

    </>
  )
}

export default App
