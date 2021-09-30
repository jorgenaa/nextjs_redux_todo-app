import Head from 'next/head';
import Header from './Header';
import Footer from './Footer';
import styles from '../styles/Layout.module.scss'

export default function Layout({title, keywords, description, children}) {
    return (
        <div className={styles.stickyContainer}>
            <Head>
                <title>{title}</title>
                <meta name="description" content={description} />
                <meta name="keywords" content={keywords} />
            </Head>
            <Header />
            <div className={styles.wrapper}>
                {children}
            </div>
            <Footer />
        </div>
    )
}

Layout.defaultProps = {
    title: "Welcome to My Todo List",
    descriptions: "Schedule your day with the todo app",
    keywords: "Todo list",
}