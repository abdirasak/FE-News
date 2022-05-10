import {Fragment, useEffect, useState} from 'react';
import { getArticleById } from '../utils/api';
import { useParams } from 'react-router-dom';

export const SingleArticle = () => {
  const {article_id} = useParams();
  const [article, setArticle] = useState({});

  useEffect(() => {
    getArticleById(article_id).then((articleData)=> {
        setArticle(articleData)
    }).catch((err)=> {
        console.log(err)
    })
}, [article_id])
console.log(article.title)
  return (
    <>
    <div className='singlePage_container'>
      <section className='main'>
        <h4>{article.title}</h4>
        <small><span>Author:</span> {article.author} </small>
        <small><span>Comments:</span> {article.comment_count} </small>
        <small><span>Topic:</span> {article.topic} </small>
        <p>{article.body}</p>

        
      </section>
        

      
    </div>
    </>
  )
}
