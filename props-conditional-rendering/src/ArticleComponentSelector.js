import React from 'react';
import Article from './Article';
import RegularArticle from './RegularArticle';

export function getArticleComponent({ article , index}) {
    switch(article.category) {
        case "breaking": return <Article key={index} article={article} />
        case "normal": return <RegularArticle key={index} article={article} />
        case "sponsered": return <RegularArticle key={index} article={article} />
    }
}