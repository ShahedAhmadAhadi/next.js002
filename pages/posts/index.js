function PostList({ posts }) {
    return (
        <div>
            <h1>List of Posts</h1>
            {posts.map(post => {
                return (
                    <div key={post.id}>
                        <h2> {post.id} {post.title} </h2>
                    </div>
                )
            })}
        </div>
    )
}

export default PostList

export async function getStateProps() {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts/')
    const data = await response.json()

    return {
        props: {
            posts: data.slice(0, 3)
        }
    }
}
