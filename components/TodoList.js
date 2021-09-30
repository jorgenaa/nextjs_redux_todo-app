import { useSelector } from 'react-redux';
import TodoForm from './TodoForm'
import TodoItem from './Todo'
import styles from '../styles/Todos.module.scss'

export default function TodoList() {  
    const todos = useSelector((state) => state.todos)
 
    const completedTodos = useSelector((state) => 
        state.todos.filter((todo) => todo.complete === true)
        );

    return (
        <div className={styles.todos}>
            <TodoForm />
            {todos.map((todo, index) => (
                <TodoItem
                    key={index}
                    id={todo.id}
                    text={todo.text}
                    complete={todo.complete}
                /> 
            ))} 
            <div className={styles.todos__bottomList}>
                <h4>Total Completed Todos: {completedTodos.length}</h4>  
            </div>
        </div>
    )
}



