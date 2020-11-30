import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import NewTodoForm from './NewTodoForm';
import Todo from './Todo';

function TodoList() {
    const dispatch = useDispatch();
    const todos = useSelector(s => s.todos);

    function handleCreate(task) {
        dispatch({
            type: "ADD_TODO",
            task
        });
    }

    function handleDel(id) {
        dispatch({
            type: "REMOVE_TODO",
            id
        })
    }

    const todoList = todos.map(todo => (
        <Todo
        delTodo={handleDel}
        id={todo.id}
        key={todo.id}
        task={todo.task}
        />
    ));

    return (
        <div>
            <NewTodoForm createTodo={handleCreate} />
            <p>butts</p>
            <ul>{todoList}</ul>
        </div>
    )
}

export default TodoList;