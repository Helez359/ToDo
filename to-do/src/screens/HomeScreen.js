import React from 'react'
import ToDoList from '../components/ToDoList'

const HomeScreen = () => {

    const todos = [
        {
            id: 1,
            text: "Go have fun",
        },
        {
            id: 2,
            text: "Eat a grape",
        },
        {
            id: 3,
            text: "Laugh at joke",
        },
    ];


    return (
        <div>
            <h1>MyToDoApp</h1>
            <ToDoList todos = {todos} />
        </div>
    )
}

export default HomeScreen
