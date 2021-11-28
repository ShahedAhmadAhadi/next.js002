function Post({post}) {
    return (
        <>
            <h2>{post.id} {post.title}</h2>
            <p>{post.body}</p>
        </>
    )
}

export default Post

export function getStaticPaths() {

}

export async function getStaticProps(context) {
    const { params } = context
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${params.postId}`)
    const data = response.json()

    return {
        props: {
            post: data
        }
    }
}