import styles from '../styles/Home.module.css'
import Link from 'next/link'


function Home() {
    return (
        <div className={styles.container}>
            <h1>Home</h1>
            <Link href="/blog">
                <a>Blog</a>
            </Link>
            <Link href="/product">
                <a>product</a>
            </Link>
        </div>
    )
}

export default Home
