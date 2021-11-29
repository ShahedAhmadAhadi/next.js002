function ArticleListByCatagory({ articles, catagory }) {
    return (
        <>
            <h1>Showing new for catagory <i>{catagory}</i></h1>
            {
                articles.map(article => {
                    return (
                        <div key={article.id}>
                            <h2>{article.id} {article.title}</h2>
                            <p>{article.discription}</p>
                        </div>
                    )
                })
            }
        </>
    )
}

export default ArticleListByCatagory

export async function getServerSideProps(context) {
    const { params } = context
    const { catagory } = params
    const response = await fetch(`http://localhost:4000/news?catagory=${catagory}`)
    const data = await response.json()

    return {
        props: {
            articles: data,
            catagory,
        }
    }
}
