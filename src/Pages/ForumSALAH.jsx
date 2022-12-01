import 'bootstrap/dist/css/bootstrap.min.css'
import { useState } from 'react';
import { Form } from '../Components/Forum/Form';
import { Todos } from '../Components/Forum/Todos';
import '../Components/Forum/Forum.css'
import Navbar from '../Components/Navbar';
// import { Todos } from '../Components/Forum/Todos';
// import { useSelector } from 'react-redux';

function Forum() {
  const [updateFormVisibility, setupdateFormVisibility] = useState(false)
  
  const [editTodo, setEditTodo] = useState('')
  
  const handleUpdateClick = (todo) => {
    setupdateFormVisibility(true)
    setEditTodo(todo)
  }


  const cancelUpdate = () => {
    setupdateFormVisibility(false);
  }

  return (
    <>
    <Navbar/>
      <div className='wrapper text-center formutama dataBg'>
        <br/>
        <h1 className='text-center'>Todo-App</h1>
        {/* <img src="/img/reduxIco.png" width={300} /> */}
        <Form updateFormVisibility={updateFormVisibility} editTodo={editTodo} cancelUpdate={cancelUpdate}/>
        <Todos handleUpdateClick={handleUpdateClick} updateFormVisibility={updateFormVisibility}/>
      </div>  
    </>
  );
}

export default Forum;
