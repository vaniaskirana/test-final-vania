import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeTodo,handleCheckbox } from "../../redux/actions";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { 
    faPen, faTrashCan
   } from '@fortawesome/free-solid-svg-icons' // <-- import styles to be used


export const Todos = ({handleUpdateClick, updateFormVisibility}) => {
    const dispatch = useDispatch();

    const todos = useSelector((state) => state.operationsReducers)
    // console.log(todos)


    //  const api_urlForm = 'https://63846d1b4ce192ac6056da24.mockapi.io/forum'
    // const [formApi, setFormApi] = useState([])

    // useEffect(() => {
    //     axios(api_urlForm).then (result => {
    //         console.log(result.data)
    //         setFormApi(result.data)
    //     })
    // }, [])
    
    return todos.map((todo) => (
    <div className="appear">
        <div key={todo.id} className='col'>
        <div className='col'>
            {updateFormVisibility === false && (
            
                <input title='Completed / Not Completed' type="checkbox" checked={todo.completed}
                onChange={() => dispatch(handleCheckbox(todo.id))}></input>
            )}
            <p style={todo.completed===true?{textDecoration:'line-through'}:{textDecoration:'none'}}>
                {todo.todo}
            </p>
        </div>

        
        <div className='actions-box iconWrap'>
            {updateFormVisibility === false && (
                <>
                    <span title='Edit' onClick={() => handleUpdateClick(todo)}><FontAwesomeIcon icon={faPen}/></span>
                    <span  title='Delete' onClick={() => dispatch(removeTodo(todo.id))}> <FontAwesomeIcon icon={faTrashCan}/> </span>
                </>
            )}
            
        </div>
    </div>
    </div>
    ))
}