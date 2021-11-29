import Link from "next/link"

function PostList({posts}) {
    console.log(posts)
    return (
        <div>
            <h1>List of Posts</h1>
            {posts.map(post => {
                return (
                    <div key={post.id}>
                    <Link href={`posts/${post.id}`}>
                        <a>
                            <h2> {post.id} {post.title} </h2>
                        </a>
                    </Link>
                    <hr />
                    </div>
                )
            })}
        </div>
    )
}

export default PostList

export async function getStaticProps() {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts/')
    const data = await response.json()
    return {
        props: {
            posts : data.slice(0, 3),
        },
        revalidate: 10,
    }
}
