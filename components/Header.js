import Link from 'next/link'
import Image from 'next/image'
import styles from '../styles/Header.module.scss'

export default function Header() {
 
    return (
        <header className={styles.header}>
            <div className={styles.header__title}>
                <h1>TODO LIST</h1>
            </div>
        </header>
    )
}
