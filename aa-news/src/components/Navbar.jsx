import React from 'react'
import {Link} from 'react-router-dom';
import {useEffect, useState} from 'react'
import { getTopics } from '../utils/api';

export const Navbar = () => {
  const [topics, settopics] = useState([])

    useEffect(() => {
    getTopics().then((topicList) => {
      settopics(topicList)
    })
    }, [])

        function capitalize(s){
        return s[0].toUpperCase() + s.slice(1);
    }
  

  return (
    <div className='nav-bar'> 
      <ul>
        {topics.map((topic) => {
              return (<li className="link" key={topic.slug}>
                <Link to={`/topics/${topic.slug}`} >{capitalize(topic.slug)}</Link>
              </li>
            )
            })}
      </ul>
        

    </div>
  )
}
