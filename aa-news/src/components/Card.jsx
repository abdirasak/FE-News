import React from 'react'

export const Card = ({filtredByTopic}) => {
  return (
    <div>
        {/* <ul className='list-cards'>
            {filtredByTopic.map((article) => {
                return (
                <li key={article.id} className="card"> 
                    <h1>{article.title}</h1>
                    <p>{article.body.slice(0, 150) + "...."}</p> <a href="#">Read More</a>
                </li>
                )})}
        </ul> */}
    </div>
  )
}
