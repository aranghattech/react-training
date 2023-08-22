import logo from './logo.svg';
import './App.css';
import Message from './Message';
import Article from './Article';
import RegularArticle from './RegularArticle';
import { getArticleComponent } from './ArticleComponentSelector';
import { useState } from 'react';
import { LoginContext, ThemeContext } from './ThemeContext';

function App() {

  let [theme,setTheme] = useState("light");
  let [isLoggedIn,setLoginStatus] = useState(false);

  let articles = [
    {title:"News 1", body: "New 1 Body", highlight: true, category: "breaking"},
    {title:"News 2", body: "New 1 Body" , category: "normal"},
    {title:"News 3", body: "New 1 Body" , category: "breaking"},
    {title:"News 4", body: "New 1 Body" , highlight: true, category: "sponsered"},
  ]

  return (
    <div className='container'>
      <div className='row'>
        <div className='col'></div>
        <div className='col'>
          <button className='btn btn-light' onClick={() => setTheme('light')}>Light</button>
          <button className='btn btn-dark'  onClick={() => setTheme('dark')}>Dark</button>
        </div>
        <div className='col'>
          <button type='button' onClick={() => setLoginStatus(!isLoggedIn)}>{ isLoggedIn ? "Logout" : "Login" }</button>
        </div>
      </div>
      <div className='row'>
        <LoginContext.Provider value={isLoggedIn}>
        <h1>Breaking News</h1>
        <Article article={{title:"News 1", body: "New 1 Body"}} />
        <div className='col'>
        <ThemeContext.Provider value={theme}>
            <Message message="Trending news" >
                {articles.map((article, index) => { 
                                      return article.highlight ?
                                        <Article key={index} article={article} /> 
                                      :
                                          <RegularArticle key={index} article={article} />
                                    //return  getArticleComponent({ article , index});

                                      
                }) }
                
            </Message>
            
        </ThemeContext.Provider>
        <ThemeContext.Provider value={theme == 'light' ? 'dark' : 'light'}>
            <RegularArticle article={{title:"News 1", body: "New 1 Body"}} />
        </ThemeContext.Provider>
        </div>
        </LoginContext.Provider>
      </div>
       
       
    </div>
  );
}

export default App;
