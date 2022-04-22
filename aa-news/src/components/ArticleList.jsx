import {useEffect, useState} from 'react'
import { useParams } from 'react-router-dom'
import { getArticles } from '../utils/api';


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
                <li key={article.id} className="card"> 
                    <h1>{article.title}</h1>
                    <p>{article.body.slice(0, 180) + "...."}</p> 
                </li>
                )})}
        </ul>
       
    </div>
  )
}
