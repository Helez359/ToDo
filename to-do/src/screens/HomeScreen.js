import React, {useEffect, useState} from 'react'
import ToDoList from '../components/ToDoList'
import db from '../firebase'
import {Link} from 'react-router-dom'
import {Button} from 'react-bootstrap'


const HomeScreen = () => {

    const [todos, setTodos] = useState([]);

    useEffect(()=>{
        db.collection("todos").onSnapshot((snapshot)=>{
            setTodos(
                snapshot.docs.map((doc)=>({
                    id: doc.id,
                    text: doc.data().todo,
                }))
            );
        });
    }, []);


    return (
        <div>
            <h1 className="my-5">MyToDoApp</h1>
            <Link to="/addtodo">
                <Button variant="info">Add New ToDo</Button>
            </Link>
            <ToDoList todos = {todos} />
        </div>
    )
}

export default HomeScreen
