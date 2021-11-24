import Draft from "../Component/Draft"
import HomeImg from '../images/Home.jpg'
import { useNavigate } from "react-router"
import { useState } from "react";

export default function Home() {
    const navigate = useNavigate();
    const routPage = () => {
        navigate("/projects")
    }
    //// --------------------- Todo App -------------------- ////
    let [todo, setTodo] = useState('');
    let [arr, setArr] = useState(['Namaz','Lunch','picnic']);
    // -------- add todo ------//
    const addTodo = (e) => {
        todo !== '' ?
        setArr([todo, ...arr]) 
        :
        alert('Enter something')
    }
    // ----------- delete all ----------------- //
    const delTodo = () => {
        setArr([])
    }
    // ----------- edit todo --------------- //
    const deleteTodo = (e) =>{
        e.remove()
    }
    //------------ DELETE AN ITEM -----------//
    const editTodo = (e) => {
      let editText = prompt('Enter edit text');
      editText !== '' ?
      e.firstChild.replaceWith(editText):
      alert('enter something')
    }
    return (
        <>
            <div>
                <Draft heading="Hi... " intro="I'm a Shabana"
                    brand='Web Developer' imgsrc={HomeImg}
                    btnName='My Work' onClick={routPage} />

            </div>
            <div className="container-fluid mt-5">
                <div className="row d-flex justify-content-center">
                    <div className="col-lg-8">
                        <header className="bg-primary text-light p-5 text-center">
                           <h1> Todo App </h1>
                        </header>
                        <div className='d-flex justify-content-center m-5'>
                            <input type="text" placeholder="Enter Todo" 
                            className='w-75 text-center' onChange={(e) => setTodo(e.target.value)} />
                            <button onClick={addTodo} className='btn btn-primary p-2' >Add</button>
                            <button onClick={delTodo} className='btn btn-primary p-2'>Delete</button>
                        </div>
                        <hr />
                        <div>
                            {
                                arr.map((e, i) => {
                                    return <div key={i} id={i} className='text-center list m-4 d-flex justify-content-around'>
                                        <h6>{e}</h6>
                                        <i className="far fa-edit fa-2x text-primary" onClick={(e) => editTodo(e.target.parentNode)}></i>
                                        <i className="far fa-trash-alt fa-2x text-primary" onClick={(e) => deleteTodo(e.target.parentNode)}></i>
                                        
                                    </div>
                                })
                            }
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}
