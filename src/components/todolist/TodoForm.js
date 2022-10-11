import {Button, Form} from "react-bootstrap";
import {useState} from "react";

function TodoForm(props) {

    const [todo, setTodo] = useState('');

    const handleChange = (event) => {
        setTodo(event.target.value);
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        props.onSubmit({
           text: todo
        })
        setTodo('');
    }

    return(
    <Form onSubmit={handleSubmit}>
        <Form.Group className={"todo-form"}>
            <Form.Control type={"text"} value={todo} onChange={handleChange} className={'todo-input'}></Form.Control>
            <Button variant={"primary"} type={"submit"} className={'todo-button'}>Add</Button>
        </Form.Group>
    </Form>
    )

}

export default TodoForm;