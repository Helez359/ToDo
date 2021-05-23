import React, {useState} from 'react'
import {Container, Form, Button} from 'react-bootstrap'
import db from '../firebase'

const AddToDo = ({history}) => {

    const [newTodo, setNewTodo] = useState("");

    const addToDoHandler = (e) => {
        e.preventDefault();
        console.log(newTodo);
        db.collection("todos").add({
            todo:newTodo,
        });
        history.push("/");
    };

    return (
        <div>
            <h1 className="my-S"> Add A ToDo</h1>
            <Container>
                <Form onSubmit={addToDoHandler}>
                    <Form.Group>
                        <Form.Label>Add ToDo</Form.Label>
                        <Form.Control
                        type="text"
                        placeholder = "Enter ToDo"
                        value={newTodo}
                        onChange={(e) => setNewTodo(e.target.value)}
                        >
                        </Form.Control>
                    </Form.Group>
                    <Button type="submit" vairant="info" block>ADD</Button>
                </Form>
            </Container>
        </div>
    )
}

export default AddToDo
