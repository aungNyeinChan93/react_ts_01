import React, { useState, type FormEvent } from 'react';

interface Todo {
    id: number,
    task: string,
    isComplete: boolean
}

const Todo = () => {
    const [todos, setTodos] = useState<Todo[]>([]);

    const [task, setTask] = useState<string>('');

    const addTodo = (e: FormEvent) => {
        e.preventDefault();
        const newTodo: Todo = {
            id: todos.length + 1,
            task,
            isComplete: false
        };

        setTodos(pre => [...pre, newTodo]);
        setTask('')
    }
    return (
        <React.Fragment>
            <section>
                <form onSubmit={addTodo}>
                    <input title='name' type="text" name='task' value={task} onChange={(e) => setTask(e.target.value)} />
                    <button type='submit'>Add Todo</button>
                </form>
                <ul>
                    {todos?.map(todo => {
                        return <li key={todo.id}> {todo.task}</li>
                    })}
                </ul>
            </section>
        </React.Fragment>
    );
};

export default Todo;