import {useState} from 'react'
import { useDispatch } from 'react-redux';
import { addTodo } from '../redux/store/todoSlice';
import styles from '../styles/Todos.module.scss'

export default function TodoForm() {
    const [input, setInput] = useState('');
    const dispatch = useDispatch();
    
    const handleChange = e => setInput(e.target.value);
   
    const handleSubmit = e => {
        e.preventDefault();
        dispatch(addTodo({
                id: Math.floor(Math.random() * 10000),
                text: input,   
        }))
        //Reset input text
        setInput('')
    }

    return (
        <form className={styles['todos__form']} onSubmit={handleSubmit}>
            <input 
                onChange={handleChange}
                type="text" 
                placeholder="Add a todo" 
                value={input} 
                name="text" 
                className={styles['todos__input-text']} 
            />
        </form>
    )
}
