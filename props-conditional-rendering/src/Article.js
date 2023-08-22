export default function Article({ article }) {
    return (
        <div className="bg-warning">
            <h1>{article.title} </h1>
            { article.highlight && <h6 className="text-primary">
                                 Breaking News</h6>  }
          
            <p>{article.body}</p>
        </div>
    )
}
