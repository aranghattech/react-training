import { useContext } from "react"
import { ThemeContext, LoginContext } from "./ThemeContext"

export default function RegularArticle({ article }) {

    let theme  = useContext(ThemeContext);
    let login = useContext(LoginContext);

    return (
        <div className={ theme == 'light' ?  "text-dark bg-light" : 'text-white bg-dark' }>
            <h1>{article.title} </h1>
            <p>{article.body}</p>

            { login && <button type='button'>Reply</button>}
        </div>
    )
}