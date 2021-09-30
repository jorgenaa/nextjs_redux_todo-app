import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.scss'
import Layout from '../components/Layout'
import TodoList from '../components/TodoList'


export default function Home() {
  return (
    <Layout>
      <TodoList />
    </Layout>
  )
}
