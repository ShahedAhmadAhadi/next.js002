import styles from '../styles/Home.module.css'
import Link from 'next/link'
import { useSession } from 'next-auth/client'

function Home() {

    const [session, loading] = useSession()

    return (
        <div className={styles.container}>
            <h1>Home</h1>
            <Link href="/blog">
                <a>Blog</a>
            </Link>
            <Link href="/product">
                <a>product</a>
            </Link>
            <Link href="/posts">
                <a>Posts</a>
            </Link>
        </div>
    )
}

export default Home
