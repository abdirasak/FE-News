import React from 'react'
import {Link} from 'react-router-dom';
import {useEffect, useState} from 'react'
export const Navbar = () => {
  const [topics, settopics] = useState([])

    useEffect(() => {
    fetch('https://aa-news-api.herokuapp.com/api/topics')
    .then((res) => res.json())
    .then((data) => {
        settopics(data.topics)
    })
    }, [topics])

        function capitalize(s){
        return s[0].toUpperCase() + s.slice(1);
    }

  return (
    <div className='nav-bar'> 
        {topics.map((topic) => {
          return <Link className="link" to={`/articles/${topic.slug}`} >{capitalize(topic.slug)}</Link>
        })}

    </div>
  )
}
