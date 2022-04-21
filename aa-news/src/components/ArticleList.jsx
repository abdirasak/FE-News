import {useEffect, useState} from 'react'

export const ArticleList = () => {
    const [articles, setArticles] = useState([])

    useEffect(() => {
    fetch('https://aa-news-api.herokuapp.com/api/articles')
    .then((res) => res.json())
    .then((data) => {
        setArticles(data.articles)
    })
    }, [])
  return (
    <div>
        <ul className='list-cards'>
            {articles.map((article) => {

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
