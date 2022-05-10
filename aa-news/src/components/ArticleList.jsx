import {useEffect, useState} from 'react';
import { useParams } from 'react-router-dom';
import { getArticles } from '../utils/api';
import { Link } from 'react-router-dom';


export const ArticleList = () => {
    const [articles, setArticles] = useState([])
    const {topic_slug} = useParams();
    
    useEffect(() => {
        getArticles(topic_slug).then((articlesFromApi)=> {
            setArticles(articlesFromApi)
        }).catch((err)=> {
            console.log(err)
        })
    }, [topic_slug])
    
  
  return (
    <div>
        <ul className='list-cards'>
            {articles.map((article) => {
                return (
                   
                <li key={article.article_id} className="card"> 
                    <h1>{article.title}</h1>
                    <p>{article.body.slice(0, 180) + "...."}</p> 
                    <Link to={`/articles/${article.article_id}`}>Read more</Link>
                </li>
                )})}
        </ul>
       
    </div>
  )
}
