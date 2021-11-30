import { getSession } from "next-auth/client"

function Blog({data}) {
    return <h1>Blog page - {data}</h1>
}

export default Blog

export async function getServerSideProps(context) {
    const session = await getSession(context)
    return {
        props: {
            session,
            data: session ? 'List of data': 'No auths'
        }
    }
}