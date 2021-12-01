import { getSession, session, useSession } from "next-auth/client"

function Blog({data}) {
    const [status, loading] = useSession()
    return <h1>Blog page - {data}</h1>
}

export default Blog

export async function getServerSideProps(context) {
    const session = await getSession(context)
    if (!session) {
        return {
            redirect: {
                destination: `api/auth/signin?callbackUrl=http://localhost:3000/blog`,
                permanent: false
            }
        }
    }

    return {
        props: {
            session,
            data: session ? 'List of data': 'No auths'
        }
    }
}