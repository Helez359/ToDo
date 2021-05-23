import React from 'react'
import ToDo from './ToDo';
import {Container, Row, Col} from "react-bootstrap"

const ToDoList = ({todos}) => {


    return (
        <div className="my-5">

            <Container>
                <Row>
                    <Col>
                        {todos.map((todo) => (
                            <ToDo todo={todo} />
                        ))}

                    </Col>
                </Row>
            </Container>

        </div>
    )
}

export default ToDoList
