function NewArticleList({ article }) {
    return (
        <>
            <h1>
                List of new articles
            </h1>
            {article.map(article => {
                return (
                    <div key={article.id}>
                        <h2>{article.id} {article.title} | {article.catagory} </h2>
                    </div>
                )
            })}
        </>
    )
}

export default NewArticleList

export async function getServerSideProps() {
    const response = await fetch('http://localhost:4000/news')
    const data = await response.json()

    return {
        props: {
            article: data
        }
    }
}
