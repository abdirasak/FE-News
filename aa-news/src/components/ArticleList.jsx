import {useEffect, useState} from 'react'
import { useParams } from 'react-router-dom'

export const ArticleList = () => {
    const [articles, setArticles] = useState([])
    const topic = useParams();

    console.log(topic)
    useEffect(() => {
    fetch('https://aa-news-api.herokuapp.com/api/articles')
    .then((res) => res.json())
    .then((data) => {
        setArticles(data.articles)
    })
    }, [])
    
    const filteredArticles = articles.filter((article) => article.topic === topic.topic)
    console.log(filteredArticles)
  return (
    <div>
        <ul className='list-cards'>
            {filteredArticles.map((article) => {
                return (
                <li key={article.id} className="card"> 
                    <h1>{article.title}</h1>
                    <p>{article.body.slice(0, 150) + "...."}</p> <a href="#">Read More</a>
                </li>
                )})}
        </ul>
    </div>
  )
}
