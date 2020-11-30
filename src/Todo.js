import React from 'react';

function Todo({task, updateTodo, delTodo, id}) {
    
    function handleDel() {
        delTodo(id);
    };

    return (
        <div >
            <li>{task}</li>
            <button onClick={handleDel}>X</button>
        </div>
    )
}

export default Todo;