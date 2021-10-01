import { useDispatch } from 'react-redux'
import Image from 'next/image'
import iconCross from '../public/images/icon-cross.svg'
import iconCheck from '../public/images/icon-check.svg'
import styles from '../styles/Todos.module.scss'
import { toggleComplete, deleteTodo } from '../redux/store/todoSlice'

export default function Todo({id, text, complete}) {
    const dispatch = useDispatch(toggleComplete)
   
    const handleCompleteClick = () => {
        dispatch(toggleComplete({id: id, complete: !complete}))
    }

    const handleDeleteTodo = () => {
        dispatch(deleteTodo({id: id}))
    }

    return (
        <>
            <div className={styles['todos__todo']}>
                <div className={styles['todos__icon-label']} title='Complete todo'>
                    <label htmlFor={id} className={styles['todos__label']}>
                        <Image src={iconCheck} alt='icon' />  
                    </label>
                    <input type="checkbox" onChange={handleCompleteClick} checked={complete} id={id} className={styles.todos__input} />
                </div>
             
                
                <p className={complete ? styles['todos__text--complete'] : styles['todos__text']}>{text}</p> 
                <div className={styles.todos__icons}>
                    <div className={styles['todos__icon-cross']} title='Remove todo'>
                        <Image src={iconCross} alt='icon' onClick={handleDeleteTodo} />
                    </div>
                </div>
            </div>
        </>
    )
}

