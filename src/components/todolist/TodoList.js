import {useState} from "react";
import {Form} from "react-bootstrap";
import TodoForm from "./TodoForm";
import useLocalStorage from "../useLocalStorage";
import { v4 as uuidv4 } from 'uuid';
import button from "bootstrap/js/src/button";

function TodoList() {

    const { getStoredItem, setItemToStorage } = useLocalStorage();
    const [todoList, setTodoList] = useState(getStoredItem('todoText') || []);

    const addTodo = todo => {
        if (!todo.text || /^\s*$/.test(todo.text)) return;

        const newTodoList = [todo, ...todoList]

        setTodoList(newTodoList);
        setItemToStorage(newTodoList, 'todoText');
    }

    const handleUpdate = (newValue, index) => {
        const todoTem = todoList.slice();
        todoTem[index] = newValue;
        setTodoList(todoTem);
        setItemToStorage(todoTem, 'todoText');

    }

    const handleDelete = (event, index) => {
        const todoTemp = todoList.slice();
        todoTemp.splice(index, 1);
        setTodoList(todoTemp);
        setItemToStorage(todoTemp, 'todoText');
    }

    return (
        <div>
            <TodoForm onSubmit={addTodo}></TodoForm>
            {todoList.map((listItem, index) => (
                <TodoLine
                 key={uuidv4()}
                 index={index}
                 listItem={listItem}
                 handleUpdate={handleUpdate}
                 handleDelete={handleDelete}
                />
            ))}
        </div>
    )

}

const TodoLine = ({index, listItem, handleUpdate, handleDelete}) => {

    const [updateTodo, setUpdateTodo] = useState(false);
    const [newValue, setNewValue] = useState(listItem);

    const handleUpdateController = () => {
        handleUpdate(newValue, index);
    }

    const handleChange = (event) => {
        setNewValue({...newValue, text:event.target.value});
    }

    const handleCheck = (event) => {
        handleUpdate({...newValue, checked:true}, index);
    }
    const handleUncheck = (event) => {
        handleUpdate({...newValue, checked:false}, index);
    }

    const truncate = (input) => {
        if (input.length > 20) {
            return input.substring(0, 20) + '...';
        }
        return input;
    }

    return(
        <div className={'todo-container'}>
            {updateTodo ?
                <div className={'todo-row'}>
                    <Form.Control type={'text'} value={newValue.text} onChange={handleChange} className={'todo-input-edit'}/>
                    <div className={'icons'}>
                        <button onClick={handleUpdateController} className={'update-icon'}>
                            <i className="fa-solid fa-check"></i>
                        </button>
                    </div>
                </div> :
            <div className={'todo-row ' + (listItem.checked ? 'uncheck' : '')}>
                <p key={index} name={listItem}>{truncate(listItem.text)}</p>
                <div className={'icons'}>
                    {!listItem.checked ? <button onClick={handleCheck} className={'check-icon'}>
                        <i className="fa-solid fa-check fa-xl"></i>
                    </button>
                    :  <button onClick={handleUncheck} className={'uncheck-icon'}>
                            <i className="fa-solid fa-xmark fa-xl"></i>
                        </button>
                    }
                    <button onClick={(e)=>setUpdateTodo(true)} className={'edit-icon'}>
                        <i className="fa-solid fa-pen"></i>
                    </button>
                    <button onClick={event => {handleDelete(event, index)}} className={'delete-icon'}>
                        <i className="fa-solid fa-trash"></i>
                    </button>
                </div>
            </div>}
        </div>
    )
}

export default TodoList;