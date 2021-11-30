import styles from '../styles/Home.module.css'
import Link from 'next/link'
import { useSession } from 'next-auth/client'

function Home() {

    const [session, loading] = useSession()
    console.log(session, loading)

    return (
        <div className={styles.container}>
            {session && <h2 style={{textAlign: 'right'}}>`{session.user.name}`</h2>}
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
